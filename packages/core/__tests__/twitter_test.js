require('dotenv').config()
const log = require('loglevel')

const core = require('../lib/core')
let auth = {
  consumer_key: process.env.TWITTER_CONSUMER_KEY,
  consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
  access_token_key: process.env.TWITTER_ACCESS_TOKEN,
  access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET,
}


;(async function() {
  log.setLevel('trace')
  let user_name = 'femyeda'


  const bt = core.configure(auth)
  const scanner = bt.scanner
  await bt.scanner.setConfUsername(user_name)

  // let results = await bt.get_handle();
  // console.log( results)

  // let verify = await scanner.getVerifyCredentials();
  // console.log(verify)

  // await scanner.setConfUsername(user_name)
  // scanner.scan()

  let camp_params =
      {
        num_batch:1,
        // whitelist:["femyeda","DevScrape"],
        // blacklist:["femyeda"],
        dry_run:true
      }
      //if dry_run false, then all dry_runs will be filtered out when calculating a batch, but you can still delete to get rid of unnecessary dry_run data
      if(!camp_params.dry_run){scanner.clearCampaignDryRuns();}

  let campaign = scanner.getNewCampaign(camp_params).then((v) => {

    v.campaign_users.forEach(e => {
      console.log("Sending DM to " + e.screen_name)
      v.sent_to.push(e.id_str);
      v.message = "DRY RUN MESSAGE"
    })

    scanner.storeCompletedCampaign(v)
    // console.log(v)
  }).catch(err => console.log(err))
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
