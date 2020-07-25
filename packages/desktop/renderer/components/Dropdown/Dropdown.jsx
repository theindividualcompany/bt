import React, {useState, useEffect} from 'react'
import Router from 'next/router'
import find from 'lodash/find'
import classnames from 'classnames'

const Dropdown = ({active, links, logoPath}) => {
  const [open, setOpen] = useState(false)
  const [current, setCurrent] = useState(null)

  useEffect(() => {
    const current = find(links, {href: active})
    setCurrent(current)
  }, [])

  const goto = href => {
    setOpen(!open)
    return Router.replace(href)
  }

  if (!current) {
    return null
  }

  return (
    <section className='dropdown'>
      <button className='text-primary' onClick={() => setOpen(!open)}>
        <img className='w-8 inline' src={logoPath} />
        <span className='pl-2'>&#9660;</span>
      </button>
      {
        <article
          className={classnames({
            hidden: !open,
            flex: open,
            'w-full fixed left-0': true,
          })}>
          <section className='bg-primary-lighter w-full mx-4 rounded-md border shadow-sm p-2 z-50'>
            <div className='dropdown-links grid grid-cols-3 gap-2'>
              {links.map(link => {
                return (
                  <a
                    key={link.href}
                    className={classnames({
                      'px-6 pt-12 pb-2 rounded bg-primary text-white text-center cursor-pointer': true,
                    })}
                    onClick={() => {
                      goto(link.href)
                    }}>
                    <p>{link.title}</p>
                  </a>
                )
              })}
            </div>
          </section>
        </article>
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
      `}</style>
    </section>
  )
}

export default Dropdown
