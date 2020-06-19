const {app} = require('electron')
const path = require('path')
const { homedir } = require('os')
const fs = require('fs-extra')
const groom = require('groom')
const deepExtend = require('deep-extend')
const Store = require('electron-store')

const paths = {
  auth: '.bt/auth.json',
  config: '.bt/config.json'
}

const { platform } = process
const isWindows = platform === 'win32'
const isMacOS = platform === 'darwin'


for (const file in paths) {
  if (!{}.hasOwnProperty.call(paths, file)) {
    continue
  }

  paths[file] = path.join(homedir(), paths[file])
}

const getStore = (opts) => {
  opts = Object.assign({ defaults: { } }, opts);
  return new Store(opts)
}

exports.store = getStore()

exports.set = async (path, data) => {
  const store = getStore()
  store.set(path, data)
}