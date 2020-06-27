import React, {useState, useEffect} from 'react'
import classnames from 'classnames'

const Integration = ({name, integration, onSubmit}) => {
  const [open, setOpen] = useState(false)

  const [link, setLink] = useState(integration.link)

  return (
    <section className='integration relative'>
      <button className='' onClick={() => setOpen(!open)}>
        {integration.title}
        <img style={{height: '24px', width: '24px'}} src={`/${name}.svg`} />
      </button>
      {
        <section
          className={classnames({
            'rounded-md border shadow-sm p-2 absolute z-50 bg-white': true,
            hidden: !open,
            block: open,
          })}>
          <label htmlFor='link'>Link</label>
          <input
            tabIndex={0}
            required
            autoFocus={true}
            placeholder='link'
            name='link'
            id='link'
            value={link}
            onChange={event => setLink(event.target.value)}
          />
          <button
            onClick={() => {
              setOpen(false)
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
      }
    </section>
  )
}

export default Integration
