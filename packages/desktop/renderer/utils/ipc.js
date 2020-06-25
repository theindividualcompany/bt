const setLoginCredentials = payload => {
  window.ipc.send('set-login-credentials', payload)
}

const logout = payload => {
  window.ipc.send('logout', payload)
}

const getProfile = payload => {
  return new Promise((resolve, reject) => {
    window.ipc.once('get-profile-response', (event, arg) => {
      return arg instanceof Error ? reject(arg) : resolve(arg)
    })

    window.ipc.send('get-profile-request')
  })
}

const getRankedEngagement = payload => {
  return new Promise((resolve, reject) => {
    window.ipc.once('get-ranked-response', (event, arg) => {
      return arg instanceof Error ? reject(arg) : resolve(arg)
    })

    window.ipc.send('get-ranked-request')
  })
}

const startScan = payload => {
  return new Promise((resolve, reject) => {
    window.ipc.once('start-ranked-scan-response', (event, arg) => {
      return arg instanceof Error ? reject(arg) : resolve(arg)
    })

    window.ipc.send('start-ranked-scan-request')
  })
}

export default {
  setLoginCredentials,
  logout,
  getProfile,
  getRankedEngagement,
  startScan,
}
