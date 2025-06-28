'use client'
import React from 'react'
import Navigation from '@/components/navigation'
import Footer from '@/components/footer'

function page() {
  return (
    <>
      <Navigation />
      <div>
        <section>
          <div className='px-5 md:px-10 xl:px-20'>
            <div className='flex flex-col gap-5 py-10 lg:mx-[57px] xl:pt-8 xl:pb-20 xl:mx-[145px] 2xl:mx-auto 2xl:max-w-[830px]'>
              {/* TRUalert White Logo Section */}
              <div className='flex justify-center items-center w-full'>
                <div className='w-[108px] h-auto p-5 bg-[#FFF8F8] rounded-[21px]'>
                  <img src="https://trualert.com/wp-content/uploads/2024/08/LogoMark-Light-Mode.svg" alt="TRUalert White Logo" />
                </div>
              </div>
              {/* Title Section */}
              <div className='flex flex-wrap justify-center gap-5 lg:gap-7.5 xl:gap-8 items-center w-full mt-5 px-5 md:mt-10 md:px-0 xl:mt-16'>
                <p className='text-[32px] md:text-[42px] lg:text-7xl font-bold'>How</p>
                <img className='w-auto h-7.5 lg:h-13' src="https://trualert.com/wp-content/uploads/2024/08/Wordmark-Dark-Mode.svg" alt="TRUalert Dark Mode Logo" />
                <p className='text-[32px] md:text-[42px] lg:text-7xl font-bold'>began</p>
              </div>
              {/* Description Section */}
              <div className='xl:mt-7 xl:p-2.5'>
                <div className='flex flex-row flex-wrap lg:flex-nowrap justify-evenly items-start gap-5 md:gap-10 md:mx-auto md:max-w-[830px] font-light tracking-wide'>
                  <div className='flex flex-col gap-5 w-full xl:max-w-[381px] h-auto'>
                    <div>
                      <p className='mb-[14.4px]'>As an entrepreneur and business owner, I've often found myself traveling far from home, sometimes for days on end. During these trips, the safety and security of my loved ones—my spouse, my six children, and my parents—are constantly on my mind. I’ve always believed that everyone, especially those who cannot defend themselves, like young children and the elderly, deserves protection.</p>
                    </div>
                    <div>
                      <p className='mb-[14.4px]'>It's always troubled me that while the wealthy and powerful—Hollywood stars, politicians, and the elite—can afford 24/7 private security, the average American does not have the same access. Why should safety be a privilege reserved for the few? I believe that everyone should have the right to choose the level of protection that fits their needs, without breaking the bank.</p>
                    </div>
                  </div>
                  <div className='flex flex-col gap-5 w-full xl:max-w-[381px] h-auto'>
                    <div>
                      <p className='mb-[14.4px]'>Growing up in California, I've witnessed the changes in our communities firsthand. The rise in crime and the homeless population, particularly in Orange County, has led to public health issues and increased concern for our safety. It’s clear that the need for affordable, reliable security has never been greater.</p>
                    </div>
                    <div>
                      <p className='mb-[14.4px]'>TRUalert was born out of this need—a desire to empower ordinary citizens with the same level of security that the elite take for granted. Our mission is to make personal safety accessible to everyone, ensuring that you and your loved ones can feel secure, no matter where you are.</p>
                    </div>
                    <div className='border-t border-[#989898]'>
                      <a className='flex justify-end items-center w-full pt-7' href="">
                        <span className='flex flex-row gap-2.5 justify-center items-center text-center text-[#FF0F0F] hover:text-[#FFF8F8] transition-all duration-500 ease-in-out text-[15px] sm:text-md font-semibold px-6 py-3'>
                          <span>
                            Learn more about TRUalert App
                          </span>
                          <span>
                            →
                          </span>
                        </span>
                      </a>
                    </div>
                  </div>
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