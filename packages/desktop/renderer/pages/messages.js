import Screen from '../components/Screen'

export default () => {
  return (
    <Screen>
      {/* h-64  bg-gray-100 border border-gray-400 rounded-md p-4 flex flex-col content-center justify-center */}
      <main className='max-w-screen-xl mx-auto bg-white bg-opacity-8 p-2 pt-6 rounded-lg'>
        <p className='text-center'>Messages Coming Soon</p>
        <p className='text-sm text-gray-600 mt-4'>
          We're waiting for access to the Twitter Activity API to thoroughly deliver better twitter DM
          functionality. Like better search, better organization, better better.
        </p>
        <p className='text-sm text-gray-600 mt-2'>
          The same API will allow us to actually use the Twitter API to implement chat bot like features
          accurately without getting your account blocked or banned for abusing rate limits.
        </p>
      </main>
    </Screen>
  )
}
