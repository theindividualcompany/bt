const {app} = require('electron')
const path = require('path')
const Store = require('electron-store')

const { platform } = process
const isWindows = platform === 'win32'
const isMacOS = platform === 'darwin'

const getStore = (opts) => {
  opts = Object.assign({ defaults: { } }, opts);
  return new Store(opts)
}

exports.store = getStore()

exports.set = async (path, data) => {
  const store = getStore()
  store.set(path, data)
}