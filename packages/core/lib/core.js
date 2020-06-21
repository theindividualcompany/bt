'use strict';
var Twitter = require('twitter-lite')
var Resources = require('./TwitterResources')

const dm = require('./dm')
const tweet = require('./tweet')

const core = (() => {
  let client
  let options
  
  const getClient = (opts) => {
    options = opts
    return new Twitter(opts)
  }

  return {
    client: (opts) => {
      client = client ? client : getClient(opts)
    },
    send_message: (args) => {
      let {recipient_id, text, reply_options} = args
      if (!client) {
        console.log('Please configure Twitter Client')
        return
      }

      dm(client, {
        recipient_id,
        text,
        reply_options
      }).then((res) => {
        console.log(res)
      })
      .catch((e) => {
        console.log(e)
      })
    },
    send_tweet: (args) => {
      let {text, mentions} = args
      if (!client) {
        console.log('Please configure Twitter Client')
        return
      }

      if (typeof mentions === 'string') {
        mentions = [mentions]
      }

      tweet(client, {
        text,
        mentions
      }).then((res) => {
        console.log(res)
      })
      .catch((e) => {
        console.log(e)
      })
    }
  }
})()

module.exports = core