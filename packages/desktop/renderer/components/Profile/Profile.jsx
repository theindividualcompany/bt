import React from 'react'
import truncate from 'lodash/truncate'

const Profile = ({title, subtitle, description, image, children}) => {
  return (
    <article className='w-full py-2 text-white text-opacity-80 hover:bg-white hover:bg-opacity-8'>
      <section className='profile flex flex-row content-center'>
        <section className='flex flex-col content-center justify-center'>
          <img className='rounded-full' src={image} />
        </section>
        <section className='flex flex-col w-4/5 pl-2'>
          <p>
            {title} | {subtitle}
          </p>
          <p>{truncate(description, {length: 120})}</p>
          <section>{children}</section>
        </section>
      </section>
    </article>
  )
}

export default Profile
