const {app} = require('electron')
const path = require('path')
const Store = require('electron-store')

const {platform} = process
const isWindows = platform === 'win32'
const isMacOS = platform === 'darwin'

const getStore = opts => {
  opts = Object.assign({defaults: {}}, opts)
  return new Store(opts)
}

const initializeIntegrations = () => {
  const available_integrations = {
    circlely: {
      title: 'Circlely',
      link: '',
      icon:
        '<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 86.52 86.52" style="enable-background:new 0 0 86.52 86.52;" xml:space="preserve"><path d="M43.26,86.53C19.41,86.53,0,67.12,0,43.26C0,19.41,19.41,0,43.26,0c5.18,0,10.24,0.91,15.06,2.69 c1.55,0.58,2.34,2.3,1.77,3.86c-0.58,1.55-2.31,2.35-3.86,1.77C52.09,6.78,47.72,6,43.26,6C22.72,6,6,22.72,6,43.26 s16.72,37.26,37.26,37.26s37.26-16.72,37.26-37.26c0-5.88-1.33-11.5-3.95-16.7c-0.74-1.48-0.15-3.28,1.33-4.03 c1.48-0.74,3.28-0.15,4.03,1.33c3.04,6.05,4.58,12.58,4.58,19.4C86.53,67.12,67.12,86.53,43.26,86.53z"/><circle cx="69.36" cy="12.46" r="4.05"/><path d="M43.23,61.97c-10.31,0-18.7-8.39-18.7-18.7c0-10.31,8.39-18.7,18.7-18.7c5,0,9.69,1.95,13.23,5.48 c1.17,1.17,1.17,3.07,0,4.24c-1.17,1.17-3.07,1.17-4.24,0c-2.4-2.4-5.59-3.72-8.98-3.72c-7.01,0-12.7,5.7-12.7,12.7 c0,7,5.7,12.7,12.7,12.7c4.23,0,8.17-2.09,10.54-5.6c0.93-1.37,2.79-1.73,4.17-0.81c1.37,0.93,1.73,2.79,0.81,4.17 C55.25,58.88,49.46,61.97,43.23,61.97z"/></svg>',
      color: '#000000',
    },
    substack: {
      title: 'Substack',
      link: '',
      icon:
        '<svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0 0H63.6893V7.43226H0V0Z" fill="#C4C4C4"/><path d="M0.31068 14.314H64V21.7462H0.31068V14.314Z" fill="#C4C4C4"/><path d="M63.6893 28.9032H0.31068V64L32 48.3097L63.6893 64V28.9032Z" fill="#C4C4C4"/></svg>',
      color: '#FB7530',
    },
    email_list: {
      title: 'Email List',
      link: '',
      icon:
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path className="heroicon-ui" d="M4 4h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6c0-1.1.9-2 2-2zm16 3.38V6H4v1.38l8 4 8-4zm0 2.24l-7.55 3.77a1 1 0 0 1-.9 0L4 9.62V18h16V9.62z"/></svg>',
      color: '#000000',
    },
    ghost: {
      title: 'Ghost',
      link: '',
      icon:
        '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Ghost icon</title><path d="M9.604 19.199H.008V24h9.597v-4.801zm14.39 0h-9.591V24h9.591v-4.801zm.003-9.599H0v4.8h23.997V9.6zM24 0h-4.801v4.801H24V0zm-9.596 0H.008v4.801h14.396V0z"/></svg>',
      color: '#738A94',
    },
  }

  const store = getStore()
  const current_integrations = store.get('settings.integrations')
  if (!current_integrations) {
    store.set('settings.integrations', available_integrations)
  }
}

initializeIntegrations()

exports.store = getStore()

exports.set = async (key, data) => {
  const store = getStore()
  store.set(key, data)
}

exports.get = async key => {
  const store = getStore()
  return store.get(key)
}
