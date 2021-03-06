const {ipcMain, dialog} = require('electron')
const {set, get} = require('./config')
const bt = require('@theindividualcompany/bt-core')

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
    const rankings = await window.bt.scanner.getStoredRankings()
    event.sender.send('start-ranked-scan-response', rankings)
  })

  ipcMain.on('get-ranked-request', async (event, payload) => {
    const ranked = window.bt.scanner.getRankStore().get('rankings')
    event.sender.send('get-ranked-response', ranked)
  })

  ipcMain.on('get-settings-request', async (event, payload) => {
    const settings = await get('settings')
    event.sender.send('get-settings-response', settings)
  })

  ipcMain.on('create-campaign-request', async (event, payload) => {
    const campaign = await window.bt.scanner.runCampaign(payload)
    window.bt.scanner.storeCompletedCampaign(campaign)
    event.sender.send('create-campaign-response', campaign)
  })

  ipcMain.on('get-campaigns-request', async (event, payload) => {
    const campaigns = await window.bt.scanner.getStoredCampaigns()
    event.sender.send('get-campaigns-response', campaigns)
  })

  ipcMain.on('set-integration-request', async (event, payload) => {
    await set(`settings.integrations.${payload.name}`, payload.integration)

    event.sender.send('set-integration-response', true)
  })

  ipcMain.on('export-engagement-request', async (event, payload) => {
    dialog
      .showSaveDialog({defaultPath: `${app.getPath('downloads')}/rankings.csv`})
      .then(async ({canceled, filePath}) => {
        if (canceled || filePath == null) {
          return event.sender.send('export-engagement-response', 'canceled')
        }

        try {
          await window.bt.export_rankings_to_file(filePath)
        } catch (error) {
          console.log(error)
          return event.sender.send('export-engagement-response', 'error')
        }

        return event.sender.send('export-engagement-response', filePath)
      })
      .catch(reason => {
        return event.sender.send('export-engagement-response', 'error')
      })
  })
}

module.exports = prepare
