import {useState, useEffect} from 'react'
import Screen from '../components/Screen'
import Navigation from '../components/Navigation'

import ipc from '../utils/ipc'

export default () => {
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
    <Screen>
      <Navigation active='/messages' profile={profile} logoPath={assetPath} />
      <main className='h-64  bg-gray-100 border border-gray-400 rounded-md p-4 flex flex-col content-center justify-center'>
        <p className='text-center'>Messages Coming Soon</p>
        <p className='text-sm text-gray-600 mt-4'>
          We're waiting for access to the Twitter Activity API to thoroughly deliver better twitter DM
          functionality. Like better search, better organization, better better.
        </p>
        <p className='text-sm text-gray-600 mt-2'>
          The same API will allow us to actually use the Twitter API to implement chat bot like features
          accurately without getting your account blocked or banned for abusing rate limits.
        </p>
      </main>
    </Screen>
  )
}
