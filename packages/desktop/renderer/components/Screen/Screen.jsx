import React from 'react'

const Screen = ({className, children}) => {
  return (
    <article className='screen relative pt-4 bg-primary-darker'>
      {children}
      <style jsx>{`
        .screen {
          height: 100vh;
          width: 100vw;
          position: relative;
        }
      `}</style>
    </article>
  )
}

export default Screen
