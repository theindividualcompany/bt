import {useState, useEffect} from 'react'
import Screen from '../components/Screen'
import Navigation from '../components/Navigation'
import Integration from '../components/Integration'
import map from 'lodash/map'

import ipc from '../utils/ipc'

export default () => {
  const [profile, setProfile] = useState({})
  const [settings, setSettings] = useState([])

  useEffect(() => {
    ;(async () => {
      let profile = await ipc.getProfile()
      setProfile(profile)
    })()
  }, [])

  useEffect(() => {
    ;(async () => {
      let settings = await ipc.getSettings()
      let integrations = settings.integrations
      let integration = find(integrations, integration => {
        return integration.link !== ''
      })

      setSettings(settings)
    })()
  }, [])

  const onIntegrationSave = async data => {
    await ipc.setIntegration({
      name: data.name,
      integration: data.integration,
    })
  }

  const renderIntegrations = integrations => {
    return map(integrations, (integration, key) => {
      return (
        <div className='pr-4 relative' key={`integration-${key}`}>
          <Integration name={key} integration={integration} onSubmit={onIntegrationSave} />
        </div>
      )
    })
  }

  return (
    <Screen>
      <Navigation active='/settings' profile={profile} />
      <main className='p-4'>
        <p className='text-lg font-semibold mb-4'>Settings</p>
        <section className=''>
          <p className='text-md text-gray-600 font-semibold'>Integrations</p>
          <div className='h-16 flex flex-row justify-between bg-gray-100 border border-gray-400 rounded-md min-h-2 p-2'>
            {settings.integrations && renderIntegrations(settings.integrations)}
          </div>
        </section>
      </main>
    </Screen>
  )
}