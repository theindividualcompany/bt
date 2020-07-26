import {useState, useEffect} from 'react'
import Screen from '../components/Screen'
import Profile from '../components/Profile'
import map from 'lodash/map'
import debounce from 'lodash/throttle'

import ipc from '../utils/ipc'

export default () => {
  function areEqual(prevProps, nextProps) {
    return prevProps == nextProps ? false : true
  }

  const [loading, setLoading] = useState(true)
  const [processing, setProcessing] = useState(false)

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
        <div className='flex flex-col text-center content-center justify-center inset-0 text-white text-opacity-80 h-screen w-full z-50'>
          loading...
        </div>
      )
    }

    return map(followers, (follower, index) => {
      return (
        <div key={follower.id_str} className='mt-2'>
          <Profile
            title={` @${follower.screen_name}`}
            subtitle={follower.name}
            description={follower.description}
            image={follower.profile_image_url_https}>
            <p>
              {follower.mention_count} mentions &bull; {follower.retweet_count} retweets
              {/* <a
                onClick={() => window.shell.openExternal(`https://twitter.com/${follower.screen_name}`)}
                className='cursor-pointer text-bold'>
                | Go to profile
              </a> */}
            </p>
          </Profile>
        </div>
      )
    })
  }, areEqual)

  const handleExport = async () => {
    await ipc.exportEngagement()
  }

  return (
    <>
      <Screen>
        <main className='bg-white bg-opacity-8 p-2 pt-6'>
          <header className='flex flex-col'>
            <button
              className='p-2 w-1/2 mx-auto bg-secondary bg-opacity-40 text-black rounded-md'
              onClick={handleScan}>
              Build Engagement
            </button>
            <div className='flex flex-row justify-between content-center px-2'>
              <p className='self-end text-white text-center text-2xl font-black'>Followers</p>
              <button
                className='p-2 bg-transparent border border-primary text-primary rounded-md'
                onClick={() => handleExport()}>
                Export
              </button>
            </div>
          </header>

          <section className=''>
            {processing ? (
              <div className='fixed inset-0 h-screen w-full z-50 overflow-hidden flex flex-col text-center content-center justify-center bg-primary text-white text-opacity-80'>
                This might take a few seconds...
              </div>
            ) : (
              <>
                <RenderFollowers followers={followers} loading={loading} />
              </>
            )}
          </section>
        </main>
      </Screen>

      <style jsx>{``}</style>
    </>
  )
}
