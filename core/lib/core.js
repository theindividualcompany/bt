'use strict'
var Twitter = require('twitter-lite')
var Resources = require('./TwitterResources')

const dm = require('./dm')
const tweet = require('./tweet')
const profile = require('./profile')
const TEP = require('./TwitterExportProcessor')
const verify_credentials = require('./verify_credentials')

const core = (() => {
  let client
  let scanner

  const getClient = opts => {
    if (client) {
      return client
    }
    return new Twitter(opts)
  }

  const getScanner = (opts, dir) => {
    if (scanner) {
      return scanner
    }

    return new TEP(opts, dir)
  }

  return {
    configure: (opts, dir) => {
      client = client ? client : getClient(opts)
      scanner = scanner ? scanner : getScanner(opts, dir)

      return {
        scanner,
        send_message: args => {
          let {recipient_id, text, reply_options} = args
          if (!getClient()) {
            console.log('Please configure Twitter Client')
            return
          }

          return dm
            .dm(getClient(), {
              recipient_id,
              text,
              reply_options,
            })
            .then(res => {
              return res
            })
            .catch(reason => {
              console.log(reason)
            })
        },
        list_messages: (cursor, count) => {
          // let {cursor, count} = args
          if (!getClient()) {
            console.log('Please configure Twitter Client')
            return
          }

          return dm
            .list(getClient(), cursor, count)
            .then(res => res)
            .catch(reason => {
              console.log(reason)
            })
        },
        show_message: id => {
          if (!getClient()) {
            console.log('Please configure Twitter Client')
            return
          }

          return dm
            .show(getClient(), id)
            .then(res => res)
            .catch(reason => {
              console.log(reason)
            })
        },
        send_tweet: args => {
          let {text, mentions} = args
          if (!getClient()) {
            console.log('Please configure Twitter Client')
            return
          }

          if (typeof mentions === 'string') {
            mentions = [mentions]
          }

          return tweet(getClient(), {
            text,
            mentions,
          })
            .then(res => {
              return res
            })
            .catch(reason => {
              console.log(reason)
            })
        },
        get_profile: args => {
          let {screen_name, user_id} = args
          if (!getClient()) {
            console.log('Please configure Twitter Client')
            return
          }

          let profile_args = {}
          if (user_id) {
            profile_args.user_id = user_id
          } else if (screen_name) {
            profile_args.screen_name = screen_name
          }

          return profile(getClient(), profile_args)
            .then(res => {
              return res
            })
            .catch(reason => {
              console.log(reason)
            })
        },
        get_auth_user: args => {
          if (!getClient()) {
            console.log('Please configure Twitter Client')
            return
          }

          return verify_credentials(getClient(), args)
            .then(res => {
              return res
            })
            .catch(reason => {
              console.log('error', reason)
            })
        },
        export_rankings_to_file: filename => {
          return scanner.exportRankingsCSVFile(filename)
        },
      }
    },
  }
})()

module.exports = core
