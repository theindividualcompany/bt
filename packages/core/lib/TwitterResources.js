const Resources = {
  'dm.send': {
    url: 'direct_messages/events/new',
    payload: (args) => {
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
            }
          }
        }
      }
      
      if (reply_options != null) {
        payload.event.quick_reply = {
          type: 'options',
          reply_options
        }
      }

      return payload
    }
  },
  'tweet.send': {
    url: 'statuses/update',
    payload: (args) => {
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
        stringify_ids: true
      }

      return payload
    }
  }
}

module.exports = Resources