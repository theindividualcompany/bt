
var Twitter = require('twitter');

class TwitterExportProcessor {

    client;

    constructor(){
        let auth = {
            consumer_key: process.env.TWITTER_CONSUMER_KEY,
            consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
            access_token_key: process.env.TWITTER_ACCESS_TOKEN,
            access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET
        }
        this.client = new Twitter(auth)
    }

    //GET statuses/mentions_timeline
    //https://developer.twitter.com/en/docs/tweets/timelines/api-reference/get-statuses-mentions_timeline
    async getMentionsTimeline(count){
        return this.promiseGet(this.getStatusURL(), {count:count})
    }
    getMentionsTimelineURL(){return "https://api.twitter.com/1.1/statuses/mentions_timeline.json";}

    //GET followers/list
    //https://developer.twitter.com/en/docs/accounts-and-users/follow-search-get-users/api-reference/get-followers-list
    async getAllFollowerIDs(){
        let params = {count:25, cursor:-1, stringify_ids: true};
        let results = await this.allPromiseGet(this.getFollowersIDsURL(), params, true);
        return results.reduce((a,{ids}) => a.concat(ids), [])
    }
    async getFollowerIDs(cursor){
        console.log("cursor", cursor);
        cursor = (typeof cursor !== 'undefined') ?  cursor : -1;
        return this.promiseGet(this.getFollowersIDsURL(), {count:25, cursor:cursor, stringify_ids: true});
    }
    getFollowersIDsURL(){return "https://api.twitter.com/1.1/followers/ids.json"}

    //GET statuses/retweeters/ids
    //https://developer.twitter.com/en/docs/tweets/post-and-engage/api-reference/get-statuses-retweeters-ids
    // Requests / 15-min window (user auth)	75
    // Requests / 15-min window (app auth)	300
    async getAllStatusRetweetIDs(tweet_id){
        let params = {count:100,id:tweet_id};
        let results = await this.allPromiseGet(this.getStatusRetweetIDsURL(), params, true);
        return results.reduce((a,{ids}) => a.concat(ids), [])
    }

    getStatusRetweetIDsURL(){return "https://api.twitter.com/1.1/statuses/retweeters/ids.json"}


    //GET statuses/user_timeline
    //https://developer.twitter.com/en/docs/tweets/timelines/api-reference/get-statuses-user_timeline
    // Requests / 15-min window (user auth)	900
    // Requests / 15-min window (app auth)	1500
    // Requests / 24-hour window	100,000
    async getAllUserTimelineTweets(screen_name, count){
        let params = {screen_name:screen_name, count: count, include_rts:false, exclude_replies:true}
        let results = await this.allPromiseGet(this.getUserTimelineTweetsURL(),params);
        return results
    }
    getUserTimelineTweetsURL(){return "https://api.twitter.com/1.1/statuses/user_timeline.json";}

    async getUserTimelineTweetsWithRetweeterIDs(screen_name,count){
        let timeline_tweets = await this.getAllUserTimelineTweets(screen_name, count)
        // console.log(timeline_tweets);
        let tweet_ids = [];
        let obj = this;
        timeline_tweets.forEach(function(element) {
            element.retweet_ids = obj.getAllStatusRetweetIDs(element.id_str).then((result) => element.retweet_ids = result);
        });

        let promises = timeline_tweets.reduce((a,{retweet_ids}) => a.concat(retweet_ids), []);
        await Promise.all(promises);
        let all_retweeters = timeline_tweets
            .reduce((a,{retweet_ids}) => a.concat(retweet_ids), [])
            .filter((value,index,self) => self.indexOf(value) === index);
        let results = {timeline_tweets:timeline_tweets, all_retweeters: all_retweeters, num_retweeters: all_retweeters.length};
        return results;
    }

    //GET friendships/lookup
    // https://developer.twitter.com/en/docs/accounts-and-users/follow-search-get-users/api-reference/get-friendships-lookup
    // Requests / 15-min window (user auth)	15
    async getFriendshipStatus(user_ids){
        let arrayChunks = this.chunkArray(user_ids, 100);
        let chunkPromises = [];
        let chunkResults = [];
        let obj = this;
        arrayChunks.forEach(function(chunk){
            let concatChunk = chunk.join(",");
            let params = {user_id:concatChunk}
            chunkPromises.push(obj.promiseGet(obj.getFriendshipStatusURL(), params).then((values) => chunkResults.push(values)));
        });

        await Promise.all(chunkPromises);
        let allResults = chunkResults.flat();
        let followerResults = allResults.filter(user => user.connections.includes("following"))
        let aggResults = {allResults:allResults, followerResults:followerResults};
        allResults.forEach((ele) => console.log(ele.connections))
        return aggResults;
    }

    getFriendshipStatusURL(){return "https://api.twitter.com/1.1/friendships/lookup.json";}


    async allPromiseGet(endpoint, params, aggregateCollection){
        console.log("aggregateCollection", aggregateCollection);
        aggregateCollection = (typeof aggregateCollection !== 'undefined') ?  aggregateCollection : false;
        params.cursor = -1;
        params.stringify_ids = true;
        let errorFound = false;
        let results;
        if(aggregateCollection){results = [];}
        do{
            let getResult =  await this.promiseGet(endpoint, params)
                .catch(function(error){
                    errorFound = true;
                    console.log(error);
                });
            if(errorFound === false){
                // console.log("getResult",getResult);
                if(aggregateCollection) {results.push(getResult);}
                else{results = getResult;}
            }
            params.cursor = (typeof getResult !== 'undefined') && (typeof getResult.next_cursor_str !== 'undefined') ? getResult.next_cursor_str : 0;
        }while(params.cursor > 0 && errorFound === false)
        // console.log("results",results);
        return results;
    }

    async promiseGet(endpoint, params){
        return new Promise((resolve,reject) => {
            this.client.get(endpoint,params, function(error, tweets, response) {
                if(error) {reject(error);}
                if(tweets) {resolve(tweets);}
            })
        })
    }

    //https://scotch.io/courses/the-ultimate-guide-to-javascript-algorithms/array-chunking
    //Really elegant way I found
    chunkArray(array,size){
        if(array.length <= size){
            return [array]
        }
        return [array.slice(0,size), ...this.chunkArray(array.slice(size), size)]
    }





}

module.exports = TwitterExportProcessor