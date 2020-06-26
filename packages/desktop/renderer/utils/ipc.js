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

const getSettings = payload => {
  return new Promise((resolve, reject) => {
    window.ipc.once('get-settings-response', (event, arg) => {
      return arg instanceof Error ? reject(arg) : resolve(arg)
    })

    window.ipc.send('get-settings-request')
  })
}

const setIntegration = payload => {
  return new Promise((resolve, reject) => {
    window.ipc.once('set-integration-response', (event, arg) => {
      return arg instanceof Error ? reject(arg) : resolve(arg)
    })

    window.ipc.send('set-integration-request', payload)
  })
}

const createCampaign = payload => {
  return new Promise((resolve, reject) => {
    window.ipc.once('create-campaign-response', (event, arg) => {
      return arg instanceof Error ? reject(arg) : resolve(arg)
    })

    window.ipc.send('create-campaign-request', payload)
  })
}

const getCampaigns = payload => {
  return new Promise((resolve, reject) => {
    window.ipc.once('get-campaigns-response', (event, arg) => {
      return arg instanceof Error ? reject(arg) : resolve(arg)
    })

    window.ipc.send('get-campaigns-request')
  })
}

export default {
  setLoginCredentials,
  logout,
  getProfile,
  getRankedEngagement,
  startScan,
  getSettings,
  setIntegration,
  createCampaign,
  getCampaigns,
}
