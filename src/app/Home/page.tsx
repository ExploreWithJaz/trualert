import React from 'react'
import Navigation from '@/components/navigation/navigation'

const Home = () => {
  return (
    <>
      <Navigation />
            <div className='mt-20 px-2'>
        <section className='flex flex-col items-center max-w-[850px] mx-auto py-2.5 gap-5 text-center'>
          <div className='text-[80px] font-bold w-full'>
            <h1>
              EMERGENCY AID, JUST A <span className='text-[#ff0f0f]'>TAP AWAY</span>
            </h1>
          </div>
          <div className='text-lg w-full'>
            <p>
              Experience peace of mind knowing help is just a tap away. TRUalert instantly connects you to professional emergency dispatchers via Noonlight—no tracking, no delays, just real help when you need it most.
            </p>
          </div>
          <div className='flex justify-center items-center gap-4'>
            <img className='w-[100px]' src="/app-store-download.svg" alt="App Store Download Button" />
            <img className='w-[100px]' src="/google-play-button.svg" alt="Google Play Download Button" />
          </div>
          <div>
            <a href="">
              <button>Button</button>
            </a>
          </div>
        </section>
      </div>
    </>
  )
}

export default Home