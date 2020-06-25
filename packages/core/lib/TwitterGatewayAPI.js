const log = require('loglevel')
// Load the full build.
const _ = require('lodash')
const Twitter = require('twitter')

class TwitterGatewayAPI{

    client

    constructor(authParams) {this.client = new Twitter(authParams)}



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
        // allResults.forEach(ele => console.log(ele.connections))
        return aggResults
    }

    //GET GET users/lookup
    //https://developer.twitter.com/en/docs/accounts-and-users/follow-search-get-users/api-reference/get-users-lookup
    // Rate limited?	Yes
    // Requests / 15-min window (user auth)	900
    // Requests / 15-min window (app auth)	300

    getUsersInfoURL = "https://api.twitter.com/1.1/users/lookup.json"
    async getUsersLookup(screen_names){
        let arrayChunks = this.chunkArray(screen_names, 100)
        let chunkPromises = []
        let chunkResults = []
        let obj = this
        arrayChunks.forEach(function(chunk) {
            let concatChunk = chunk.join(',')
            let params = {screen_name: concatChunk}
            chunkPromises.push(
                obj.promiseGet(obj.getUsersInfoURL, params).then(values => chunkResults.push(values)),
            )
        })

        await Promise.all(chunkPromises)
        return chunkResults.flat()
    }
    //GET account/verify_credentials
    //https://developer.twitter.com/en/docs/accounts-and-users/manage-account-settings/api-reference/get-account-verify_credentials
    // Rate limited?	Yes
    // Requests / 15-min window (user auth)	75
    VerifyCredentialsURL = "https://api.twitter.com/1.1/account/verify_credentials.json"
    async getVerifyCredentials(){
        return this.promiseGet(this.VerifyCredentialsURL, {});
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

    getError(error){
        if(_.isArray(error) && error.length > 0){
            let errObj = _.head(error);
            if(!_.isUndefined(errObj.message) && errObj.code){return errObj}
        }

        return {code: -1, message: "UNKNOWN ERROR"};
    }

    logErrorWarning(error, prefix, append){
        prefix = _.isUndefined(prefix) ? "" : prefix + " ";
        append = _.isUndefined(append) ? "" : " " + append ;
        let errObj = this.getError(error)
        log.warn(prefix + "ERROR: " + errObj.message + " CODE: " + errObj.code + append);
    }
}

module.exports = TwitterGatewayAPI
