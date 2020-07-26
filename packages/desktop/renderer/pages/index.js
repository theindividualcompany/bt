import Screen from '../components/Screen'

export default () => {
  return (
    <Screen>
      <main className='max-w-screen-xl mx-auto bg-white bg-opacity-8 p-2 pt-6 rounded-lg'>
        <header className='flex flex-col'>
          <div className='flex flex-row justify-between content-center px-2'>
            <p className='self-end text-white text-center text-2xl lg:text-4xl font-black'>For You</p>

            <div className='self-end flex text-center text-base font-black'>
              <p className='pl-2 text-primary'>fresh</p>
              <p className='pl-2 text-white text-opacity-20'>hot</p>
              <p className='pl-2 text-white text-opacity-20'>rising</p>
            </div>
          </div>
        </header>
        <p className='mt-20 text-center'>feed coming soon</p>
      </main>
    </Screen>
  )
}
