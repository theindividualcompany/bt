const { ipcMain } = require('electron')
const {set} = require('./config')

module.exports = (app, window) => {
  ipcMain.on('set-login-credentials', async (event, payload) => {
    await set('auth', payload)
  })
  
  ipcMain.on('logout', async (event, payload) => {
    await set('auth', {})
  })
}