import React from 'react'
import Navigation from '../components/navigation'
import Footer from '@/components/footer'
import PillButton from '@/components/pillbutton'
import ScrollEffect from '@/components/ScrollEffect'
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
            <div className='flex flex-row max-w-7xl justify-center items-center gap-15 text-center py-[27px] mx-[232.5px]'>
              <img
                className="w-[640px] h-[640px] object-cover object-center rounded-[60px]"
                src="/people.png"
                alt="People Talking"
              />
              <div className="flex flex-col items-start gap-5 text-left h-full w-[537.59px] tracking-wider">
                <p className='text-lg text-[#FF0F0F]'>UNIFIED PROTECTION</p>
                <h2 className='text-5xl/16 font-bold'>BUILDING SAFER COMMUNITIES</h2>
                <p className='text-lg'>
                  TRUalert is committed to keeping your campus safe and secure.
                  Our dedicated security team works around the clock to ensure students feel protected,
                  allowing you to focus on your studies, make the most of your college experience,
                  and thrive in a safe environment.
                </p>
              </div>
            </div>
          </div>

          <div className='px-20 m-0'>
            <div className='flex flex-row max-w-7xl justify-center items-center gap-15 p-0 mx-[232.5px]'>
              <div className="flex flex-col items-start gap-5 text-left h-full w-[537.59px] tracking-wider">
                <p className='text-lg text-[#FF0F0F]'>ALWAYS READY, ALWAYS RELIABLE</p>
                <h2 className='text-5xl/16 font-bold'>TRUSTED<br /> EMERGENCY HELP,<br /> JUST A TAP AWAY</h2>
                <p className='text-lg'>
                  With TRUalert, you're never alone. One tap connects you to Noonlight's professional dispatchers,
                  who coordinate emergency response via SMS and calls—quick, discreet,
                  and always ready when it matters most.
                </p>
              </div>
              <img
                className="w-[640px] h-[640px] object-cover object-center rounded-[60px]"
                src="/people.png"
                alt="People Talking"
              />
            </div>
          </div>
        </section>

        <section className='px-20 m-0'>
          <div className='flex flex-col gap-5 py-30 mx-[232.5px]'>
            <div className='flex flex-col items-center justify-center text-center '>
              <h2 className='text-[80px]/22 font-bold'>STAY SAFE ANYTIME, ANYWHERE WITH</h2>
            </div>
            <div className='flex justify-center items-center p-2.5'>
              <img className='w-[390px] h-[100px]' src="/Logo-Horizontal-Dark-mode.svg" alt="TRUalert Darkmode Logo" />
            </div>
          </div>
        </section>

        <section>
          <ScrollEffect />
        </section>

        <section>
          <div className='px-20 m-0'>
            <div className='flex flex-row items-end justify-center py-10 mx-[232.5px] gap-[79px]'>
              <img className='h-[625.52px] w-[625.52px]' src="https://trualert.com/wp-content/uploads/2025/04/Tap.png" alt="TRUalert Phone Screen Login" />
              <div className='flex flex-col  gap-10 text-left h-full w-[575.48px] tracking-wider'>
                <div className='flex flex-col gap-5'>
                  <p className='text-[32px] text-[#FF0F0F] font-semibold mb-[14.4px]'>EVOLVING FOR A</p>
                  <h2 className='text-[80px]/21 font-bold'>
                    SAFER, SMARTER FUTURE & BEYOND
                  </h2>
                  <div className='flex flex-row gap-5'>
                    <img className='w-[161px] h-[47px]' src="/app-store-download.svg" alt="App Store Download Button" />
                    <img className='w-[161px] h-[47px]' src="/google-play-button.svg" alt="Google Play Download Button" />
                  </div>
                </div>
                <div className='p-2.5'>
                  <ul className='flex flex-row gap-10 text-sm'>
                    <li>© 2025 TRUalert</li>
                    <li><a className='text-[#FF0F0F] hover:text-[#FFFFFF] transition duration-300 ease-in-out' href="">Privacy & Security</a></li>
                    <li><a className='text-[#FF0F0F] hover:text-[#FFFFFF] transition duration-300 ease-in-out' href="">Terms</a></li>
                    <li><a href="">Pricing</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  )
}

export default page