if (process.env.NODE_ENV === 'development') {
  require('../styles/index.css')
} else {
  require('../styles/dist.css')
}

function App({Component, pageProps}) {
  return (
    <>
      <Component {...pageProps} />
    </>
  )
}

export default App
