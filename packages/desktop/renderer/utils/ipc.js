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

export default {
  setLoginCredentials,
  logout,
  getProfile,
}
