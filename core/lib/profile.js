'use strict'
var Resources = require('./TwitterResources')

async function profile(client, args) {
  const payload = Resources['profile.get'].payload(args)
  return client
    .get(Resources['profile.get'].url, payload)
    .then(res => {
      return {
        ...res,
      }
    })
    .catch(reason => reason)
}

module.exports = profile
