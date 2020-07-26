import React from 'react'

const Screen = ({className, children}) => {
  return (
    <article className='screen relative pt-4 bg-primary-darker max-w-screen-xl mx-auto'>
      {children}
      <style jsx>{`
        .screen {
          height: 100%;
          width: 100vw;
          position: relative;
        }
      `}</style>
    </article>
  )
}

export default Screen
