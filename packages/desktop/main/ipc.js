const {ipcMain} = require('electron')
const {set} = require('./config')

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
