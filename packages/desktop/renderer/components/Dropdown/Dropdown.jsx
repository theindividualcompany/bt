import React, {useState, useEffect} from 'react'
import Router from 'next/router'
import find from 'lodash/find'
import classnames from 'classnames'

const Dropdown = ({active, links}) => {
  const [open, setOpen] = useState(false)
  const [current, setCurrent] = useState(null)

  useEffect(() => {
    const current = find(links, {href: active})
    setCurrent(current)
  }, [])

  const goto = href => {
    return Router.replace(href)
  }

  if (!current) {
    return null
  }

  return (
    <section className='dropdown'>
      <button className='' onClick={() => setOpen(!open)}>
        {current.title}
      </button>
      {
        <section
          className={classnames({
            'dropdown-links rounded-md border shadow-sm p-2 z-50': true,
            hidden: !open,
            block: open,
          })}>
          {links.map(link => {
            return (
              <a
                key={link.href}
                onClick={() => {
                  goto(link.href)
                }}>
                <p
                  className={classnames({
                    'bg-gray-400': link.href == active,
                  })}>
                  {link.title}
                </p>
              </a>
            )
          })}
        </section>
      }
      <style jsx>{`
        .dropdown {
          position: relative;
        }
        button {
          padding: 0.5em 1em;
        }

        .hidden {
          display: none;
        }

        .block {
          display: block;
        }

        .dropdown-links {
          position: absolute;
          background: white;
        }
      `}</style>
    </section>
  )
}

export default Dropdown
