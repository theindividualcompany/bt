import {useState, useEffect} from 'react'
import Router from 'next/router'
import ipc from '../utils/ipc'

export default () => {
  const [access_token_key, setAccessToken] = useState('')
  const [access_token_secret, setAccessTokenSecret] = useState('')
  const [consumer_key, setConsumerKey] = useState('')
  const [consumer_secret, setConsumerSecret] = useState('')
  const [handle, setHandle] = useState('')

  const [assetPath, setAssetPath] = useState('')
  useEffect(() => {
    const assetPath = window.location.href.includes('http')
      ? '/logo.svg'
      : `${window.appPath}/renderer/out/logo.svg`
    setAssetPath(assetPath)
  }, [])

  const validateKeyLogin = () => {
    if (
      access_token_key !== '' &&
      access_token_secret !== '' &&
      consumer_key !== '' &&
      consumer_secret !== '' &&
      handle !== ''
    ) {
      return true
    }

    return false
  }

  const doLogin = async e => {
    e.preventDefault()
    if (!validateKeyLogin()) {
      return
    }

    await ipc.setLoginCredentials({
      access_token_key,
      access_token_secret,
      consumer_key,
      consumer_secret,
      handle,
    })

    const indexPath = window.location.href.includes('http')
      ? '/index'
      : `${window.appPath}/renderer/out/index.html`
    Router.replace(indexPath)
  }

  return (
    <article>
      <header>
        <img src={assetPath} />
      </header>
      {/* <p>Better Twitter</p> */}

      <form onSubmit={e => doLogin(e)}>
        <label htmlFor='handle'>Handle</label>
        <input
          tabIndex={0}
          required
          autoFocus={true}
          placeholder='handle'
          name='handle'
          id='handle'
          value={handle}
          onChange={event => setHandle(event.target.value)}
        />

        <label htmlFor='accessToken'>Access Token</label>
        <input
          required
          placeholder='accessToken'
          name='accessToken'
          id='accessToken'
          value={access_token_key}
          onChange={event => setAccessToken(event.target.value)}
        />

        <label htmlFor='accessTokenSecret'>Access Token Secret</label>
        <input
          required
          placeholder='accessTokenSecret'
          name='accessTokenSecret'
          id='accessTokenSecret'
          value={access_token_secret}
          onChange={event => setAccessTokenSecret(event.target.value)}
        />

        <label htmlFor='consumerKey'>Consumer Key</label>
        <input
          required
          placeholder='consumerKey'
          name='consumerKey'
          id='consumerKey'
          value={consumer_key}
          onChange={event => setConsumerKey(event.target.value)}
        />

        <label htmlFor='consumerSecret'>Consumer Secret</label>
        <input
          required
          placeholder='consumerSecret'
          name='consumerSecret'
          id='consumerSecret'
          value={consumer_secret}
          onChange={event => setConsumerSecret(event.target.value)}
        />

        <button type='submit' className='button api-login'>
          Continue
        </button>
      </form>

      <style jsx>{`
        article {
          width: 100vw;
          height: 100vh;
        }

        header img {
          width: 33%;
        }

        form {
          margin-top: 33%;
          padding-left: 2em;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          justify-content: center;
        }

        input {
          margin-bottom: 1em;
          width: 60%;
        }

        .button {
          width: 60%;
          padding: 1em 2em;
          border-radius: 1em;
        }

        .twitter-login {
          background: #1da1f2;
          color: white;
        }
      `}</style>
    </article>
  )
}
