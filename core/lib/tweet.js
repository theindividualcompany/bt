'use strict'
var Resources = require('./TwitterResources')

async function tweet(client, args) {
  const payload = Resources['tweet.send'].payload(args)
  return client
    .post(Resources['tweet.send'].url, payload)
    .then(res => {
      return {
        id: res.id_str,
        timestamp: res.created_at,
      }
    })
    .catch(reason => reason)
}

exports.tweet = tweet

async function _delete(client, id) {
  const payload = Resources['tweet.destroy'].payload(id)
  return client
    .post(`${Resources['tweet.destroy'].url}/${id}`, payload)
    .then(res => res)
    .catch(reason => reason)
}

exports.delete = _delete
