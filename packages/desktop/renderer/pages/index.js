import {useState, useEffect} from 'react'
import Screen from '../components/Screen'
import Navigation from '../components/Navigation'

import ipc from '../utils/ipc'

export default () => {
  // const [profile, setProfile] = useState({})

  // const [assetPath, setAssetPath] = useState('')
  // useEffect(() => {
  //   const assetPath = window.location.href.includes('http')
  //     ? '/logo.svg'
  //     : `${window.appPath}/renderer/out/logo.svg`
  //   setAssetPath(assetPath)
  // }, [])

  // useEffect(() => {
  //   ;(async () => {
  //     let profile = await ipc.getProfile()
  //     setProfile(profile)
  //   })()
  // }, [])

  return (
    <Screen>
      {/* <Navigation active='/index' profile={profile} logoPath={assetPath} /> */}
      <main className='h-64 text-center bg-gray-100 border border-gray-400 rounded-md p-2 flex flex-col content-center justify-center'>
        <p>bt: better twitter coming soon</p>
      </main>
    </Screen>
  )
}
