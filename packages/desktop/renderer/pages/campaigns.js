import {useState, useEffect} from 'react'
import Screen from '../components/Screen'
import Navigation from '../components/Navigation'
import NewCampaign from '../components/NewCampaign'
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

  return (
    <>
      <Screen>
        <Navigation active='/campaigns' profile={profile} />
        <main className=''>
          <NewCampaign />
          <section className='mt-4 p-5'>no preievous</section>
          {/* <span>Campaigns</span> */}
        </main>
      </Screen>

      <style jsx>{`
        main {
        }

        span {
        }
      `}</style>
    </>
  )
}
