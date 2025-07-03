'use client'
import React from 'react'
import Navigation from '@/components/navigation'
import Footer from '@/components/footer'
import NavBG from '@/components/nav-bg'

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
                <NavBG />
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
                      <p className='mb-[14.4px]'>As an entrepreneur and business owner, I've often found myself traveling far from home, sometimes for days on end. During these trips, the safety and security of my loved ones—my spouse, my six children, and my parents—are constantly on my mind. I've always believed that everyone, especially those who cannot defend themselves, like young children and the elderly, deserves protection.</p>
                    </div>
                    <div>
                      <p className='mb-[14.4px]'>It's always troubled me that while the wealthy and powerful—Hollywood stars, politicians, and the elite—can afford 24/7 private security, the average American does not have the same access. Why should safety be a privilege reserved for the few? I believe that everyone should have the right to choose the level of protection that fits their needs, without breaking the bank.</p>
                    </div>
                  </div>
                  <div className='flex flex-col gap-5 w-full xl:max-w-[381px] h-auto'>
                    <div>
                      <p className='mb-[14.4px]'>Growing up in California, I've witnessed the changes in our communities firsthand. The rise in crime and the homeless population, particularly in Orange County, has led to public health issues and increased concern for our safety. It's clear that the need for affordable, reliable security has never been greater.</p>
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

        <section>
          <div className='px-5 md:px-10 lg:px-20'>
            <div className='py-10 md:py-20 xl:py-0'>
              <div
                className='relative flex justify-center items-center w-full max-w-[1280px] sm:h-[500px] md:h-[673px] lg:h-[800px] rounded-[20px] shadow-lg mx-auto bg-cover bg-top sm:px-2.5 sm:pt-5 sm:pb-2.5 md:pt-12.5 md:pb-10'
                style={{
                  backgroundImage: "url('/pexels-rdne-7683745-scaled.jpeg')",
                }}
                aria-label="People helping each other"
              >
                {/* Gradient Overlay - Different for mobile and desktop */}
                <div className='absolute inset-0 bg-gradient-to-b from-black/30 via-black/40 to-black/90 lg:from-transparent lg:from-50% lg:via-transparent lg:to-black lg:to-96% rounded-[20px]'></div>

                {/* Content Overlay */}
                <div className='relative z-10 flex flex-col justify-between items-center w-full h-full'>
                  <div className='text-center font-bold md:w-[90%] lg:w-[51%]'>
                    <h2 className='text-[28px] md:text-[38px]/11 lg:text-5xl/16 text-black'>
                      Empowering Communities. <span className='text-[#FF0F0F]'>Reducing Crime.</span>
                    </h2>
                  </div>
                  <div className='flex flex-row flex-wrap lg:flex-nowrap justify-center items-center gap-5 md:gap-10 md:w-[90%] lg:w-[80%] tracking-wide'>
                    <div>
                      <p className='text-white mb-[14.4px]'>
                        Communities across the nation are facing rising levels of crime, leaving residents feeling vulnerable and unsafe. Criminals often operate with impunity, knowing that ordinary citizens lack the means to defend themselves or summon help quickly. This sense of insecurity is eroding the quality of life in our neighborhoods.
                      </p>
                    </div>
                    <div>
                      <p className='text-white mb-[14.4px]'>
                        TRUalert seeks to change this dynamic by empowering individuals with immediate access to security services, deterring criminal activity, and restoring peace of mind. When criminals know that TRUalert is in use, they will think twice before targeting innocent people, ultimately reducing crime and making our communities safer.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className='px-5 md:px-10 lg:px-20'>
            <div className='flex flex-col justify-center gap-5 mx-auto max-w-[900px] py-20'>
              {/* header */}
              <div className='text-left text-[28px] md:text-center md:text-[38px] lg:text-5xl font-bold'>
                <h2>How we're doing it</h2>
              </div>
              {/* content */}
              <div className='flex flex-row flex-wrap lg:flex-nowrap gap-5 md:gap-10 lg:w-[90%] md:mt-6 tracking-wide font-light'>
                <div className="md:flex-1">
                  <p className='mb-[14.4px]'>TRUalert solves a critical safety need by combining smart, efficient technology with reliable emergency dispatch—without the need for guards, tracking, or complex systems.</p>
                  <p className='mb-[14.4px]'>In partnership with Noonlight, TRUalert connects users to trained dispatchers who coordinate real emergency responses through SMS and phone calls.</p>
                </div>
                <div className="md:flex-1">
                  <p className='mb-[14.4px]'>Behind the scenes, it's a robust and secure platform. But for the user, it's beautifully simple: press a button, and help is on the way.</p>
                  <p className='mb-[14.4px]'>By eliminating the need for patrols or live location sharing, TRUalert delivers a private, direct, and effective way to get assistance in urgent moments. It's safety, reimagined—accessible to everyone, anywhere, with just a tap.</p>
                </div>
              </div>
              <div>
                <img src="Illustration-3-768x477.png" alt="TRUalert Tap Me! Button" />
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className='px-5 md:px-10 lg:px-20 w-full bg-[#1A1A1A]'>
            <div className='flex flex-col justify-center items-center gap-5 mx-auto max-w-[1280px] py-20'>
              <div className='text-center text-5xl font-bold'>
                <h2>Our Team</h2>
              </div>
              <div>
                <img className='rounded-[20px]' src="/layer-0-2.png" alt="Three Male Looking at the Camera" />
              </div>
              <div className='flex flex-row flex-wrap md:flex-nowrap md:grid grid-cols-2 xl:flex gap-10 mt-4'>
                <div className='flex flex-col gap-5'>
                  <h3 className='text-lg md:text-2xl font-bold'>Faatuiese P. Roberts</h3>
                  <h4 className='text-lg font-bold'>Chief Executive Officer & Co-Founder</h4>
                  <div className='font-light tracking-wide'>
                    <p className='mb-[14.4px]'>Faatuiese P. Roberts is the CEO and Co-Founder of Citizens Tech LLC. A proud Samoan-American raised in Orange County, California, by a U.S. Marine veteran father and a devoted Christian mother, Faatuiese leads with deeply rooted values of discipline, integrity, and community.</p>
                    <p className='mb-[14.4px]'>With a hands-on approach to leadership, he is actively involved in the company's day-to-day operations, ensuring that TRUalert consistently delivers on its mission to enhance safety and security. As the sole investor, Faatuiese brings not only financial commitment but also a strong personal conviction to the company's vision. His unwavering dedication and entrepreneurial drive continue to guide TRUalert's growth and impact in the safety technology sector.</p>
                  </div>
                </div>
                <div className='flex flex-col gap-5'>
                  <h3 className='text-lg md:text-2xl font-bold'>Raymond Leuta</h3>
                  <h4 className='text-lg font-bold'>Co-Founder & Security Operations Advisor</h4>
                  <div className='font-light tracking-wide'>
                    <p className='mb-[14.4px]'>Raymond Leuta is the Co-Founder and Security Operations Advisor, bringing over 30 years of experience in the private security industry. A licensed security officer and certified trainer, Raymond has built a career on excellence in security personnel management, risk assessment, and tactical operations. He has worked alongside local police departments in various cities, strengthening public-private coordination and enhancing emergency response strategies.</p>
                    <p className='mb-[14.4px]'>Raymond serves as the key liaison between the company and the security patrol agencies that respond to subscriber alerts. His expertise in risk assessment and field operations ensures TRUalert's services are both proactive and seamlessly aligned with industry best practices, delivering dependable, professional protection to every customer.</p>
                  </div>
                </div>
                <div className='flex flex-col gap-5'>
                  <h3 className='text-lg md:text-2xl font-bold'>Brandon Delijani</h3>
                  <h4 className='text-lg font-bold'>In-House Counsel & Compliance Advisor</h4>
                  <div className='font-light tracking-wide'>
                    <p className='mb-[14.4px]'>Brandon Delijani serves as TRUalert's In-House Counsel and Compliance Advisor, overseeing the company's legal and regulatory framework. With a sharp legal mind and meticulous attention to detail, Brandon manages all contractual matters and ensures that TRUalert remains fully compliant with industry regulations and legal standards. His expertise provides critical protection for both the company and its subscribers, laying a strong foundation of trust, accountability, and sustainable growth.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className='px-5 md:px-10 w-full bg-[#141414]'>
            <div className='flex flex-col justify-center items-center gap-5 mx-auto lg:max-w-[1280px]'>
              <div className='relative flex flex-col justify-center items-center gap-5 md:gap-10 py-10 md:py-20 lg:px-20 lg:py-37.5 text-center'>
                {/* Background with filter applied */}
                <div
                  className='absolute inset-0 bg-cover bg-center'
                  style={{
                    backgroundImage: "url('/BG.svg')",
                    filter: 'invert(100%) brightness(10.18) contrast(1.5) saturate(0.6) hue-rotate(180deg) invert(100%) brightness(0.1)',
                  }}
                />

                {/* Fade overlay on all four sides */}
                <div
                  className='absolute inset-0'
                  style={{
                    background: `
              linear-gradient(to right, #141414 0%, transparent 15%, transparent 85%, #141414 100%),
              linear-gradient(to bottom, #141414 0%, transparent 15%, transparent 85%, #141414 100%)
            `,
                    zIndex: 1
                  }}
                />

                {/* Content without filter interference */}
                <h2 className='relative text-[26px]/7 md:text-[38px]/11 lg:text-5xl/16 font-bold text-[#EDEDED] z-10'>
                  Together, this team is perfectly positioned to lead TRUalert with a unique blend of experience, dedication, and expertise.
                </h2>
                <p className='relative text-lg mb-[14.4px] text-[#EDEDED] font-light md:w-[74%] tracking-wide z-10'>
                  Their combined strengths ensure that TRUalert not only meets the highest standards of security but also resonates deeply with the communities it serves.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className='px-5 py-10 md:py-0 md:px-10 lg:px-20 w-full bg-[#1A1A1A]'>
            <div className='flex flex-col justify-center items-center gap-5 md:py-20 bg-bottom bg-no-repeat'
              style={{ backgroundImage: "url('/Union-1.svg')" }}>
              {/* Header and Content */}
              <div className='flex flex-col justify-center items-center gap-5 mx-auto lg:max-w-[800px]'>
                <div className='w-full xl:w-[66%] text-center'>
                  <h2 className='text-[28px] md:text-[38px]/11 xl:text-5xl/16 font-bold'>Trusted Professionals. <span className='text-[#FF0F0F]'>Proven Protection.</span></h2>
                </div>
                <div className='flex flex-row flex-wrap lg:flex-nowrap gap-5 lg:gap-10 lg:mt-6 tracking-wide font-light text-[#EDEDED]'>
                  <div className='flex flex-col gap-5 lg:flex-1'>
                    <p className='mb-[14.4px]'>At TRUalert, your safety is our top priority. That's why we've partnered with Noonlight, a trusted emergency response provider that connects users with certified dispatchers trained to handle urgent situations—quickly, discreetly, and professionally.</p>
                    <p className='mb-[14.4px]'>With just one tap, you're connected to real human support. Noonlight dispatchers are trained to assess emergencies, communicate through SMS and calls, and coordinate the appropriate response, whether that means sending police, fire, or medical help.</p>
                  </div>
                  <div className='flex flex-col gap-5 lg:flex-1'>
                    <p className='mb-[14.4px]'>There's no live tracking, no need for guards, and no complicated systems—just real help, when and where you need it.</p>
                    <p className='mb-[14.4px]'>TRUalert replaces traditional patrols with modern, efficient response you can rely on. It's safety, reimagined for everyday people—because peace of mind shouldn't be a luxury.</p>
                  </div>
                </div>
              </div>
              {/* Gallery Photos */}
              <div className='flex flex-row flex-wrap lg:flex-nowrap justify-evenly md:justify-center items-center gap-5 md:gap-7.5 w-full p-2.5'>
                <div className='md:pt-22.5'>
                  <img className='w-[200px] h-[230px] lg:w-[286px] lg:h-[385px] rounded-[20px] object-cover object-center md:mt-22.5' src="remove-2-223x300.png" alt="" />
                </div>
                <div>
                  <img className='w-[200px] h-[230px] lg:w-[286px] lg:h-[385px] rounded-[20px] object-cover object-center  md:mt-22.5' src="/Layer-0-3-223x300.png" alt="" />
                </div>
                <div className='md:pt-22.5'>
                  <img className='w-[200px] h-[230px] lg:w-[286px] lg:h-[385px] rounded-[20px] object-cover object-center md:mt-22.5' src="remove-1-223x300.png" alt="" />
                </div>
                <div>
                  <img className='w-[200px] h-[230px] lg:w-[286px] lg:h-[385px] object-cover object-center rounded-[20px] md:mt-22.5' src="/Layer-0-2-768x372.png" alt="" />
                </div>
                <div className='md:pt-22.5'>
                  <img className='w-[200px] h-[230px] lg:w-[286px] lg:h-[385px] object-cover object-center rounded-[20px] md:mt-22.5' src="/Layer-0-4.png" alt="" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className='px-5 md:px-10 lg:px-35 bg-contain lg:bg-cover bg-no-repeat bg-top lg:bg-center w-auto h-[550px] lg:h-[500px] lg:min-h-[800px]'
            style={{ backgroundImage: "url('/Map.svg')" }}>
            <div className='lg:pb-22.5 lg:pt-20 h-full'>
              <div className='flex flex-col justify-center lg:justify-end items-start gap-5 h-full mx-auto max-w-[1280px]'>
                <div className='flex flex-col justify-center gap-5 lg:w-[526px] lg:p-2.5'>
                  <h2 className='text-[28px] md:text-[38px] lg:text-5xl font-bold'>Areas Served</h2>
                  <div className='font-light tracking-normal lg:tracking-wide text-[#EDEDED]'>
                    <p className='mb-[14.4px]'>Orange County, California, is a region of stunning beaches and vibrant communities, but rising crime rates have begun to impact the sense of security many residents once enjoyed.</p>
                    <p className='mb-[14.4px]'>As the area faces these growing challenges, TRUalert offers a solution, empowering locals with reliable security services to help protect their homes and neighborhoods while preserving the quality of life they cherish. Here are all the areas we serve today.</p>
                  </div>
                  <div className='h-full'>
                    <button className='px-6 py-3 bg-[#FF0F0F] font-semibold rounded-md text-[15px] text-[#EDEDED]' >
                      <a href="https://trualert.com/service-areas">
                        View All Locations
                      </a>
                    </button>
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