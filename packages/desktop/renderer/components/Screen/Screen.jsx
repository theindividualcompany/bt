import React from 'react'

const Screen = ({className, children}) => {
  return (
    <article className={className}>
      <div className='screen relative'>{children}</div>
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
