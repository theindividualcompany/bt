'use strict'
var Resources = require('./TwitterResources')

async function verify_credentials(client, args) {
    return client
        .get(Resources['verify_credentials.get'].url, Resources['verify_credentials.get'].payload(args))
        .then(res => {
            return {
                ...res,
            }
        })
        .catch(reason => reason)
}

module.exports = verify_credentials