const {ipcMain} = require('electron')
const {set, get} = require('./config')
const fetch = require('node-fetch')
const bt = require('../../core/lib/core')

const prepare = (app, window) => {
  ipcMain.on('set-login-credentials', async (event, payload) => {
    const {access_token_key, access_token_secret, consumer_key, consumer_secret, handle} = payload

    await set('auth', {
      access_token_key,
      access_token_secret,
      consumer_key,
      consumer_secret,
    })

    await set('handle', handle)

    window.bt = bt.configure(
      {
        access_token_key,
        access_token_secret,
        consumer_key,
        consumer_secret,
      },
      app.getPath('userData'),
    )

    await window.bt.scanner.setConfUsername(handle)
  })

  ipcMain.on('logout', async (event, payload) => {
    await set('auth', {})
  })

  ipcMain.on('get-profile-request', async (event, payload) => {
    const handle = await get('handle')
    const profile = await window.bt.get_profile({
      screen_name: handle,
    })

    event.sender.send('get-profile-response', profile)
  })

  ipcMain.on('start-ranked-scan-request', async (event, payload) => {
    await window.bt.scanner.scan()
    event.sender.send('start-ranked-scan-response', 'finished')
  })

  ipcMain.on('get-ranked-request', async (event, payload) => {
    const ranked = window.bt.scanner.getRankStore().get('rankings')
    event.sender.send('get-ranked-response', ranked)
  })
}

module.exports = prepare
