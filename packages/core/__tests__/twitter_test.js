require('dotenv').config()
const log = require('loglevel')

const core = require('../lib/core')
const TwitterExportProcessor = require('../lib/TwitterExportProcessor')
let auth = {
  consumer_key: process.env.TWITTER_CONSUMER_KEY,
  consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
  access_token_key: process.env.TWITTER_ACCESS_TOKEN,
  access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET,
}

TwitterProc = new TwitterExportProcessor(auth)

;(async function() {
  log.setLevel('trace')
  let tweet_id = '1274789656706646017'

  let user_name = 'femyeda'

  const bt = core.configure(auth)
  const scanner = new bt.scanner(auth, './configs')
  await scanner.setConfUsername(user_name)
  scanner.scan()
  // let userTweetsWithRetweets = await TwitterProc.getUserTimelineTweetsWithRetweeterIDs(user_name, 20);
  // console.log(userTweetsWithRetweets);
  // let userResults = await TwitterProc.getFriendshipStatus(userTweetsWithRetweets.all_retweeters);
  // console.log(userResults)

  // await TwitterProc.setConfUsername(user_name);

  // await TwitterProc.clearAllStoredTweets();
  // await TwitterProc.clearAllStoredUsers();

  // await TwitterProc.scan();
  // await TwitterProc.scanTweets(400);
  // let tweets = await TwitterProc.getStoredTweets();
})()
