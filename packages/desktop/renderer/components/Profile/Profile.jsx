import React from 'react'

const Profile = ({title, subtitle, description, image}) => {
  return (
    <>
      <section className='profile flex flex-row justify-between content-center'>
        <section className='flex flex-col'>
          <p>{title}</p>
          <p>{subtitle}</p>
        </section>
        <section>
          <img className='rounded-full ' src={image} />
        </section>
      </section>
    </>
  )
}

export default Profile
