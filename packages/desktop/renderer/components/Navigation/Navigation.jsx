import React, {useState, useEffect} from 'react'
import Router from 'next/router'
import Dropdown from '../Dropdown'
import find from 'lodash/find'

const links = [
  {
    href: '/index',
    title: 'For You',
  },
  {
    href: '/followers',
    title: 'Engagement',
  },
  {
    href: '/messages',
    title: 'Messages',
  },
  {
    href: '/campaigns',
    title: 'Campaigns',
  },
  {
    href: '/settings',
    title: 'Settings',
  },
]

const Navigation = props => {
  const goto = href => {
    return Router.replace(href)
  }

  const [current, setCurrent] = useState(() => {
    const current = find(links, {href: props.active})
    return current
  })

  useEffect(() => {
    const current = find(links, {href: props.active})
    setCurrent(current)
  }, [props.active])

  return (
    <>
      <header className='navigation text-primary bg-primary-darker z-50'>
        {/* {current && <p>{current.title}</p>} */}
        <div className='profile-image w-8'></div>
        <nav>
          <Dropdown logoPath={props.logoPath} links={links} active={props.active} />
        </nav>
        {/* <div className='flex-grow'></div> */}
        <img
          onClick={() => goto('/settings')}
          className='profile-image rounded-full'
          src={props.profile.profile_image_url_https}
        />
      </header>
      <style jsx>{`
        .navigation {
          position: sticky;
          top: 0;
          left: 0;
          height: 48px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 0 1em;
        }

        nav {
          position: relative;
        }

        img {
          cursor: pointer;
        }

        .profile-image {
          height: 80%;
        }

        header {
        }
      `}</style>
    </>
  )
}

export default Navigation
