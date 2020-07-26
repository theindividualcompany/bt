import {useState, useEffect} from 'react'
import Router from 'next/router'
import Screen from '../components/Screen'
import NewCampaign from '../components/NewCampaign'
import Profile from '../components/Profile'
import throttle from 'lodash/throttle'
import map from 'lodash/map'
import orderBy from 'lodash/orderBy'
import find from 'lodash/find'
import keys from 'lodash/keys'
import Handlebars from 'handlebars'
import {format, formatDistance, formatRelative, subDays} from 'date-fns'
import Modal from 'react-modal'

import ipc from '../utils/ipc'

Modal.setAppElement('#__next')

const modalStyle = {
  content: {
    border: 'none',
    background: '#060726',
  },
  overlay: {
    // background: '#060726',
    background: 'rgba(108,106,210,0.6)',
  },
}

export default () => {
  const goto = href => {
    return Router.replace(href)
  }

  function areEqual(prevProps, nextProps) {
    return prevProps == nextProps ? false : true
  }

  const [loading, setLoading] = useState(true)
  const [processing, setProcessing] = useState(false)

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

  const handleSend = throttle(async (message, count, dryRun) => {
    if (processing) {
      return
    }

    setProcessing(true)
    const template = Handlebars.compile(message)
    const m = template({integration})

    let campaign = await ipc.createCampaign({
      num_batch: count,
      message: m,
      dry_run: dryRun,
    })

    const campaigns = await ipc.getCampaigns()
    setCampaigns(campaigns)

    setProcessing(false)
  }, 1000)

  const [isModalOpen, setModelOpen] = useState(false)
  const [selectedCampaign, setSelectedCampaign] = useState(null)
  const openCampaignInfo = campaign => {
    setSelectedCampaign(campaign)
    setModelOpen(true)
  }

  const RenderCampaigns = React.memo(({campaigns}) => {
    if (keys(campaigns).length == 0) {
      return (
        <div className='flex flex-col text-center content-center justify-center h-16 w-full'>
          Run your first campaign
        </div>
      )
    }

    const sorted = orderBy(campaigns, ['created_at'], ['desc'])

    return map(sorted, (campaign, key) => {
      return (
        <article
          key={key}
          className='mt-2 text-white text-opacity-80 hover:bg-white hover:bg-opacity-8 cursor-pointer'
          onClick={() => openCampaignInfo(campaign)}>
          <div className='w-full py-2'>
            <section className='profile flex flex-row justify-between content-center'>
              <section className='flex flex-col w-2/3'>
                {campaign.dry_run && <p>dry run</p>}
                <p>Sent to {campaign.num_batch} followers</p>
              </section>
              <section className=''>
                <p>{formatDistance(new Date(Number(campaign.created_at)), new Date())} ago</p>
              </section>
            </section>
          </div>
        </article>
      )
    })
  }, areEqual)

  const renderNewCampaign = (followers, integration) => {
    if (!followers || !integration) {
      return null
    }
    return (
      <>
        <NewCampaign
          enabled={integration ? true : false}
          handleSend={handleSend}
          count={followers.length / 8 > 100 ? 100 : Math.ceil(followers.length / 8)}
        />
      </>
    )
  }

  return (
    <>
      <Screen>
        <main className='max-w-screen-xl mx-auto bg-white bg-opacity-8 p-2 pt-6 rounded-lg'>
          <header className='flex flex-col'>
            {/* <button
              className='p-2 w-1/2 mx-auto bg-secondary bg-opacity-40 text-black rounded-md'
              onClick={handleScan}>
              Build Engagement
            </button> */}
            <div className='flex flex-row justify-between content-center px-2'>
              <p className='self-end text-white text-center text-2xl lg:text-4xl font-black'>Campaigns</p>
              <div className='self-end text-center bg-secondary bg-opacity-40 text-white px-2 py-1.5 rounded-lg'>
                {integration ? (
                  <>
                    <p>Using {integration.title}</p>
                  </>
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
            </div>
          </header>

          {processing ? (
            <div className='fixed inset-0 h-screen w-full z-50 overflow-hidden flex flex-col text-center content-center justify-center bg-primary text-white text-opacity-80'>
              <p>Send messages</p>
              <p>This might take a few seconds...</p>
            </div>
          ) : (
            renderNewCampaign(followers, integration)
          )}
          <section className='mt-2 px-4'>
            <p className='text-md text-white text-opacity-80 font-semibold'>Previous Campaigns</p>
            <RenderCampaigns campaigns={campaigns} />
          </section>
        </main>
        {selectedCampaign && isModalOpen && (
          <Modal
            isOpen={isModalOpen}
            onRequestClose={() => setModelOpen(false)}
            contentLabel='Campaign Info'
            style={modalStyle}>
            <section className='bg-primary-darker'>
              <p className='text-md text-white text-opacity-80 font-semibold'>Campaign</p>
              <p className='text-md text-white text-opacity-80'>
                {formatRelative(new Date(Number(selectedCampaign.created_at)), new Date())}
              </p>
              <p className='text-sm text-white text-opacity-80'>
                {formatDistance(new Date(Number(selectedCampaign.created_at)), new Date())} ago
              </p>
              {map(selectedCampaign.campaign_users, user => {
                return (
                  <div key={user.screen_name} className='mt-2'>
                    <Profile
                      title={`@${user.screen_name}`}
                      subtitle={user.name}
                      description={user.description}
                      image={user.profile_image_url_https}
                    />
                  </div>
                )
              })}
            </section>
          </Modal>
        )}
      </Screen>
    </>
  )
}
