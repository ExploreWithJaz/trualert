'use client'
import React, { useState } from 'react'
import Navigation from '@/components/navigation'
import Footer from '@/components/footer'
import { useScrollToTop } from '@/components/useScrollToTop'

import NavBG from '@/components/nav-bg'
import BlogCard from '@/components/BlogsCard'
import BlogsCardData from '@/components/BlogsCardData'

const BLOGS_PER_PAGE = 6

function page() {
  const [currentPage, setCurrentPage] = useState(1)
  const [selectedCategory, setSelectedCategory] = useState<'ALL' | 'BLOG'>('ALL')
  const scrollToTop = useScrollToTop({ duration: 600, behavior: 'smooth' })

  // Filter blogs based on selected category
  const filteredBlogs = selectedCategory === 'ALL'
    ? BlogsCardData
    : BlogsCardData.filter(blog => blog.category === selectedCategory)

  const totalPages = Math.ceil(filteredBlogs.length / BLOGS_PER_PAGE)
  const startIdx = (currentPage - 1) * BLOGS_PER_PAGE
  const endIdx = startIdx + BLOGS_PER_PAGE
  const currentBlogs = filteredBlogs.slice(startIdx, endIdx)

  const handlePrev = () => {
    setCurrentPage((prev) => {
      const newPage = Math.max(prev - 1, 1)
      if (newPage !== prev) scrollToTop()
      return newPage
    })
  }

  const handleNext = () => {
    setCurrentPage((prev) => {
      const newPage = Math.min(prev + 1, totalPages)
      if (newPage !== prev) scrollToTop()
      return newPage
    })
  }

  // Reset to page 1 when category changes
  React.useEffect(() => {
    setCurrentPage(1)
  }, [selectedCategory])

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
                <button
                  onClick={() => setSelectedCategory('ALL')}
                  className={`text-white text-sm rounded-full px-6 py-2.5 border-1
        ${selectedCategory === 'ALL'
                      ? 'bg-[#FF0F0F] border-[#FF0F0F]'
                      : 'bg-transparent border-[#FF0F0F]'
                    }`}
                >
                  ALL
                </button>
              </div>
              <div>
                <button
                  onClick={() => setSelectedCategory('BLOG')}
                  className={`text-white text-sm rounded-full px-6 py-2.5 border-1
        ${selectedCategory === 'BLOG'
                      ? 'bg-[#FF0F0F] border-[#FF0F0F]'
                      : 'bg-transparent border-[#FF0F0F]'
                    }`}
                >
                  BLOG
                </button>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-5 lg:px-0">
              {currentBlogs.map((card, idx) => (
                <BlogCard
                  key={startIdx + idx}
                  img={card.img}
                  category={card.category}
                  title={card.title}
                  description={card.description}
                  author={card.author}
                />
              ))}
            </div>

            {/* Pagination Controls */}
            <div className="flex justify-center items-center gap-4 mt-10">
              <button
                onClick={handlePrev}
                disabled={currentPage === 1}
                className="w-10 h-10 flex items-center justify-center rounded-lg border-1 border-[#FFFFFF] text-white disabled:opacity-50 mr-[37px]"
              >
                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#FFFFFF"><path d="M360-200 80-480l280-280 56 56-183 184h647v80H233l184 184-57 56Z" /></svg>
              </button>
              <div className="flex items-center gap-2">
                {Array.from({ length: totalPages }).map((_, i) => {
                  // Show first, last, current, and neighbors; ellipsis for gaps
                  const page = i + 1;
                  if (
                    page === 1 ||
                    page === totalPages ||
                    Math.abs(page - currentPage) <= 1
                  ) {
                    return (
                      <button
                        key={page}
                        onClick={() => setCurrentPage(page)}
                        className={`w-10 h-10 flex items-center justify-center rounded-lg px-4 py-2.5 ${page === currentPage
                          ? 'bg-[#FF0F0F] text-white'
                          : 'bg-transparent text-white'
                          }`}
                        disabled={page === currentPage}
                      >
                        {page}
                      </button>
                    );
                  }
                  // Ellipsis logic
                  if (
                    (page === currentPage - 2 && page > 1) ||
                    (page === currentPage + 2 && page < totalPages)
                  ) {
                    return (
                      <span key={page} className="px-1 text-white">
                        ...
                      </span>
                    );
                  }
                  return null;
                })}
              </div>
              <button
                onClick={handleNext}
                disabled={currentPage === totalPages}
                className="w-10 h-10 flex items-center justify-center rounded-lg border-1 border-[#FFFFFF] text-white disabled:opacity-50 ml-[37px]"
              >
                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#FFFFFF"><path d="m600-200-57-56 184-184H80v-80h647L544-704l56-56 280 280-280 280Z" /></svg>
              </button>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  )
}

export default page