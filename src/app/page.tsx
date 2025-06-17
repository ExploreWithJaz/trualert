import React from 'react'
import Navigation from '../components/navigation'
import PillButton from '@/components/pillbutton'
// import Home from '../pages/home/home'

function page() {
  return (
    <>
      <Navigation />
      <div className='mt-20 px-2'>
        <section className='flex flex-col items-center max-w-[850px] mx-auto py-2.5 gap-5 text-center'>
          <div className='text-[80px]/21 font-bold w-full'>
            <h1>
              EMERGENCY AID, JUST A <span className='text-[#ff0f0f]'>TAP AWAY</span>
            </h1>
          </div>
          <div className='w-[588.8px] h-auto mb-3.5 '>
            <p className='text-white text-lg text-center leading-7 tracking-wider'>
              Experience peace of mind knowing help is just a tap away. TRUalert instantly connects you to professional emergency dispatchers via Noonlight—no tracking, no delays, just real help when you need it most.
            </p>
          </div>
          <div className='flex justify-center items-center w-full gap-4 mx-15 p-2.5'>
            <img className='w-[161px] h-[47px]' src="/app-store-download.svg" alt="App Store Download Button" />
            <img className='w-[161px] h-[47px]' src="/google-play-button.svg" alt="Google Play Download Button" />
          </div>
          <div>
            <PillButton href="" size="small" variant="default" className="text-white font-bold">
              Button
            </PillButton>
          </div>
        </section>

        <section className='flex overflow-hidden mt-[45px] px-2.5'>
          <div className='flex mx-75.5 py-2.5'>
            <div>
              <img src="/phone.png" alt="Home Page Phone" />
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

export default page