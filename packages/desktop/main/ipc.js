const {ipcMain} = require('electron')
const {set, get} = require('./config')
const fetch = require('node-fetch')
const bt = require('../../core/lib/core')

module.exports = (app, window) => {
  ipcMain.on('set-login-credentials', async (event, payload) => {
    const {access_token_key, access_token_secret, consumer_key, consumer_secret, handle} = payload

    await set('auth', {
      access_token_key,
      access_token_secret,
      consumer_key,
      consumer_secret,
    })

    await set('handle', handle)

    window.bt = bt.configure({
      access_token_key,
      access_token_secret,
      consumer_key,
      consumer_secret,
    })
  })

  ipcMain.on('logout', async (event, payload) => {
    await set('auth', {})
  })
}

ipcMain.on('get-profile-request', async (event, payload) => {
  const handle = await get('handle')
  const profile = await window.bt.get_profile({
    screen_name: handle,
  })

  event.sender.send('get-profile-response', profile)
})
