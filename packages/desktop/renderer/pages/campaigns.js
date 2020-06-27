import {useState, useEffect} from 'react'
import Router from 'next/router'
import Screen from '../components/Screen'
import Navigation from '../components/Navigation'
import NewCampaign from '../components/NewCampaign'
import Profile from '../components/Profile'
import debounce from 'lodash/debounce'
import map from 'lodash/map'
import find from 'lodash/find'
import keys from 'lodash/keys'
import Handlebars from 'handlebars'

import {format, formatDistance, formatRelative, subDays} from 'date-fns'

import ipc from '../utils/ipc'

export default () => {
  const goto = href => {
    return Router.replace(href)
  }

  function areEqual(prevProps, nextProps) {
    return prevProps == nextProps ? false : true
  }

  const [loading, setLoading] = useState(true)
  const [processing, setProcessing] = useState(false)

  const [profile, setProfile] = useState({})
  useEffect(() => {
    ;(async () => {
      let profile = await ipc.getProfile()
      setProfile(profile)
    })()
  }, [])

  const [followers, setFollowers] = useState(null)
  const [campaigns, setCampaigns] = useState({})
  useEffect(() => {
    ;(async () => {
      let followers = await ipc.getRankedEngagement()
      setFollowers(followers)

      const campaigns = await ipc.getCampaigns()
      setCampaigns(campaigns)
      setLoading(false)
    })()
  }, [])

  const [integration, setIntegration] = useState(null)
  useEffect(() => {
    ;(async () => {
      let settings = await ipc.getSettings()
      let integrations = settings.integrations
      let integration = find(integrations, integration => {
        return integration.link !== ''
      })

      setIntegration(integration)
    })()
  }, [])

  const handleSend = debounce(async (message, count) => {
    if (processing) {
      return
    }

    setProcessing(true)
    const template = Handlebars.compile(message)
    const m = template({integration: integration})

    let campaign = await ipc.createCampaign({
      num_batch: count,
      message,
      dry_run: true,
    })
    setProcessing(false)
  }, 3000)

  const RenderCampaigns = React.memo(({campaigns}) => {
    if (keys(campaigns).length == 0) {
      return (
        <div className='flex flex-col text-center content-center justify-center bg-gray-100 h-16 w-full'>
          Run your first campaign
        </div>
      )
    }

    return map(campaigns, (campaign, key) => {
      return (
        <div key={key} className='mt-2 border-2 rounded-md cursor-pointer'>
          <article className='w-full py-2 px-4 bg-gray-100 rounded-md'>
            <section className='profile flex flex-row justify-between content-center'>
              <section className='flex flex-col w-4/5'>
                {/* <p>{title} | {subtitle}</p> */}
                <p>Sent to {campaign.num_batch} followers</p>
              </section>
              <section className=''>
                <p>{formatDistance(new Date(Number(campaign.created_at)), new Date())}</p>
              </section>
            </section>
          </article>
        </div>
      )
    })
  }, areEqual)

  return (
    <>
      <Screen>
        <Navigation active='/campaigns' profile={profile} />
        <main className=''>
          <section className='mt-4 p-4'>
            <div className='flex flex-col text-center content-center justify-center bg-red-100 h-16 w-full'>
              {integration ? (
                <p>Using {integration.title}</p>
              ) : (
                <a
                  className='cursor-pointer'
                  onClick={() => {
                    goto('/settings')
                  }}>
                  No integration set. Click here to set integration before sending campaigns.
                </a>
              )}
            </div>
          </section>
          {followers && integration && (
            <NewCampaign
              enabled={integration ? true : false}
              handleSend={handleSend}
              count={followers.length / 8 > 100 ? 100 : Math.ceil(followers.length / 8)}
            />
          )}
          <section className='mt-4 p-4'>
            <p className='text-md text-gray-600 font-semibold'>Previous Campaigns</p>
            <RenderCampaigns campaigns={campaigns} />
          </section>
        </main>
      </Screen>
    </>
  )
}
