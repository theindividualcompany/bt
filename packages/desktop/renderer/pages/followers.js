import {useState, useEffect} from 'react'
import Screen from '../components/Screen'
import Navigation from '../components/Navigation'
import Profile from '../components/Profile'
import map from 'lodash/map'
import debounce from 'lodash/throttle'

import ipc from '../utils/ipc'

export default () => {
  function areEqual(prevProps, nextProps) {
    return prevProps == nextProps ? false : true
  }

  const [assetPath, setAssetPath] = useState('')
  useEffect(() => {
    const assetPath = window.location.href.includes('http')
      ? '/logo.svg'
      : `${window.appPath}/renderer/out/logo.svg`
    setAssetPath(assetPath)
  }, [])

  const [loading, setLoading] = useState(true)
  const [processing, setProcessing] = useState(false)

  const [profile, setProfile] = useState({})

  useEffect(() => {
    ;(async () => {
      let profile = await ipc.getProfile()
      setProfile(profile)
    })()
  }, [])

  const [followers, setFollowers] = useState([])
  useEffect(() => {
    ;(async () => {
      let followers = await ipc.getRankedEngagement()
      setLoading(false)
      setFollowers(followers)
    })()
  }, [])

  const handleScan = debounce(e => {
    startScan()
  }, 300)

  const startScan = () => {
    if (processing) {
      return
    }

    setProcessing(true)
    const done = ipc
      .startScan()
      .then(res => {
        setFollowers(res)
        setProcessing(false)
      })
      .catch(reason => {
        console.log(reason)
        setProcessing(false)
      })
  }

  const RenderFollowers = React.memo(({followers, loading}) => {
    if (loading) {
      return (
        <div className='flex flex-col text-center content-center justify-center bg-gray-100 top-0 left-0 h-64 w-full z-50'>
          loading...
        </div>
      )
    }

    return map(followers, (follower, index) => {
      return (
        <div key={follower.id_str} className='mt-2 border-2 rounded-md'>
          <Profile
            title={`Rank ${index + 1}: @${follower.screen_name}`}
            subtitle={follower.name}
            description={follower.description}
            image={follower.profile_image_url_https}>
            <p>
              {follower.mention_count} mentions &bull; {follower.retweet_count} retweets |{' '}
              <a
                onClick={() => window.shell.openExternal(`https://twitter.com/@${follower.screen_name}`)}
                className='cursor-pointer text-bold'>
                Go to profile
              </a>
            </p>
          </Profile>
        </div>
      )
    })
  }, areEqual)

  return (
    <>
      <Screen className=''>
        <Navigation active='/followers' profile={profile} logoPath={assetPath} />
        <main>
          <section className='p-4'>
            <div className='bg-gray-100 border border-gray-400 rounded-md min-h-2 p-2'>
              {processing ? (
                <button disabled className='cursor-wait w-full py-2 px-2 bg-gray rounded-md cursor'>
                  Building Engagement
                </button>
              ) : (
                <button className='w-full py-2 px-2 bg-gray-400 rounded-md' onClick={handleScan}>
                  Build Engagement
                </button>
              )}
            </div>
          </section>

          <section className='p-4'>
            {processing ? (
              <div className='absolute top-0 left-0 overflow-hidden flex flex-col text-center content-center justify-center bg-gray-100 top-0 left-0 h-screen w-full z-50'>
                This might take a few seconds...
              </div>
            ) : (
              <RenderFollowers followers={followers} loading={loading} />
            )}
          </section>
        </main>
      </Screen>

      <style jsx>{``}</style>
    </>
  )
}
