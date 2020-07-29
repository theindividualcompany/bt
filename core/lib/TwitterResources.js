const Resources = {
  'dm.send': {
    url: 'direct_messages/events/new',
    payload: args => {
      let {recipient_id, text, reply_options} = args
      let payload = {
        event: {
          type: 'message_create',
          message_create: {
            target: {
              recipient_id,
            },
            message_data: {
              text,
            },
          },
        },
      }

      if (reply_options != null) {
        payload.event.quick_reply = {
          type: 'options',
          reply_options,
        }
      }

      return payload
    },
  },
  'dm.list': {
    url: 'direct_messages/events/list',
    payload: (count, cursor) => {
      let payload_args = {}

      if (cursor) {
        payload_args.cursor = cursor
      }

      if (!count) {
        payload_args.count = 25
      }

      return payload_args
    },
  },
  'dm.show': {
    url: 'direct_messages/events/show',
    payload: id => {
      return {
        id,
      }
    },
  },
  'tweet.send': {
    url: 'statuses/update',
    payload: args => {
      let {text, mentions} = args
      let payload = {
        status: ((text, mentions) => {
          let status = text
          if (mentions) {
            mentions_str = mentions.join(' ')
            status = `${mentions_str} ${text}`
          }
          return status
        })(text, mentions),
        stringify_ids: true,
      }

      return payload
    },
  },
  'tweet.destroy': {
    url: 'statuses/destroy',
    payload: id => {
      return {
        id,
        trim_user: true,
      }
    },
  },
  'profile.get': {
    url: 'users/show',
    payload: args => {
      return {
        ...args,
      }
    },
  },
  'verify_credentials.get': {
    url: 'account/verify_credentials',
  },
}

module.exports = Resources
