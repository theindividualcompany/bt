require('dotenv').config()
const TwitterExportProcessor = require('./packages/core/lib/TwitterExportProcessor');
TwitterProc = new TwitterExportProcessor();



(async function() {
    // let statuses = await TwitterProc.getStatuses();
// console.log(statuses)
//     let followers = await TwitterProc.getFollowerIDs().catch((error) => {console.log(error)});
//     let allFollowers = await TwitterProc.getAllFollowerIDs();
//     console.log(allFollowers);

    let tweet_id = "1272690151710474240";
    // let statusRetweetIDs = await TwitterProc.getAllStatusRetweetIDs(tweet_id);
    // console.log(statusRetweetIDs);

    let user_name = "balajis"
    // let userTweets = await TwitterProc.getAllUserTimelineTweets(user_name, 5);
    // console.log(userTweets);
    // console.log(userTweets.length);

    let userTweetsWithRetweets = await TwitterProc.getUserTimelineTweetsWithRetweeterIDs(user_name, 5);
    console.log(userTweetsWithRetweets);
    // let userResults = await TwitterProc.getFriendshipStatus(userTweetsWithRetweets.all_retweeters);
    // console.log(userResults)

})();