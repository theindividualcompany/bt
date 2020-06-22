const log = require('loglevel')
// Load the full build.
const _ = require('lodash')
const Twitter = require('twitter')
const Conf = require('conf')
// const scanConfig = new Conf();

class TwitterExportProcessor {
  scanConfig

  client

  constructor() {
    this.scanConfig = new Conf()
    // console.log(this.scanConfig)
    let auth = {
      consumer_key: process.env.TWITTER_CONSUMER_KEY,
      consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
      access_token_key: process.env.TWITTER_ACCESS_TOKEN,
      access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET,
    }
    this.client = new Twitter(auth)
  }

  async setConfUsername(username) {
    await this.saveData('username', username)
  }
  async getConfUsername() {
    return await this.loadData('username')
  }

  loadData(key) {
    return this.scanConfig.get(key)
  }
  async saveData(key, value) {
    await this.scanConfig.set(key, value)
  }
  deleteData(key) {
    this.scanConfig.delete(key)
  }

  fullTimeline = 3300

  async scan() {
    //Scan User Timeline Tweets
    let tweets = await this.getExtraAllUserTimelineTweets(await this.getConfUsername(), this.fullTimeline)
    // log.trace(tweets);

    while (tweets.length > 0) {
      await this.syncTweet(tweets.shift())
    }

    // log.debug(this.getStoredTweets())
  }

  async syncTweet(tweet) {
    //Check Tweet Exists or Not
    let tweetStored = this.getStoredTweet(tweet.id_str)
    //Tweet Found In Storage
    if (!_.isUndefined(tweetStored)) {
      // log.debug("syncTweet tweetStored", tweetStored);

      // log.debug("syncTweet", "Tweet ID: " + tweet.id_str + " found");

      if (tweetStored.retweet_count < tweet.retweet_count) {
        await this.updateTweet(tweet)
      }
      return
    }

    await this.storeTweet(tweet)
  }

  async updateTweet(tweet) {
    if (tweet.id_str) {
      let prefix = 'tweets.' + tweet.id_str
      await this.saveData(prefix + '.retweet_count', tweet.retweet_count)
      await this.saveData(prefix + '.favorite_count', tweet.favorite_count)
    }
  }

  async storeTweet(tweet) {
    if (tweet.id_str) {
      let prefix = 'tweets.' + tweet.id_str
      await this.saveData(prefix + '.id_str', tweet.id_str)
      await this.saveData(prefix + '.is_quote_status', tweet.is_quote_status)
      await this.saveData(prefix + '.retweet_count', tweet.retweet_count)
      await this.saveData(prefix + '.last_retweet_scan_count', 0)
      await this.saveData(prefix + '.favorite_count', tweet.favorite_count)
      await this.saveData(prefix + '.created_at', tweet.created_at)
      await this.saveData(prefix + '.text', tweet.text)
      // log.debug("storeTweet", "Tweet ID: " + prefix, this.loadData(prefix))
    }
  }

  async clearAllTweets() {
    await this.deleteData('tweets')
  }
  getStoredTweet(id_str) {
    return this.loadData('tweets.' + id_str)
  }
  getStoredTweets() {
    return this.loadData('tweets')
  }

  //GET statuses/mentions_timeline
  //https://developer.twitter.com/en/docs/tweets/timelines/api-reference/get-statuses-mentions_timeline
  TimelineURL = 'https://api.twitter.com/1.1/statuses/mentions_timeline.json'

  async getMentionsTimeline(count) {
    return this.promiseGet(this.TimelineURL, {count: count})
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

  //GET statuses/user_timeline
  //https://developer.twitter.com/en/docs/tweets/timelines/api-reference/get-statuses-user_timeline
  // Requests / 15-min window (user auth)	900
  // Requests / 15-min window (app auth)	1500
  // Requests / 24-hour window	100,000
  // MAX 200 Count results
  // include_rts means native retweets (You retweeted + their tweet)
  // Limited to
  TimelineTweetsURL = 'https://api.twitter.com/1.1/statuses/user_timeline.json'
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
  async getExtraAllUserTimelineTweets(screen_name, count) {
    let fullResults = []
    let maxSingle = 200
    let remaining = count
    let max_id = ''
    do {
      let results = await this.getAllUserTimelineTweets(screen_name, maxSingle, max_id)
      // log.log(results);
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

  async getUserTimelineTweetsWithRetweeterIDs(screen_name, count) {
    let timeline_tweets = await this.getAllUserTimelineTweets(screen_name, count)
    // console.log(timeline_tweets);
    let tweet_ids = []
    let obj = this
    timeline_tweets.forEach(function(element) {
      element.retweet_ids = obj
        .getAllStatusRetweetIDs(element.id_str)
        .then(result => (element.retweet_ids = result))
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
        console.log(error)
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
