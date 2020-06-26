require('dotenv').config()
const log = require('loglevel')
const logger = require('pino')({prettyPrint:true})

const core = require('../lib/core')
let auth = {
  consumer_key: process.env.TWITTER_CONSUMER_KEY,
  consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
  access_token_key: process.env.TWITTER_ACCESS_TOKEN,
  access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET,
}

;(async function() {
  log.setLevel('trace')
  let user_name = 'DevScrape'

  const bt = core.configure(auth, './configs')
  const scanner = bt.scanner
  await bt.scanner.setConfUsername(user_name)

  // let results = await bt.get_handle();
  // console.log( results)

  // let verify = await scanner.getVerifyCredentials();
  // console.log(verify)
  // scanner.pullStoredAPICalls();
  await scanner.setConfUsername(user_name)
  await scanner.scan()

  let camp_params = {
    num_batch: 5,
    // whitelist:["femyeda"],
    // blacklist:["femyeda"],
    message: 'test message',
    dry_run: true,
  }

  // let result =scanner.gatewayAPI.timeComp();
  await scanner.runCampaign(camp_params)
  // console.log(result)
  // logger.info(scanner.gatewayAPI.getCurrentUsage())
  // let test_dm = {recipient_id: "340655814", text:"duuuudddeee", dry_run: true}
  // let result = await scanner.gatewayAPI.sendDM(test_dm)
  // console.log(result);

  // let users = await scanner.gatewayAPI.getUsersLookup(["femyeda"])
  // console.log(users)
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

  // let timeline = scanner.getUserTimelineTweets()
})()
