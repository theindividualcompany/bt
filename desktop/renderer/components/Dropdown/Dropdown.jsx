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
            'w-full min-h-1/3 fixed justify-center left-0': true,
          })}>
          <section className='bg-primary-lighter w-full sm:w-3/4 lg:w-1/2 mx-8 rounded-md shadow-sm p-2 z-50'>
            <div className='dropdown-links grid grid-cols-2 sm:grid-cols-3 gap-2'>
              {links.map(link => {
                return (
                  <a
                    key={link.href}
                    className={classnames({
                      'px-6 pt-12 pb-4 rounded bg-primary text-white text-center cursor-pointer': true,
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
