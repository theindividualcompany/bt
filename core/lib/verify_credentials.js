'use strict'
var Resources = require('./TwitterResources')

// GET account/verify_credentials
// https://developer.twitter.com/en/docs/accounts-and-users/manage-account-settings/api-reference/get-account-verify_credentials
// Rate limited?	Yes
// Requests / 15-min window (user auth)	75

async function verify_credentials(client) {
  return client
    .get(Resources['verify_credentials.get'].url)
    .then(res => {
      return {
        ...res,
      }
    })
    .catch(reason => reason)
}

module.exports = verify_credentials
