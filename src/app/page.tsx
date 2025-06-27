'use client';

import React from 'react'
import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import Navigation from '../components/navigation'
import Footer from '@/components/footer'
import PillButton from '@/components/pillbutton'
import PulseEffect from '@/components/PulseAnimation'
import ScrollEffect from '@/components/ScrollEffect'

// import Home from '../pages/home/home'

function page() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <>
      <Navigation />
      <div
        className="fixed inset-0 w-full h-full min-h-screen z-[-1] bg-cover bg-center"
        style={{
          backgroundImage: "url('/map.png')",
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          filter: 'invert(100%) brightness(10.18) contrast(1.5) saturate(0.6) hue-rotate(180deg) invert(100%) brightness(0.1)',
          // Only for mobile: make sure it stays behind and covers
          minHeight: '100vh',
          width: '100vw',
          left: 0,
          top: 0,
        }}
      ></div>

      <div>
        <section className='flex flex-col items-center max-w-[850px] mx-auto gap-5 text-center mt-15 px-5'>
          <div className='text-[47px]/13 md:text-[60px]/13 xl:text-[80px]/21 font-bold w-full'>
            <h1>
              EMERGENCY AID, JUST A <span className='text-[#ff0f0f]'>TAP AWAY</span>
            </h1>
          </div>
          <div className='max-w-[588.8px] h-auto mb-3.5'>
            <p className='text-white text-md xl:text-lg text-center leading-7 tracking-normal xl:tracking-wider sm:mb-[14.4px]'>
              Experience peace of mind knowing help is just a tap away. TRUalert instantly connects you to professional emergency dispatchers via Noonlight—no tracking, no delays, just real help when you need it most.
            </p>
          </div>
          <div className='flex flex-wrap justify-center items-center w-full gap-4 md:py-10'>
            <a href="https://apps.apple.com/us/app/trualert/id6503326659">
              <img className='w-[161px] h-[47px]' src="/App-Store.png" alt="App Store Download Button" />
            </a>
            <a href="https://play.google.com/store/apps/details?id=com.pixeloha.trualert">
              <img className='w-[161px] h-[47px]' src="/Google-Play.png" alt="Google Play Download Button" />
            </a>
          </div>
          <div>
            <PillButton size="small" variant="default" className="text-white font-bold" scrollToTop={true} scrollOptions={{ duration: 800, behavior: 'smooth' }}>
            </PillButton>
          </div>
        </section>

        <section className="w-full overflow-x-hidden" data-aos="fade-up">
          <div className='mt-[45px] px-2.5'>
            <div className='flex justify-center w-full py-2.5'>
              <div className="w-[1280px] h-[619px] flex justify-center items-center">
                <div className="relative w-[300px] flex justify-center h-auto mx-auto">
                  <div className="absolute inset-0 z-0 flex justify-center items-center">
                    <PulseEffect />
                  </div>
                  <img
                    src="https://trualert.com/wp-content/uploads/2025/05/homepage.png"
                    alt="Phone"
                    className="relative z-10 w-[280px] sm:w-full h-auto"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* <section>
          <div className='my-35 px-20'>
            <div className='flex flex-row max-w-7xl justify-center items-center gap-15 text-center py-[27px] mx-[232.5px]'>
              <img
                className="w-[640px] h-[640px] object-cover object-center rounded-[60px]"
                src="/people.png"
                alt="People Talking"
                data-aos="fade-up"
              />
              <div className="flex flex-col items-start gap-5 text-left h-full w-[537.59px] tracking-wider" data-aos="fade-up" data-aos-delay="200">
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
              <div className="flex flex-col items-start gap-5 text-left h-full w-[537.59px] tracking-wider" data-aos="fade-up" data-aos-delay="200">
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
                data-aos="fade-up"
              />
            </div>
          </div>
        </section> */}

        <section className="px-10 md:px-10 md:mx-11.5 lg:mx-44 xl:px-0 m-0" data-aos="fade-up">
          <div className="flex flex-col gap-5 py-25 mx-0 max-w-5xl">
            <div className="flex flex-col items-center justify-center text-center">
              <h2 className="text-5xl md:text-6xl xl:text-[80px] font-bold leading-tight">
                STAY SAFE ANYTIME, ANYWHERE WITH
              </h2>
            </div>
            <div className="flex justify-center items-center p-0 md:p-2.5">
              <img
                className="w-full max-w-[390px] h-auto"
                src="/Logo-Horizontal-Dark-mode.svg"
                alt="TRUalert Darkmode Logo"
              />
            </div>
          </div>
        </section>

        <section data-aos="fade-up">
          {/* Desktop View @ 1280px and above */}
          <div className='hidden xl:block'>
            <ScrollEffect />
          </div>
          {/* Mobile View @ 1280px and below */}
          <div className='flex xl:hidden flex-col justify-between items-center gap-25  pb-25'>
            <div className='flex flex-col items-center gap-5'>
              <div className='flex flex-col gap-5 text-center p-5'>
                <h3 className='text-3xl font-bold'>AFFORDABLE SUBSCRIPTION</h3>
                <p className='text-md mb-[14.4px]'>Choose the subscription plan that perfectly fits your needs and preferences.</p>
              </div>
              <img className='w-[250px] h-auto' src="https://trualert.com/wp-content/uploads/2025/05/Group-39265-1.png" alt="TRUalert Pricing Phone" />
            </div>
            <div className='flex flex-col items-center gap-5'>
              <div className='flex flex-col gap-5 text-center p-5'>
                <h3 className='text-3xl font-bold'>ONE TAP FOR IMMEDIATE SAFETY</h3>
                <p className='text-md mb-[14.4px]'>Quickly summon help with a single tap. Provide additional info to ensure rapid response to your exact location.</p>
              </div>
              <img className='w-[250px] h-auto' src="https://trualert.com/wp-content/uploads/2025/04/iPhone-14-Pro-Max-1.png" alt="TRUalert Location Phone" />
            </div>
            <div className='flex flex-col items-center gap-5'>
              <div className='flex flex-col gap-5 text-center p-5'>
                <h3 className='text-3xl font-bold'>TRACK YOUR SAFETY HISTORY</h3>
                <p className='text-md mb-[14.4px]'>Easily view your emergency activity log, including button presses, locations, and response times, for complete peace of mind.</p>
              </div>
              <img className='w-[250px] h-auto' src="https://trualert.com/wp-content/uploads/2025/04/iPhone-14-Pro-Max-3.png" alt="TRUalert Account History Phone" />
            </div>
          </div>
        </section>

        <section>
          <div className='hidden xl:block px-20 m-0'>
            <div className='flex flex-row items-end justify-center py-10 gap-[79px]'>
              <img className='w-full max-w-[625.52px] h-auto' src="https://trualert.com/wp-content/uploads/2025/04/Tap.png" alt="TRUalert Phone Screen Login" data-aos="fade-up" />
              <div className='flex flex-col  gap-10 text-left h-full w-[575.48px] tracking-wider' data-aos="fade-up" data-aos-delay="200">
                <div className='flex flex-col gap-5'>
                  <p className='text-[32px] text-[#FF0F0F] font-semibold mb-[14.4px]'>EVOLVING FOR A</p>
                  <h2 className='text-[80px]/21 font-bold'>
                    SAFER, SMARTER FUTURE & BEYOND
                  </h2>
                  <div className='flex flex-row gap-5'>
                    <a href="https://apps.apple.com/us/app/trualert/id6503326659">
                      <img className='w-[161px] h-[47px]' src="/App-Store.png" alt="App Store Download Button" />
                    </a>
                    <a href="https://play.google.com/store/apps/details?id=com.pixeloha.trualert">
                      <img className='w-[161px] h-[47px]' src="/Google-Play.png" alt="Google Play Download Button" />
                    </a>
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

          <div className='block xl:hidden px-5 sm:mx-10 md:px-10 md:mx-0 lg:px-10 lg:mx-18 m-0'>
            <div className='flex flex-col gap-[47px] py-5'>
              <div className='flex flex-col justify-center gap-5'>
                <p className='text-[#FF0F0F] text-3xl font-semibold mb-[14.4px] md:text-center'>EVOLVING FOR A</p>
                <h2 className='text-[#FFF8F8] text-[47px]/13 md:text-6xl font-bold'>SAFER, SMARTER FUTURE & BEYOND</h2>
                <div className='flex flex-wrap gap-5'>
                  <img src="/App-Store.png" alt="Appstore Button" />
                  <img src="/Google-Play.png" alt="Google Play Button" />
                </div>
              </div>
              <div className='flex flex-col items-center'>
                <img className='w-full max-w-[640px] h-auto p-2.5' src="https://trualert.com/wp-content/uploads/2025/04/Tap.png" alt="TRUalert Login Screen" />
                <ul className='flex flex-wrap gap-5 text-sm mt-17.5 p-5'>
                  <li><a href="">Privacy & Security</a></li>
                  <li><a className='text-[#FF0F0F] hover:text-[#FFFFFF] transition duration-300 ease-in-out' href="">Terms</a></li>
                  <li><a href="">Pricing</a></li>
                  <li>© 2025 TRUalert</li>
                </ul>
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