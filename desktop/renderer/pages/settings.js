import {useState, useEffect} from 'react'
import Screen from '../components/Screen'
import Integration from '../components/Integration'
import map from 'lodash/map'

import ipc from '../utils/ipc'

export default () => {
  const [settings, setSettings] = useState([])

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
      const integrationLogoPath = window.location.href.includes('http')
        ? `/${key}.svg`
        : `${window.appPath}/renderer/out/${key}.svg`

      return (
        <div className='pr-4 relative' key={`integration-${key}`}>
          <Integration
            name={key}
            integration={integration}
            logoPath={integrationLogoPath}
            onSubmit={onIntegrationSave}
          />
        </div>
      )
    })
  }

  return (
    <Screen>
      <main className='max-w-screen-xl mx-auto bg-white bg-opacity-8 p-2 pt-6 rounded-lg'>
        <p className='self-end text-white text-center text-2xl lg:text-4xl font-black'>Settings</p>
        <section className=''>
          <p className='text-md text-gray-600 font-semibold'>Integrations</p>
          {settings.integrations && renderIntegrations(settings.integrations)}
        </section>
      </main>
    </Screen>
  )
}
