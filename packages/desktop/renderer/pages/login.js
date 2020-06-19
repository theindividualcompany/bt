import { useState } from 'react'
import Router from 'next/router'
import ipc from '../utils/ipc'

export default () => {
  const [accessToken, setAccessToken] = useState('')
  const [accessTokenSecret, setAccessTokenSecret] = useState('')
  const [consumerKey, setConsumerKey] = useState('')
  const [consumerSecret, setConsumerSecret] = useState('')

  const validateKeyLogin = () => {
    if (accessToken !== '' &&
      accessTokenSecret !== '' &&
      consumerKey !== '' &&
      consumerSecret !== '') {
      return true
    }

    return false
  }

  const doLogin = async (e) => {
    e.preventDefault()
    if (!validateKeyLogin()) {
      return
    }

    await ipc.setLoginCredentials({
      accessToken,
      accessTokenSecret,
      consumerKey,
      consumerSecret
    })

    const startPath = window.location.href.includes('http')
      ? '/start'
      : `${window.appPath}/renderer/out/start.html`;
    console.log('startPath', startPath)
    Router.replace(startPath);
  }

  return (
    <article>
      <header>
        <img src='/logo.svg' />
      </header>
      {/* <p>Better Twitter</p> */}

      <form onSubmit={(e) => doLogin(e)}>
        <label htmlFor='accessToken'>Access Token</label>
        <input
          tabIndex={0}
          required
          autoFocus={true}
          placeholder='accessToken'
          name='accessToken'
          id='accessToken'
          value={accessToken}
          onChange={event => setAccessToken(event.target.value)}
        />

        <label htmlFor='accessTokenSecret'>Access Token Secret</label>
        <input
          required
          placeholder='accessTokenSecret'
          name='accessTokenSecret'
          id='accessTokenSecret'
          value={accessTokenSecret}
          onChange={event => setAccessTokenSecret(event.target.value)}
        />

        <label htmlFor='consumerKey'>Consumer Key</label>
        <input
          required
          placeholder='consumerKey'
          name='consumerKey'
          id='consumerKey'
          value={consumerKey}
          onChange={event => setConsumerKey(event.target.value)}
        />

        <label htmlFor='consumerSecret'>Consumer Secret</label>
        <input
          required
          placeholder='consumerSecret'
          name='consumerSecret'
          id='consumerSecret'
          value={consumerSecret}
          onChange={event => setConsumerSecret(event.target.value)}
        />

        <button
          type='submit'
          className='button api-login'
        >
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
          background: #1DA1F2;
          color: white
        }
      `}</style>
    </article>
  )
}