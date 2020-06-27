var formatISO = require('date-fns/formatISO')
var differenceInMinutes = require('date-fns/differenceInMinutes')
var subMinutes = require('date-fns/subMinutes')
var parseISO = require('date-fns/parseISO')

const log = require('loglevel')
// Load the full build.


const _ = require('lodash')
const Twitter = require('twitter')
const TwitterLite = require('twitter-lite')
const logger = require('pino')({prettyPrint:true})
const send_dm = require("./dm")

var Resources = require('./TwitterResources')
var TwitterLimits = require('./TwitterLimits')

class TwitterGatewayAPI{

    client
    clientLite
    api_calls

    constructor(authParams) {
        this.client = new Twitter(authParams)
        this.clientLite = new TwitterLite(authParams)
        this.api_calls = {}
    }

    //POST direct_messages/events/new (message_create)
    //https://developer.twitter.com/en/docs/direct-messages/sending-and-receiving/api-reference/new-event
    // Rate limited?	Yes
    // Requests / 24-hour window	1000 per user; 15000 per app
    SendDMURL = "https://api.twitter.com/1.1/direct_messages/events/new.json";
    SendDMURL_RequestRatelimit = 1000
    SendDMURL_RechargeMins = 3600
    //recipient_id: user id_str to send message to
    //text: message contents
    //reply_options
    async sendDM(args, dry_run){
        if(_.isUndefined(dry_run)){dry_run = true;}
        if(_.isUndefined(args.recipient_id)){return {id:"-2", err_msg:"need recipient_id"};}
        if(_.isUndefined(args.text)){return {id:"-3", err_msg:"need text"};}

        this.logAPICall(this.SendDMURL)
        if(dry_run){
            logger.info(`DRY RUN: Sending DM "${args.text}" to ${args.recipient_id}`)
            return this.asyncFuncDelay({id:"-1", timestamp:'1593167166488'}, true).catch((e)=> {return e})
        }
        else{
            return await send_dm.dm(this.clientLite, args).catch((e)=>{return e})
        }
    }

    //https://developer.twitter.com/en/docs/basics/response-codes
    asyncFuncDelay(e, res) {
        return new Promise((resolve, reject) => {
            let error = {"errors":[{"message":"Sorry, that page does not exist","code":34}]}
            setTimeout(() => res ? resolve(e) : reject(error), 1000);
        });
    }

    //GET followers/list
    //https://developer.twitter.com/en/docs/accounts-and-users/follow-search-get-users/api-reference/get-followers-list
    // Rate limited?	Yes
    // Requests / 15-min window (user auth)	15
    // Requests / 15-min window (app auth)	15
    FollowersIDsURL = 'https://api.twitter.com/1.1/followers/ids.json'
    FollowersIDsURL_RequestRatelimit = 15
    FollowersIDsURL_RechargeMins = 15

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
    RetweetIDsURL_RequestRatelimit = 75
    RetweetIDsURL_RechargeMins = 15

    async getAllStatusRetweetIDs(tweet_id) {
        let params = {count: 100, id: tweet_id}
        let results = await this.allPromiseGet(this.RetweetIDsURL, params, true)
        return results.reduce((a, {ids}) => a.concat(ids), [])
    }

    //GET statuses/retweets/:id
    //https://developer.twitter.com/en/docs/tweets/post-and-engage/api-reference/get-statuses-retweets-id
    //Requests / 15-min window (user auth)	75
    //Requests / 15-min window (app auth)	300
    getRetweetsURL_SUBSTRING = "https://api.twitter.com/1.1/statuses/retweets/"
    getRetweetsURL_RequestRatelimit = 75
    getRetweetsURL_RechargeMins = 15
    async getAllRetweetsOfTweet(tweet_id) {
        let params = {count: 100, id: tweet_id}
        let results = await this.allPromiseGet(this.getRetweetsURL(tweet_id), params)
        return results
    }

    getRetweetsURL(tweet_id) {
        return this.getRetweetsURL_SUBSTRING + tweet_id + '.json'
    }


    //GET friendships/lookup
    // https://developer.twitter.com/en/docs/accounts-and-users/follow-search-get-users/api-reference/get-friendships-lookup
    // Requests / 15-min window (user auth)	15
    FriendshipStatusURL = 'https://api.twitter.com/1.1/friendships/lookup.json'
    FriendshipStatusURL_RequestRatelimit = 15
    FriendshipStatusURL_RechargeMins = 15
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
    getUsersInfoURL_RequestRatelimit = 900
    getUsersInfoURL_RechargeMins = 15
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
    VerifyCredentialsURL_RequestRatelimit = 75
    VerifyCredentialsURL_RechargeMins = 15
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
    TimelineTweetsURL_RequestRatelimit = 900
    TimelineTweetsURL_RechargeMins = 15
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
    MentionsTimelineURL_RequestRatelimit = 75
    MentionsTimeLineURL_RechargeMins = 15
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
            if(results.length > 0) {
                let earliestTweet = _.last(results)
                max_id = earliestTweet.id_str
                fullResults = fullResults.concat(results)
            }else{remaining = 0}
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
                log.log(error)
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
        this.logAPICall(endpoint);
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

    async promisePost(endpoint, params) {
        return new Promise((resolve, reject) => {
            this.client.post(endpoint, params, function(error, tweets, response) {
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

    getCurrentUsage(){
        let self = this;
        let currUsage = _.mapValues(TwitterLimits, (o, key) => {

            let calls = !_.isUndefined(self.api_calls[key]) ? self.api_calls[key] : []
            calls = self.filterApiCallsByMins(calls, o.recharge_mins)
            o.calls = calls.length;
            return o;

        })

        return currUsage;
    }

    cleanApiCalls(){
        let self = this;
        let clean_api_calls = _.mapValues(this.api_calls, (o, key) => {

            let recharge_mins = TwitterLimits[key].recharge_mins
            // console.log("recharge_mins", recharge_mins)
            let calls = !_.isUndefined(self.api_calls[key]) ? self.api_calls[key] : []
            // console.log("before_calls", calls)
            calls = self.filterApiCallsByMins(calls, recharge_mins)
            // console.log("after_calls", calls)

            return calls;

        })
        return clean_api_calls
    }


    logAPICall(gateway_url){
        let now = new Date();

        let call_object = {
            time:now.toISOString(),
            gateway_url: gateway_url
        }

        gateway_url = gateway_url.includes(this.getRetweetsURL_SUBSTRING) ? this.getRetweetsURL_SUBSTRING : gateway_url;

        if(_.isUndefined(this.api_calls[gateway_url])){
            this.api_calls[gateway_url] = [];
        }

        this.api_calls[gateway_url].push(call_object)
    }

    timeComp(){
        return differenceInMinutes(new Date(),parseISO("2020-06-26T09:12:46.993Z") )
    }

    filterApiCallsByMins(arr, mins){
        return _.filter(arr,e => {
            return differenceInMinutes(new Date(), parseISO(e.time)) < mins
        })
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
