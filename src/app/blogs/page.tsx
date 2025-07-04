'use client'
import React from 'react'
import Navigation from '@/components/navigation'
import Footer from '@/components/footer'

import NavBG from '@/components/nav-bg'
import BlogCard from '@/components/BlogsCard'
import BlogsCardData from '@/components/BlogsCardData'

function page() {
  return (
    <>
      <Navigation />
      <div>

        <section>
          <NavBG />
          <div className='flex flex-col justify-center items-center pt-[31px] pb-16 mx-auto max-w-[1140px]'>
            <div className='mb-9'>
              <h1 className='text-[40px] font-bold'>Blogs</h1>
            </div>
            <div className='flex flex-row justify-center items-center gap-5 mb-16'>
              <div>
                <button className='text-white text-sm bg-[#FF0F0F] border-[#FF0F0F] rounded-full px-6 py-2.5'>
                  <a href="">ALL</a>
                </button>
              </div>
              <div>
                <button className='text-white text-sm border-[#FF0F0F] border-1 rounded-full px-6 py-2.5'>
                  <a href="">BLOG</a>
                </button>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {BlogsCardData.map((card, idx) => (
                <BlogCard
                  key={idx}
                  img={card.img}
                  category={card.category}
                  title={card.title}
                  description={card.description}
                  author={card.author}
                />
              ))}
            </div>
          </div>
        </section>

      </div>
      <Footer />
    </>
  )
}

export default page