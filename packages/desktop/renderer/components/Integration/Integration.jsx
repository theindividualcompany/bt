import React, {useState} from 'react'

const Integration = ({name, integration, onSubmit, logoPath}) => {
  const [link, setLink] = useState(integration.link)

  return (
    <div className='mb-2 py-4'>
      <p>{integration.title}</p>
      <section className='integration relative flex flex-row justify-between'>
        <img style={{height: '24px', width: '24px'}} src={logoPath} />
        <input
          className='flex-grow ml-8 pl-2 bg-gray-100 rounded-md'
          placeholder='link'
          name='link'
          id='link'
          value={link}
          onChange={event => setLink(event.target.value)}
        />
        <button
          className='py-2 px-2 bg-gray-400 rounded-md'
          onClick={() => {
            onSubmit({
              name,
              integration: {
                ...integration,
                link,
              },
            })
          }}>
          Save
        </button>
      </section>
    </div>
  )
}

export default Integration
