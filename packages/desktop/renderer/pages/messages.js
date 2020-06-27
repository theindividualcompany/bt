import {useState, useEffect} from 'react'
import Screen from '../components/Screen'
import Navigation from '../components/Navigation'

import ipc from '../utils/ipc'

export default () => {
  const [profile, setProfile] = useState({})

  useEffect(() => {
    ;(async () => {
      let profile = await ipc.getProfile()
      setProfile(profile)
    })()
  }, [])

  return (
    <Screen>
      <Navigation active='/messages' profile={profile} />
      <main className='h-64 text-center bg-gray-100 border border-gray-400 rounded-md p-2 flex flex-col content-center justify-center'>
        <p>Messages Coming Soon</p>
      </main>
    </Screen>
  )
}
