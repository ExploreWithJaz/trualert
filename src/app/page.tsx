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

        <section className='flex justify-center items-center overflow-hidden mt-[45px] px-2.5 '>
          <div className='flex mx-75.5 py-2.5 '>
            <div>
              <img className='h-auto w-auto' src="/phone.png" alt="Home Page Phone" />
            </div>
          </div>
        </section>

        <section>
          <div className='my-35 px-20'>
            <div className='flex flex-row items-center gap-15 text-center py-[27px] mx-[232.5px]'>
              <img
                className="w-[640px] h-[640px] object-cover object-center rounded-[60px]"
                src="/people.png"
                alt="People Talking"
              />
              <div className="flex flex-col items-start gap-5 text-left h-full w-[537.59px]">
                <p className='text-lg text-[#FF0F0F]'>UNIFIED PROTECTION</p>
                <h2  className='text-5xl/16 font-bold'>BUILDING SAFER COMMUNITIES</h2>
                <p className='text-lg'>
                  TRUalert is committed to keeping your campus safe and secure.
                  Our dedicated security team works around the clock to ensure students feel protected,
                  allowing you to focus on your studies, make the most of your college experience,
                  and thrive in a safe environment.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

export default page