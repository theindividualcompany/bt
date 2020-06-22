require('dotenv').config()
const log = require('loglevel');

// const Conf = require('conf');

const TwitterExportProcessor = require('../lib/TwitterExportProcessor');
TwitterProc = new TwitterExportProcessor();

// const test = new Conf();


(async function() {
    // let statuses = await TwitterProc.getStatuses();
    // console.log(statuses)
//     let followers = await TwitterProc.getFollowerIDs().catch((error) => {console.log(error)});
//     let allFollowers = await TwitterProc.getAllFollowerIDs();
//     console.log(allFollowers);
    log.setLevel("trace");
    let tweet_id = "1274789656706646017";
    // let statusRetweetIDs = await TwitterProc.getAllStatusRetweetIDs(tweet_id);
    // console.log(statusRetweetIDs);

    // let user_name = "femyeda"
    // let userTweets = await TwitterProc.getExtraAllUserTimelineTweets(user_name, 5);
    // console.log(userTweets);
    // console.log(userTweets.length);

    // let userTweetsWithRetweets = await TwitterProc.getUserTimelineTweetsWithRetweeterIDs(user_name, 20);
    // console.log(userTweetsWithRetweets);
    // let userResults = await TwitterProc.getFriendshipStatus(userTweetsWithRetweets.all_retweeters);
    // console.log(userResults)
    //
    // test.set("username", "test")
    // console.log(test.get("username"))


    // await TwitterProc.setConfUsername(user_name);
    // console.log("getConfUsername", await TwitterProc.getConfUsername());
    // let retweets = await TwitterProc.getAllRetweetsOfTweet(tweet_id);
    // log.log(retweets)

    // log.log(retweets[0].user)

    // let retweeter_ids = ["1096192764608421889"];
    // let retweeters = await TwitterProc.getFriendshipStatus(retweeter_ids)
    // log.log(retweeters)

    // let retweetsOfMe = await TwitterProc.getRetweetsOfMe(200);
    // log.log(retweetsOfMe);

    await TwitterProc.clearAllTweets();

    await TwitterProc.scan();
})();