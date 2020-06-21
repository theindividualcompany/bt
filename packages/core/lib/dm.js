'use strict';
var Resources = require('./TwitterResources')

async function dm(client, args) {
    const payload = Resources['dm.send'].payload(args)
    return client.post(Resources['dm.send'].url, payload)
      .then(res => {
        return {
          id: res.event.id,
          timestamp: res.event.created_timestamp
        }
      })
      .catch(reason => reason)
}

module.exports = dm;

