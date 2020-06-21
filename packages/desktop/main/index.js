const { format } = require('url')

const {app, BrowserWindow} = require('electron')
const isDev = require('electron-is-dev')
const prepareNext = require('electron-next')
const {resolve: resolvePath} = require('app-root-path')
const path = require('path')
const prepareIpc = require('./ipc')
const {store} = require('./config')

app.setName('Circlely')

function createWindow () {
  // Create the browser window.
  const mainWindow = new BrowserWindow({
    width: 400,
    height: 800,
    minWidth: 360,
    minHeight: 700,
    webPreferences: {
      preload: path.join(app.getAppPath(), 'main/static/preload.js')
    }
  })

  const auth = store.get('auth')
  const start = auth ? 'index' : 'login'

  const devPath = `http://localhost:8000/${start}`
  const prodPath = format({
    pathname: resolvePath(`renderer/out/${start}`),
    protocol: 'file:',
    slashes: true
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
  } catch(e) {
    console.log(e)
  }
  
  const mainWindow = createWindow()
  
  prepareIpc(app, mainWindow)
  app.on('activate', function () {
    // On macOS it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
})

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit()
})
