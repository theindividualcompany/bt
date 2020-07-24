import React from 'react'
import Router from 'next/router'
import Dropdown from '../Dropdown'

const links = [
  {
    href: '/index',
    title: 'Home',
  },
  {
    href: '/followers',
    title: 'Followers',
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

  return (
    <>
      <header className='navigation border-b border-gray-200 z-50'>
        <img className='w-8' onClick={() => goto('/index')} src={props.logoPath} />
        <nav>
          <Dropdown links={links} active={props.active} />
        </nav>
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
          background: white;
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
