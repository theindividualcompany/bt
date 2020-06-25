const log = require('loglevel')
// Load the full build.
const _ = require('lodash')
const Twitter = require('twitter')
const Conf = require('conf')

class TwitterExportProcessor {
  tweetsFile
  usersFile
  configFile
  rankFile
  campaignsFile

  gatewayAPI

  tweets
  users

  constructor(authParams, dir) {
    let options = {}
    if (dir) {
      options.cwd = dir
    }

    this.tweetsFile = new Conf(_.extend({configName: 'tweets'}, options))
    this.usersFile = new Conf(_.extend({configName: 'users'}, options))
    this.configFile = new Conf(_.extend({configName: 'twitter-config'}, options))
    this.rankFile = new Conf(_.extend({configName: 'rankings'}, options))

    this.client = new Twitter(authParams)
  }

  getTweetStore() {
    return this.tweetsFile
  }

  getUsersStore() {
    return this.usersFile
  }

  getConfigStore() {
    return this.configFile
  }

  getRankStore() {
    return this.rankFile
  }

  setConfUsername(username) {
    this.saveData(this.configFile, 'username', username)
  }
  getConfUsername() {
    return this.loadData(this.configFile, 'username')
  }

  loadData(file, key) {
    return file.get(key)
  }
  saveData(file, key, value) {
    return file.set(key, value)
  }
  deleteData(file, key) {
    file.delete(key)
  }

  fullTimeline = 400
  numCheckRetweets = 25
  fullMentionsLookback = 800

  async scan(tweetLookback, retweets, mentionsLookback) {
    if (_.isUndefined(tweetLookback)) {tweetLookback = this.fullTimeline}
    if (_.isUndefined(retweets)) {retweets = this.numCheckRetweets}
    if (_.isUndefined(mentionsLookback)) {mentionsLookback = this.fullMentionsLookback}

    log.info('Starting Twitter Scan...')
    await this.scanTweets(tweetLookback)
    await this.scanEngagement(retweets, mentionsLookback)
    await this.buildRankings()
    //Sort by biggest difference between retweet_count and last_retweet_scan_count
  }

  DefaultCampaignBatch = 10;
  //PARAMETERS:
  //num_batch: How many users to process in the rankings
  //whitelist: Only send DMs to these specified users,  ignores rankings, [<screen_name>,<screen_name>],
  //blacklist: Do not attempt to send DMs to these specified users, filters rankings, [<screen_name>,<screen_name>]
  //dry_run: Must be false to send DMs, otherwise only output confirming DM would be sent is provided
  async getNewCampaign(params){

    let rankings = await this.getStoredRankings();
    let campaigns = await this.getStoredCampaigns();

    if (_.isUndefined(params.num_batch)) {params.num_batch = this.DefaultCampaignBatch}
    if (_.isUndefined(params.whitelist)) {params.whitelist = []}
    if (_.isUndefined(params.blacklist)) {params.blacklist = []}
    if (_.isUndefined(params.dry_run)) {params.dry_run = true}

    //Clear out dry runs (if not dry run)
    if(!params.dry_run){
      campaigns = _.pickBy(campaigns, k => {return !k.dry_run})
    }
    log.log("Creating New Campaign. Batch Size: " + params.num_batch);

    let users_to_check = [];

    //Check Whitelist
    if(_.isArray(params.whitelist) && params.whitelist.length > 0){
      log.log("Campaign Whitelist Detected: " + params.whitelist);
      users_to_check = _.filter(rankings, k => {return params.whitelist.includes(k.screen_name) })
    }
    else{
      //Filter out users who have already been sent DMs from rankings
      let sent_to_already = _.flatMap(campaigns, k => {return k.sent_to})
      console.log("sent_to_total",sent_to_already);
      rankings = _.filter(rankings, k => {return !sent_to_already.includes(k.id_str)})

      //Check Blacklist
      if(_.isArray(params.blacklist) && params.blacklist.length > 0){
        log.log("Campaign Blacklist Detected: " + params.blacklist);
        rankings = _.filter(rankings, k => {return !params.blacklist.includes(k.screen_name) })
      }

      //Otherwise Get Batch of Most Engaged
      // console.log(params.num_batch)
      users_to_check = rankings.slice(0,params.num_batch)

    }



    //Check if Follower
    let user_ids = _.flatMap(users_to_check, k => {return k.id_str})

    log.log("Checking campaign batch for followers...")
    // console.log(user_friendships);

    let user_friendships = await this.gatewayAPI.getFriendshipStatus(user_ids).catch(err => {this.gatewayAPI.logErrorWarning(err, "TWITTER FOLLOWER API", "PLEASE WAIT 15 MINUTES")});

    let followers = !_.isUndefined(user_friendships) ? user_friendships.followerResults : []
    let follower_ids = _.flatMap(followers, k => {return k.id_str})
    users_to_check = _.filter(users_to_check, k => {return follower_ids.includes(k.id_str)})
    log.log("Of the campaign batch " + users_to_check.length + " are followers.")

    let campaign_params = {
      num_batch:params.num_batch,
      whitelist:params.whitelist,
      blacklist:params.blacklist,
      campaign_users:users_to_check,
      created_at: Date.now(),
      dry_run:params.dry_run,
      sent_to: [], //Will be array of id_str
      message: ""  //Message sent via DM
    }

    return campaign_params;
  }

  async clearCampaignDryRuns(){
    let campaigns = await this.getStoredCampaigns();
    campaigns = _.pickBy(campaigns, k => {return !k.dry_run})
    return await this.storeCampaigns(campaigns)
  }

  //Pass in a completed campaign_details with sent_to
  async storeCompletedCampaign(comp){
    let campaigns = await this.getStoredCampaigns()
    if(!_.isUndefined(comp) && !_.isUndefined(comp.created_at)) {
      log.log("Storing Campaign: " + comp.created_at);
      campaigns[comp.created_at] = comp
      await this.storeCampaigns(campaigns)
    }
  }


  getTopRetweetedTweets(tweets, numTweetsReturned) {
    let sortedTweets = _.filter(tweets, function(tweet) {
      return tweet.retweet_count !== tweet.last_retweet_scan_count
    })
    sortedTweets = _.sortBy(sortedTweets, [
      function(tweet) {
        return tweet.retweet_count - tweet.last_retweet_scan_count
      },
    ])
    sortedTweets = _.reverse(sortedTweets).slice(0, numTweetsReturned)
    return sortedTweets
  }

  async buildRankings() {
    log.info('Loading Stored Users From File into memory.')
    log.warn('WARNING: Data loss will occur if program exits before data is stored to file.')
    this.users = await this.getStoredUsers()

    let self = this;

    let rankedUsers = _.mapValues(this.users, function(k) {return self.getRankedUserObjFromTweetUser(k);})

    rankedUsers = _.sortBy(rankedUsers, function(k) {return k.rank_score})
    rankedUsers = _.reverse(rankedUsers)

    log.info('Storing Rankings into file...')
    await this.storeRankings(rankedUsers)
      .then(() => log.info('Rankings saved to file.'))
      .catch(err => log.warn('WARNING: ' + err))
  }

  getRankedUserObjFromTweetUser(k){
    let retweet_count = _.isUndefined(k.retweet_count) ? 0 : k.retweet_count
    let mention_count = _.isUndefined(k.mention_count) ? 0 : k.mention_count

    let params = {
      id_str: k.id_str,
      rank_score: retweet_count + mention_count,
      screen_name: k.screen_name,
      name: k.name ? k.name : '',
      profile_image_url_https: k.profile_image_url_https ? k.profile_image_url_https : '',
      verified: k.verified ? k.verified : false,
      url: k.url ? k.url : '',
      location: k.location ? k.location : '',
      description: k.description ? k.description : '',
      followers: k.followers ? k.followers : 0,
      retweet_count: retweet_count,
      mention_count: mention_count,
    }

    return params
  }

  async scanEngagement(numRetweetScan, numMentionsScan) {
    log.info('Scanning Retweeters.')

    log.info('Loading Stored Timeline Tweets From File into memory.')
    log.warn('WARNING: Data loss will occur if program exits before data is stored to file.')
    this.tweets = await this.getStoredTweets()

    log.info('Loading Stored Users From File into memory.')
    log.warn('WARNING: Data loss will occur if program exits before data is stored to file.')
    this.users = await this.getStoredUsers()

    log.info(
      'Collecting top ' +
        numRetweetScan +
        ' tweets with the highest difference in retweets for each scanned tweet.',
    )
    let targetTweets = this.getTopRetweetedTweets(this.tweets, numRetweetScan)
    log.info(targetTweets.length + ' tweets found with new retweeters.')
    let rt_promises = []
    let retweeters = []

    let updateAggUsers = []
    let updateTweetScanCount = []
    //Get All Retweeters
    let self = this

    if (targetTweets.length > 0) {
      log.info('Querying Twitter API for Retweeters of Top tweets.')
      targetTweets.forEach(function(tweet) {
        rt_promises.push(
          self
            .getAllRetweetsOfTweet(tweet.id_str)
            .then(function(results) {
              if (!_.isUndefined(results)) {
                retweeters.push(results)
                log.info('API SUCCESS: Found ' + results.length + ' retweeters for tweet ' + tweet.id_str)
                if (results.length === 0) {
                  log.info(
                    "Because 0 retweeters were found, updating last_retweet_scan_count so it doesn't keep checking",
                  )
                  self.updateLocalTweetObjRetweetScanCount(tweet.id_str)
                }
              }
            })
            .catch(function(err) {
              if (!_.isUndefined(err[0].message) && !_.isUndefined(err[0].code)) {
                log.info('API FAILURE: CODE:' + err.code + ' MESSAGE: ' + err.message)
              } else {
                log.error('catcherror', err)
              }
            }),
        )
      })

      await Promise.all(rt_promises)
      retweeters = retweeters.flat()
      // log.log(retweeters);

      // console.log(this.users);
      log.info('Processing Retweeters into user data.')

      retweeters.forEach(function(tweet) {
        if (!_.isUndefined(tweet)) {
          let retweeted_id = tweet.retweeted_status.id_str
          updateTweetScanCount.push(retweeted_id)
          let user_id = tweet.user.id_str
          updateAggUsers.push(user_id)
          // log.log(tweet.user)
          self.updateLocalUserObjRetweets(user_id, tweet.id_str, tweet.created_at, retweeted_id)
          self.updateLocalUserObjFromTweetUser(tweet.user)
        }
      })
    }

    // Get Mentions Engagement
    let mentions = await this.getMentionsTimeline(numMentionsScan)
    log.info(mentions.length + ' mentions have been found. ')
    log.info('Processing Mentions into user data.')
    mentions.forEach(function(tweet) {
      if (!_.isUndefined(tweet)) {
        let user_id = tweet.user.id_str
        let in_reply_to_status_id_str = tweet.in_reply_to_status_id_str
        updateAggUsers.push(user_id)
        self.updateLocalUserObjMentions(user_id, tweet.id_str, tweet.created_at, in_reply_to_status_id_str, tweet.text,)
        self.updateLocalUserObjFromTweetUser(tweet.user)
      }
    })

    updateTweetScanCount = _.uniq(updateTweetScanCount)
    updateAggUsers = _.uniq(updateAggUsers)
    updateTweetScanCount.forEach(function(id_str) {
      self.updateLocalTweetObjRetweetScanCount(id_str)
    })
    updateAggUsers.forEach(function(id_str) {
      self.updateLocalUserObjAggregates(id_str)
    })

    // log.log(this.users)
    // log.log(updateTweetScanCount);

    log.info('Storing Users into file...')
    await this.storeLocalUsers()
      .then(() => log.info('Users saved to file.'))
      .catch(err => log.warn('WARNING: ' + err))

    log.info('Storing Timeline Tweets into file...')
    await this.storeLocalTweets()
      .then(() => log.info('Timeline Tweets saved to file.'))
      .catch(err => log.warn('WARNING: ' + err))
  }

  setLocalUserObjIfNotThere(id_str) {
    if (_.isUndefined(this.users[id_str])) {
      log.info('New User Found and Generated: ' + id_str)
      this.users[id_str] = {id_str: id_str, num_dms_sent: 0}
      this.users[id_str]['retweets'] = {}
      this.users[id_str]['mentions'] = {}
    }
  }

  updateLocalUserObjFromTweetUser(tweet_user){
    let user_id = tweet_user.id_str
    this.updateLocalUserObjParam(user_id, 'followers_count', tweet_user.followers_count)
    this.updateLocalUserObjParam(user_id, 'screen_name', tweet_user.screen_name)
    this.updateLocalUserObjParam(user_id, 'name', tweet_user.name)
    this.updateLocalUserObjParam(user_id, 'url', tweet_user.url)
    this.updateLocalUserObjParam(user_id, 'profile_image_url_https', tweet_user.profile_image_url_https)
    this.updateLocalUserObjParam(user_id, 'verified', tweet_user.verified)
    this.updateLocalUserObjParam(user_id, 'location', tweet_user.location)
    this.updateLocalUserObjParam(user_id, 'description', tweet_user.description)
  }

  updateLocalUserObjAggregates(id_str) {
    if (!_.isUndefined(this.users[id_str])) {
      if (
        !_.isUndefined(this.users[id_str]['retweets']) &&
        Object.keys(this.users[id_str]['retweets']).length > 0
      ) {
        log.info('Processing retweet_count and last_retweet_created_at for user ' + id_str)
        let sortedRetweets = _.sortBy(this.users[id_str]['retweets'], function(rt) {
          return rt.created_at
        })
        this.updateLocalUserObjParam(id_str, 'retweet_count', sortedRetweets.length)
        this.updateLocalUserObjParam(id_str, 'last_retweet_created_at', _.last(sortedRetweets).created_at)
      }

      if (
        !_.isUndefined(this.users[id_str]['mentions']) &&
        Object.keys(this.users[id_str]['mentions']).length > 0
      ) {
        log.info('Processing mention_count and last_mention_created_at for user ' + id_str)
        let sortedMentions = _.sortBy(this.users[id_str]['mentions'], function(rt) {
          return rt.created_at
        })
        this.updateLocalUserObjParam(id_str, 'mention_count', sortedMentions.length)
        this.updateLocalUserObjParam(id_str, 'last_mention_created_at', _.last(sortedMentions).created_at)
      }
      // console.log(sortedTweets)
      // this.updateLocalUserObjParam(id_str, "retweets", sortedTweets);
    }
  }

  updateLocalUserObjRetweets(id_str, retweet_id, created_at, retweeted_id) {
    this.setLocalUserObjIfNotThere(id_str)
    if (_.isUndefined(this.users[id_str]['retweets'][retweet_id])) {
      log.info('New User Retweet Found: Adding Retweet ' + retweet_id + ' to user ' + id_str)
      this.users[id_str]['retweets'][retweet_id] = {created_at: created_at, retweeted_id: retweeted_id}
    }
  }

  updateLocalUserObjMentions(id_str, mention_id, created_at, in_reply_to_status_id_str, text) {
    this.setLocalUserObjIfNotThere(id_str)
    if (_.isUndefined(this.users[id_str]['mentions'][mention_id])) {
      log.info('New User Mention Found: Adding Mention ' + mention_id + ' to user ' + id_str)
      let mParams = {created_at: created_at, text: text}
      if (!_.isUndefined(in_reply_to_status_id_str) && in_reply_to_status_id_str !== null) {
        mParams['in_reply_to_status_id_str'] = in_reply_to_status_id_str
      }

      this.users[id_str]['mentions'][mention_id] = mParams
    }
  }

  updateLocalUserObjParam(id_str, parameter, value) {
    this.setLocalUserObjIfNotThere(id_str)
    log.info('Updating User Parameter ' + parameter + ' to ' + value)
    this.users[id_str][parameter] = value
  }

  updateLocalTweetObjRetweetScanCount(id_str) {
    if (!_.isUndefined(this.tweets[id_str]) && !_.isUndefined(this.tweets[id_str]['retweet_count'])) {
      log.info(
        'Updating Tweet ' +
          id_str +
          ' last_retweet_scan_count from ' +
          this.tweets[id_str]['last_retweet_scan_count'] +
          ' to ' +
          this.tweets[id_str]['retweet_count'],
      )
      this.updateLocalTweetObjParam(id_str, 'last_retweet_scan_count', this.tweets[id_str]['retweet_count'])
    }
  }

  updateLocalTweetObjParam(id_str, parameter, value) {
    if (!_.isUndefined(this.tweets[id_str])) {
      this.tweets[id_str][parameter] = value
    }
  }

  async scanTweets(tweetLookback) {
    tweetLookback = !_.isUndefined(tweetLookback) ? tweetLookback : this.fullTimeline
    log.info('Starting Tweet Timeline Scan. Lookback is ' + tweetLookback)
    //Scan User Timeline Tweets
    log.info('Grabbing Timeline Tweets from Twitter API...')
    let tweets = await this.getUserTimelineTweets(tweetLookback, await this.getConfUsername())
    log.info(tweets.length + ' Timeline Tweets have been collected.')
    //Store Scanned Tweets
    await this.processTweets(tweets)
  }

  async processTweets(tweets) {
    log.info('Loading Stored Timeline Tweets From File into memory.')
    log.warn('WARNING: Data loss will occur if program exits before data is stored to file.')
    this.tweets = await this.getStoredTweets()

    log.info('Processing Timeline Tweets.')
    while (tweets.length > 0) {
      let tweetInfo = this.prepareTweetObj(tweets.shift())
      this.tweets[tweetInfo.id_str] = tweetInfo
    }

    log.info('Storing Timeline Tweets into file...')
    await this.storeLocalTweets()
      .then(() => log.info('Timeline Tweets saved to file.'))
      .catch(err => log.warn('WARNING: ' + err))
  }

  prepareTweetObj(tweet) {
    //Check Tweet Exists or Not
    let tweetStored = this.tweets[tweet.id_str]
    //Tweet Found In Storage
    if (!_.isUndefined(tweetStored)) {
      if (tweetStored.retweet_count < tweet.retweet_count) {
        log.info(
          'Retweet Count for tweet ' +
            tweet.id_str +
            ' of ' +
            tweetStored.retweet_count +
            ' updated to ' +
            tweet.retweet_count,
        )
        tweetStored = this.prepareUpdatedTweetObj(tweet, tweetStored)
      }
      return tweetStored
    }
    log.info('New Timeline Tweet ' + tweet.id_str + ' found and added to memory')
    return this.prepareNewTweetObj(tweet)
  }

  prepareUpdatedTweetObj(tweet, tweetStored) {
    if (tweet.id_str) {
      tweetStored.retweet_count = tweet.retweet_count
      tweetStored.favorite_count = tweet.favorite_count
    }
    return tweetStored
  }

  prepareNewTweetObj(tweet) {
    if (tweet.id_str) {
      let tweetData = {
        id_str: tweet.id_str,
        is_quote_status: tweet.is_quote_status,
        retweet_count: tweet.retweet_count,
        last_retweet_scan_count: 0,
        favorite_count: tweet.favorite_count,
        created_at: tweet.created_at,
        text: tweet.text,
      }
      return tweetData
    }
    return {}
  }

  async clearAllStoredUsers() {
    return this.deleteData(this.usersFile, 'users')
  }

  async getStoredUsers() {
    let storedUsers = await this.loadData(this.usersFile, 'users')
    return _.isUndefined(storedUsers) ? {} : storedUsers
  }

  async storeLocalUsers() {
    return this.saveData(this.usersFile, 'users', this.users)
  }

  async storeRankings(rankings) {
    return this.saveData(this.rankFile, 'rankings', rankings)
  }

  async clearAllStoredTweets() {
    return this.deleteData(this.tweetsFile, 'tweets')
  }

  async getStoredTweet(id_str) {
    return this.loadData(this.tweetsFile, 'tweets.' + id_str)
  }

  async getStoredTweets() {
    let storedTweets = await this.loadData(this.tweetsFile, 'tweets')
    return _.isUndefined(storedTweets) ? {} : storedTweets
  }
  async getStoredRankings() {
    let ranking = await this.loadData(this.getRankStore(), 'rankings')
    return _.isUndefined(ranking) ? {} : ranking
  }

  async storeLocalTweets() {
    return this.saveData(this.tweetsFile, 'tweets', this.tweets)
  }

  //GET followers/list
  //https://developer.twitter.com/en/docs/accounts-and-users/follow-search-get-users/api-reference/get-followers-list
  FollowersIDsURL = 'https://api.twitter.com/1.1/followers/ids.json'
  async getAllFollowerIDs() {
    let params = {count: 25, cursor: -1, stringify_ids: true}
    let results = await this.allPromiseGet(this.getFollowersIDsURL(), params, true)
    return results.reduce((a, {ids}) => a.concat(ids), [])
  }

  async getFollowerIDs(cursor) {
    console.log('cursor', cursor)
    cursor = typeof cursor !== 'undefined' ? cursor : -1
    return this.promiseGet(this.FollowersIDsURL, {count: 25, cursor: cursor, stringify_ids: true})
  }

  //GET statuses/retweeters/ids
  //https://developer.twitter.com/en/docs/tweets/post-and-engage/api-reference/get-statuses-retweeters-ids
  // Requests / 15-min window (user auth)	75
  // Requests / 15-min window (app auth)	300
  RetweetIDsURL = 'https://api.twitter.com/1.1/statuses/retweeters/ids.json'
  async getAllStatusRetweetIDs(tweet_id) {
    let params = {count: 100, id: tweet_id}
    let results = await this.allPromiseGet(this.RetweetIDsURL, params, true)
    return results.reduce((a, {ids}) => a.concat(ids), [])
  }

  //GET statuses/retweets/:id
  //https://developer.twitter.com/en/docs/tweets/post-and-engage/api-reference/get-statuses-retweets-id
  //Requests / 15-min window (user auth)	75
  //Requests / 15-min window (app auth)	300
  async getAllRetweetsOfTweet(tweet_id) {
    let params = {count: 100, id: tweet_id}
    let results = await this.allPromiseGet(this.getRetweetsURL(tweet_id), params)
    return results
  }

  getRetweetsURL(tweet_id) {
    return 'https://api.twitter.com/1.1/statuses/retweets/' + tweet_id + '.json'
  }

  //Depreciated
  async getAllUserTimelineTweets(screen_name, count, max_id) {
    max_id = !_.isUndefined(max_id) ? max_id : ''

    let params = {screen_name: screen_name, count: count, trim_user: true, include_rts: false}
    if (max_id !== '') {
      params.max_id = max_id
    }
    // log.log(params);
    let results = await this.allPromiseGet(this.TimelineTweetsURL, params)
    return results
  }
  //Depreciated
  async getExtraAllUserTimelineTweets(screen_name, count) {
    let fullResults = []
    let maxSingle = 200
    let remaining = count
    let max_id = ''
    do {
      let results = await this.getAllUserTimelineTweets(screen_name, Math.min(maxSingle, count), max_id)
      // log.log(results);
      if (_.isUndefined(results)) {
        log.warn('UNDEFINED RESULTS FOR TIMELINE TWEETS. Gracefully aborting scan...')
        break
      }
      let earliestTweet = _.last(results)
      max_id = earliestTweet.id_str
      // log.log(earliestTweet);
      // log.log(max_id);
      fullResults = fullResults.concat(results)
      remaining = remaining - maxSingle
      // console.log("remaining",remaining);
    } while (remaining > 0)

    return fullResults
  }

  RetweetsOfMeURL = 'https://api.twitter.com/1.1/statuses/retweets_of_me.json'
  async getRetweetsOfMe(count) {
    let params = {count: count}
    let results = await this.allPromiseGet(this.RetweetsOfMeURL, params)
    return results
  }

  //Depreciated
  async getUserTimelineTweetsWithRetweeterIDs(screen_name, count) {
    let timeline_tweets = await this.getAllUserTimelineTweets(screen_name, count)
    // console.log(timeline_tweets);
    let tweet_ids = []
    let obj = this
    timeline_tweets.forEach(function(element) {
      if (!_.isUndefined(element)) {
        element.retweet_ids = obj
          .getAllStatusRetweetIDs(element.id_str)
          .then(result => (element.retweet_ids = result))
      }
    })

    let promises = timeline_tweets.reduce((a, {retweet_ids}) => a.concat(retweet_ids), [])
    await Promise.all(promises)
    let all_retweeters = timeline_tweets
      .reduce((a, {retweet_ids}) => a.concat(retweet_ids), [])
      .filter((value, index, self) => self.indexOf(value) === index)
    let results = {
      timeline_tweets: timeline_tweets,
      all_retweeters: all_retweeters,
      num_retweeters: all_retweeters.length,
    }
    return results
  }

  //GET friendships/lookup
  // https://developer.twitter.com/en/docs/accounts-and-users/follow-search-get-users/api-reference/get-friendships-lookup
  // Requests / 15-min window (user auth)	15
  FriendshipStatusURL = 'https://api.twitter.com/1.1/friendships/lookup.json'
  async getFriendshipStatus(user_ids) {
    let arrayChunks = this.chunkArray(user_ids, 100)
    let chunkPromises = []
    let chunkResults = []
    let obj = this
    arrayChunks.forEach(function(chunk) {
      let concatChunk = chunk.join(',')
      let params = {user_id: concatChunk}
      chunkPromises.push(
        obj.promiseGet(obj.FriendshipStatusURL, params).then(values => chunkResults.push(values)),
      )
    })

    await Promise.all(chunkPromises)
    let allResults = chunkResults.flat()
    let followerResults = allResults.filter(user => user.connections.includes('followed_by'))
    let aggResults = {allResults: allResults, followerResults: followerResults}
    allResults.forEach(ele => console.log(ele.connections))
    return aggResults
  }

  //GET statuses/user_timeline
  //https://developer.twitter.com/en/docs/tweets/timelines/api-reference/get-statuses-user_timeline
  // Requests / 15-min window (user auth)	900
  // Requests / 15-min window (app auth)	1500
  // Requests / 24-hour window	100,000
  // MAX 200 Count results
  // include_rts means native retweets (You retweeted + their tweet)
  // 3200 Total Max
  // Works for any user
  TimelineTweetsURL = 'https://api.twitter.com/1.1/statuses/user_timeline.json'
  async getUserTimelineTweets(count, screen_name) {
    let extraParams = {trim_user: true, include_rts: false}
    if (!_.isUndefined(screen_name)) {
      extraParams['screen_name'] = screen_name
    }
    return await this.allPromiseGetTimeline(this.TimelineTweetsURL, count, extraParams)
  }

  //GET statuses/mentions_timeline
  //https://developer.twitter.com/en/docs/tweets/timelines/api-reference/get-statuses-mentions_timeline
  // Requests / 15-min window (user auth)	75
  // Requests / 24-hour window	100,000
  // 800 Total Max
  // Only works for authorized user
  MentionsTimelineURL = 'https://api.twitter.com/1.1/statuses/mentions_timeline.json'
  async getMentionsTimeline(count) {
    return await this.allPromiseGetTimeline(this.MentionsTimelineURL, count)
  }

  async allPromiseGetTimeline(endpoint, count, extraParams) {
    let fullResults = []
    let maxSingle = 200
    let remaining = count
    let max_id = ''
    extraParams = !_.isUndefined(extraParams) ? extraParams : {}

    do {
      let runParams = {count: Math.min(maxSingle, count)}
      Object.assign(runParams, extraParams)
      if (max_id !== '') {
        runParams.max_id = max_id
      }
      let results = await this.allPromiseGet(endpoint, runParams)

      if (_.isUndefined(results)) {
        log.warn('UNDEFINED RESULTS FOR TIMELINE TWEETS. Gracefully aborting scan...')
        break
      }

      let earliestTweet = _.last(results)
      max_id = earliestTweet.id_str
      fullResults = fullResults.concat(results)
      remaining = remaining - maxSingle
    } while (remaining > 0)

    return fullResults
  }

  //aggregateCollection => cursor navigation put all results into array
  async allPromiseGet(endpoint, params, aggregateCollection) {
    // console.log("aggregateCollection", aggregateCollection);
    aggregateCollection = typeof aggregateCollection !== 'undefined' ? aggregateCollection : false
    params.cursor = -1
    params.stringify_ids = true
    let errorFound = false
    let results
    if (aggregateCollection) {
      results = []
    }
    do {
      let getResult = await this.promiseGet(endpoint, params).catch(function(error) {
        errorFound = true
        if (!_.isUndefined(error[0].message) && !_.isUndefined(error[0].code)) {
          log.warn(
            'API ERROR FOR GATEWAY: ' + endpoint + ' CODE:' + error[0].code + ' MESSAGE: ' + error[0].message,
          )
        } else {
          log.warn('UNEXPECTED ERROR', error)
        }
      })
      if (errorFound === false) {
        // console.log("getResult",getResult);
        if (aggregateCollection) {
          results.push(getResult)
        } else {
          results = getResult
        }
      }
      params.cursor =
        typeof getResult !== 'undefined' && typeof getResult.next_cursor_str !== 'undefined'
          ? getResult.next_cursor_str
          : 0
    } while (params.cursor > 0 && errorFound === false)
    // console.log("results",results);
    return results
  }

  async promiseGet(endpoint, params) {
    return new Promise((resolve, reject) => {
      this.client.get(endpoint, params, function(error, tweets, response) {
        if (error) {
          reject(error)
        }
        if (tweets) {
          resolve(tweets)
        }
      })
    })
  }

  //https://scotch.io/courses/the-ultimate-guide-to-javascript-algorithms/array-chunking
  //Really elegant way I found
  chunkArray(array, size) {
    if (array.length <= size) {
      return [array]
    }
    return [array.slice(0, size), ...this.chunkArray(array.slice(size), size)]
  }
}

module.exports = TwitterExportProcessor
