import React, {useState, useEffect} from 'react'
import Router from 'next/router'
import partition from 'lodash/partition'
import classnames from 'classnames'

const Dropdown = ({active, links}) => {
  const [open, setOpen] = useState(false)
  const [current, setCurrent] = useState(null)
  const [rest, setRest] = useState(null)

  useEffect(() => {
    const parts = partition(links, {href: active})
    setCurrent(parts[0][0])
    setRest(parts[1])
  }, [])

  const goto = href => {
    return Router.replace(href)
  }

  if (!current || !rest) {
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
            'dropdown-links rounded-md border shadow-sm p-2': true,
            hidden: !open,
            block: open,
          })}>
          {rest.map(link => {
            return (
              <a
                key={link.href}
                onClick={() => {
                  goto(link.href)
                }}>
                <p key={link.href}>{link.title}</p>
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
