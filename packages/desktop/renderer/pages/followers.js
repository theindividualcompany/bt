import {useState, useEffect} from 'react'
import Screen from '../components/Screen'
import Navigation from '../components/Navigation'
import Profile from '../components/Profile'

import ipc from '../utils/ipc'

export default () => {
  const [profile, setProfile] = useState({})

  useEffect(() => {
    ;(async () => {
      let profile = await ipc.getProfile()
      setProfile(profile)
    })()
  }, [])

  const [followers, setFollowers] = useState({})
  useEffect(() => {
    ;(async () => {
      let followers = await ipc.getRankedEngagement()
      console.log(followers)
      setFollowers(followers)
    })()
  }, [])

  const startScan = () => {
    const done = ipc.startScan()
    console.log('done?', done)
  }

  return (
    <>
      <Screen>
        <Navigation active='/followers' profile={profile} />
        <main>
          <section className='p-4'>
            <div className='bg-gray-100 border border-gray-400 rounded-md min-h-2 p-2'>
              <button
                className='w-full py-2 px-2 bg-gray-400 rounded-md'
                onClick={() => {
                  startScan()
                }}>
                Build Circles
              </button>
            </div>
          </section>
        </main>
      </Screen>

      <style jsx>{``}</style>
    </>
  )
}
