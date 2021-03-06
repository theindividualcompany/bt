const {format} = require('url')

const {app, BrowserWindow, nativeImage} = require('electron')
const isDev = require('electron-is-dev')
const prepareNext = require('electron-next')
const {resolve: resolvePath} = require('app-root-path')
const path = require('path')
const prepareIpc = require('./ipc')
const {store, isMacOS, isWindows} = require('./config')
const bt = require('@theindividualcompany/bt-core')

app.setName('bt')
const appIcon = nativeImage.createFromPath(resolvePath(`./main/static/icons/app-icon.png`))
if (isMacOS) {
  app.dock.setIcon(appIcon)
}

function createWindow() {
  // Create the browser window.
  const mainWindow = new BrowserWindow({
    width: 400,
    height: 800,
    minWidth: 360,
    minHeight: 700,
    icon: appIcon,
    webPreferences: {
      preload: path.join(app.getAppPath(), 'main/static/preload.js'),
    },
  })

  const auth = store.get('auth')
  if (auth) {
    let {access_token_key, access_token_secret, consumer_key, consumer_secret} = auth

    mainWindow.bt = bt.configure(
      {
        access_token_key,
        access_token_secret,
        consumer_key,
        consumer_secret,
      },
      app.getPath('userData'),
    )
  }

  const start = auth ? 'followers' : 'login'
  const devPath = `http://localhost:8000/${start}`
  const prodPath = format({
    pathname: resolvePath(`renderer/out/${start}.html`),
    protocol: 'file:',
    slashes: true,
  })

  const url = isDev ? devPath : prodPath
  mainWindow.loadURL(url)

  // Open the DevTools.
  // mainWindow.webContents.openDevTools()

  return mainWindow
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', async () => {
  try {
    await prepareNext('./renderer')
  } catch (e) {
    console.log(e)
  }
  if (isMacOS) {
    app.dock.show()
  }
  const mainWindow = createWindow()
  prepareIpc(app, mainWindow)

  app.on('activate', function() {
    // On macOS it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
})

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', function() {
  if (process.platform !== 'darwin') app.quit()
})
