const logger = require('pino')({prettyPrint:true})
const log = require('loglevel')
// Load the full build.
const _ = require('lodash')
const Twitter = require('twitter')
const Conf = require('conf')
const GatewayAPI = require('./TwitterGatewayAPI')

class TwitterExportProcessor {
  tweetsFile
  usersFile
  configFile
  rankFile
  campaignsFile
  api_callsFile
  messagesFile

  gatewayAPI

  tweets
  users
  campaigns
  messages

  constructor(authParams, dir) {
    let options = {}
    if (dir) {
      options.cwd = dir
    }

    this.tweetsFile = new Conf(_.extend({configName: 'tweets'}, options))
    this.usersFile = new Conf(_.extend({configName: 'users'}, options))
    this.configFile = new Conf(_.extend({configName: 'twitter-config'}, options))
    this.rankFile = new Conf(_.extend({configName: 'rankings'}, options))
    this.campaignsFile = new Conf(_.extend({configName: 'campaigns'}, options))
    this.messagesFile = new Conf(_.extend({configName: 'messages'}, options))

    this.api_callsFile = new Conf(_.extend({configName: 'api_calls'}, options))

    this.gatewayAPI = new GatewayAPI(authParams)
  }

  getCampaignsStore() {
    return this.campaignsFile
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

  fullTimeline = 800
  numCheckRetweets = 25
  fullMentionsLookback = 800

  async scan(tweetLookback, retweets, mentionsLookback) {
    if (_.isUndefined(tweetLookback)) {
      tweetLookback = this.fullTimeline
    }
    if (_.isUndefined(retweets)) {
      retweets = this.numCheckRetweets
    }
    if (_.isUndefined(mentionsLookback)) {
      mentionsLookback = this.fullMentionsLookback
    }

    log.info('Starting Twitter Scan...')
    await this.scanTweets(tweetLookback)
    await this.scanEngagement(retweets, mentionsLookback)
    await this.buildRankings()
    //Sort by biggest difference between retweet_count and last_retweet_scan_count
  }

  DefaultCampaignBatch = 10
  //PARAMETERS:
  //num_batch: How many users to process in the rankings
  //whitelist: Only send DMs to these specified users,  ignores rankings, [<screen_name>,<screen_name>],
  //blacklist: Do not attempt to send DMs to these specified users, filters rankings, [<screen_name>,<screen_name>]
  //dry_run: Must be false to send DMs, otherwise only output confirming DM would be sent is provided
  async getNewCampaign(params) {
    let rankings = await this.getStoredRankings()
    let campaigns = await this.getStoredCampaigns()

    if (_.isUndefined(params.num_batch)) {
      params.num_batch = this.DefaultCampaignBatch
    }
    if (_.isUndefined(params.whitelist)) {
      params.whitelist = []
    }
    if (_.isUndefined(params.blacklist)) {
      params.blacklist = []
    }
    if (_.isUndefined(params.dry_run)) {
      params.dry_run = true
    }

    //Clear out dry runs (if not dry run)
    if (!params.dry_run) {
      campaigns = _.pickBy(campaigns, k => {
        return !k.dry_run
      })
    }
    log.log('Creating New Campaign. Batch Size: ' + params.num_batch)

    let users_to_check = []

    //Check Whitelist
    if (_.isArray(params.whitelist) && params.whitelist.length > 0) {
      log.log('Campaign Whitelist Detected: ' + params.whitelist)
      users_to_check = _.filter(rankings, k => {
        return params.whitelist.includes(k.screen_name)
      })
    } else {
      //Filter out users who have already been sent DMs from rankings
      let sent_to_already = _.flatMap(campaigns, k => {
        return k.sent_to
      })
      // console.log('sent_to_total', sent_to_already)
      rankings = _.filter(rankings, k => {
        return !sent_to_already.includes(k.id_str)
      })

      //Check Blacklist
      if (_.isArray(params.blacklist) && params.blacklist.length > 0) {
        log.log('Campaign Blacklist Detected: ' + params.blacklist)
        rankings = _.filter(rankings, k => {
          return !params.blacklist.includes(k.screen_name)
        })
      }
      //Get Followers from rankings
      users_to_check = await this.getFollowersBatchFromRankings(rankings, params.num_batch);

      //Otherwise Get Batch of Most Engaged
      // console.log(params.num_batch)
      users_to_check = users_to_check.slice(0, params.num_batch)
    }



    log.log('Checking campaign batch for followers...')
    // console.log(user_friendships);


    log.log('Of the campaign batch ' + users_to_check.length + ' are followers.')

    let campaign_params = {
      num_batch: params.num_batch,
      whitelist: params.whitelist,
      blacklist: params.blacklist,
      campaign_users: users_to_check,
      created_at: Date.now(),
      dry_run: params.dry_run,
      sent_to: [], //Will be array of id_str
      message: params.message, //Message sent via DM
    }

    return campaign_params
  }

  //PARAMS
    // num_batch: 10,
    // whitelist:["femyeda","DevScrape"],
    // blacklist:["femyeda"],
    // message: 'this message',
    // dry_run: true,
  asyncFunc(e) {
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve(e), 1000);
      console.log(e + " completed DM");
    });
  }

  async runCampaign(params){
    //if dry_run false, then all dry_runs will be filtered out when calculating a batch, but you can still delete to get rid of unnecessary dry_run data
    await this.pullStoredAPICalls();
    if (!params.dry_run) {await this.clearCampaignDryRuns()}

    //Get New Campaign
    let v = await this.getNewCampaign(params).catch(err => console.log(err))

    //Send DMs Out
    let arr = []

    let c_users = _.clone(v.campaign_users);

    while(c_users.length > 0){
      let user = _.head(c_users);
      let args = {recipient_id:user.id_str, text:params.message}
      logger.info(`Sending DM "${args.text}" to ${user.screen_name}`)
      let result = await this.gatewayAPI.sendDM(args, params.dry_run);

      let messageInfo = {
        id_str:user.id_str,
        result:result,
        message:params.message,
        screen_name: user.screen_name,
        dry_run: params.dry_run
      }

      arr.push(messageInfo)
      c_users.shift()
    }


    // log.log(arr)
    arr = _.filter(arr, e => {return !_.isUndefined(e.result.id)})
    v.sent_to = _.map(arr,'id_str')

    this.messages = await this.getStoredMessages()
    this.messages = this.messages.concat(arr)
    await this.storeLocalMessages()


    //Store Results to DB
    await this.storeCompletedCampaign(v)
    await this.storeLocalAPICalls()
  }

  async getFollowersBatchFromRankings(users_to_check, num_batch) {
    //Check if Follower
    let user_ids = _.flatMap(users_to_check, k => {
      return k.id_str
    })
    let follower_ids_agg = [];

    let arrayChunks = this.gatewayAPI.chunkArray(user_ids, 100)

    let errorFound = false;

    while (arrayChunks.length > 0 && !errorFound && follower_ids_agg.length < num_batch)
    {


      let user_friendships = await this.gatewayAPI.getFriendshipStatus(arrayChunks.shift()).catch(err => {
        this.gatewayAPI.logErrorWarning(err, 'TWITTER FOLLOWER API', 'PLEASE WAIT 15 MINUTES')
        return this.gatewayAPI.getError(err)
      })


      //Stop if Rate Limit Reached
      if(!_.isUndefined(user_friendships) && !_.isUndefined(user_friendships.message)){break;}

      let followers = !_.isUndefined(user_friendships) ? user_friendships.followerResults : []
      let follower_ids = _.flatMap(followers, k => {
        return k.id_str
     })
      follower_ids_agg = follower_ids_agg.concat(follower_ids)


  }

    users_to_check = _.filter(users_to_check, k => {
      return follower_ids_agg.includes(k.id_str)
    })

    return users_to_check
  }


  async clearCampaignDryRuns() {
    let campaigns = await this.getStoredCampaigns()
    campaigns = _.pickBy(campaigns, k => {
      return !k.dry_run
    })
    return await this.storeCampaigns(campaigns)
  }

  //Pass in a completed campaign_details with sent_to
  async storeCompletedCampaign(comp) {
    let campaigns = await this.getStoredCampaigns()
    if (!_.isUndefined(comp) && !_.isUndefined(comp.created_at) && comp.campaign_users.length > 0) {
      log.log('Storing Campaign: ' + comp.created_at)
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

    let self = this

    let rankedUsers = _.mapValues(this.users, function(k) {
      return self.getRankedUserObjFromTweetUser(k)
    })

    rankedUsers = _.sortBy(rankedUsers, function(k) {
      return k.rank_score
    })
    rankedUsers = _.reverse(rankedUsers)

    log.info('Storing Rankings into file...')
    await this.storeRankings(rankedUsers)
      .then(() => log.info('Rankings saved to file.'))
      .catch(err => log.warn('WARNING: ' + err))
  }

  getRankedUserObjFromTweetUser(k) {
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
      followers: k.followers_count ? k.followers_count : 0,
      retweet_count: retweet_count,
      mention_count: mention_count,
    }

    return params
  }

  async scanEngagement(numRetweetScan, numMentionsScan) {
    log.info('Scanning Retweeters.')

    await this.pullStoredAPICalls();

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
          self.gatewayAPI
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
    let mentions = await this.gatewayAPI.getMentionsTimeline(numMentionsScan)
    // mentions = []
    log.info(mentions.length + ' mentions have been found. ')
    log.info('Processing Mentions into user data.')
    mentions.forEach(function(tweet) {
      if (!_.isUndefined(tweet)) {
        let user_id = tweet.user.id_str
        let in_reply_to_status_id_str = tweet.in_reply_to_status_id_str
        updateAggUsers.push(user_id)
        self.updateLocalUserObjMentions(
          user_id,
          tweet.id_str,
          tweet.created_at,
          in_reply_to_status_id_str,
          tweet.text,
        )
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

    await this.storeLocalAPICalls();
  }

  setLocalUserObjIfNotThere(id_str) {
    if (_.isUndefined(this.users[id_str])) {
      log.info('New User Found and Generated: ' + id_str)
      this.users[id_str] = {id_str: id_str, num_dms_sent: 0}
      this.users[id_str]['retweets'] = {}
      this.users[id_str]['mentions'] = {}
    }
  }

  updateLocalUserObjFromTweetUser(tweet_user) {
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
    await this.pullStoredAPICalls();

    tweetLookback = !_.isUndefined(tweetLookback) ? tweetLookback : this.fullTimeline
    log.info('Starting Tweet Timeline Scan. Lookback is ' + tweetLookback)
    //Scan User Timeline Tweets
    log.info('Grabbing Timeline Tweets from Twitter API...')
    let tweets = await this.gatewayAPI.getUserTimelineTweets(tweetLookback, await this.getConfUsername())
    log.info(tweets.length + ' Timeline Tweets have been collected.')
    //Store Scanned Tweets
    await this.processTweets(tweets)
    await this.storeLocalAPICalls();
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


  async pullStoredAPICalls() {
    let storedCalls = await this.loadData(this.api_callsFile, 'api_calls')
    this.gatewayAPI.api_calls =  _.isUndefined(storedCalls) ? {} : storedCalls
  }
  async getStoredCampaigns() {
    let campaigns = await this.loadData(this.getCampaignsStore(), 'campaigns')
    return _.isUndefined(campaigns) ? {} : campaigns
  }

  async storeCampaigns(campaigns) {
    return this.saveData(this.getCampaignsStore(), 'campaigns', campaigns)
  }
  async storeLocalUsers() {
    return this.saveData(this.usersFile, 'users', this.users)
  }
  async storeLocalMessages() {
    return this.saveData(this.messagesFile, 'messages', this.messages)
  }

  async storeLocalAPICalls() {
    return this.saveData(this.api_callsFile, 'api_calls', this.gatewayAPI.cleanApiCalls())
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
  async getStoredMessages() {
    let messages = await this.loadData(this.messagesFile, 'messages')
    return _.isUndefined(messages) ? [] : messages
  }

  async cleanStoredApiCalls(){
    await this.pullStoredAPICalls()
    this.gatewayAPI.cleanApiCalls()
    await this.storeLocalAPICalls()
  }

  async storeLocalTweets() {
    return this.saveData(this.tweetsFile, 'tweets', this.tweets)
  }
}

module.exports = TwitterExportProcessor
