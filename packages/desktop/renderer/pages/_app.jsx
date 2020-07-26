if (process.env.NODE_ENV === 'development') {
  require('../styles/index.css')
} else {
  require('../styles/dist.css')
}

import {useState, useEffect} from 'react'
import Navigation from '../components/Navigation'
import Router, {useRouter} from 'next/router'

import ipc from '../utils/ipc'

function App({Component, pageProps}) {
  const router = useRouter()
  const [route, setRoute] = useState(router.pathname)

  useEffect(() => {
    const handleRouteChange = url => {
      setRoute(url)
    }

    Router.events.on('routeChangeComplete', handleRouteChange)
    return () => {
      Router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [route])

  const [profile, setProfile] = useState({})

  const [assetPath, setAssetPath] = useState('')
  useEffect(() => {
    const assetPath = window.location.href.includes('http')
      ? '/logo.svg'
      : `${window.appPath}/renderer/out/logo.svg`
    setAssetPath(assetPath)
  }, [])

  useEffect(() => {
    ;(async () => {
      let profile = await ipc.getProfile()
      setProfile(profile)
    })()
  }, [])

  return (
    <>
      <Navigation active={`${route}`} profile={profile} logoPath={assetPath} />
      <Component {...pageProps} />
    </>
  )
}

export default App
