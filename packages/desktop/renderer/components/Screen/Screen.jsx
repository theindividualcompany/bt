import React from 'react'

const Screen = ({children}) => {
  return (
    <>
      <div className='screen'>{children}</div>
      <style jsx>{`
        .screen {
          height: 100vh;
          width: 100vw;
          position: relative;
        }
      `}</style>
    </>
  )
}

export default Screen
