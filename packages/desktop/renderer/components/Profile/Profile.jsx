import React from 'react'

const Profile = ({title, subtitle, description, image, children}) => {
  return (
    <article className='w-full py-2 px-4 bg-gray-100 rounded-md'>
      <section className='profile flex flex-row justify-between content-center'>
        <section className='flex flex-col w-4/5'>
          <p>
            {title} | {subtitle}
          </p>
          <p>{description}</p>
        </section>
        <section className=''>
          <img className='rounded-full' src={image} />
        </section>
      </section>
      <section>{children}</section>
    </article>
  )
}

export default Profile
