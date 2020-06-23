'use strict'
var Resources = require('./TwitterResources')

async function dm(client, args) {
  const payload = Resources['dm.send'].payload(args)
  return client
    .post(Resources['dm.send'].url, payload)
    .then(res => {
      return {
        id: res.event.id,
        timestamp: res.event.created_timestamp,
      }
    })
    .catch(reason => reason)
}

exports.dm = dm

async function list(client, count, cursor) {
  const payload = Resources['dm.list'].payload(count, cursor)
  return client
    .get(Resources['dm.list'].url, payload)
    .then(res => {
      return {
        next: res.next_cursor,
        messages: res.events,
      }
    })
    .catch(reason => reason)
}

exports.list = list

async function show(client, id) {
  const payload = Resources['dm.show'].payload(id)
  return client
    .get(Resources['dm.show'].url, payload)
    .then(res => {
      return {
        ...res,
      }
    })
    .catch(reason => reason)
}

exports.show = show
