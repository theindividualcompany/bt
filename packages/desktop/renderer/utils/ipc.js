const setLoginCredentials = (payload) => {
  window.ipc.send('set-login-credentials', payload)
}

const logout = (payload) => {
  window.ipc.send('logout', payload)
}

export default {
  setLoginCredentials,
  logout,
}