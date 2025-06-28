import React, { useState } from 'react'

function navigation() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div>
      {/* Desktop Navigation */}
      <div className='hidden lg:block items-center mx-20 w-auto font-sans font-medium'>
        <section className='flex justify-between items-center mx-auto max-w-[1280px] py-8'>
          <div className='flex items-center gap-2'>
            <a href="/">
            <img className='w-12' src="https://trualert.com/wp-content/uploads/2024/08/LogoMark-Dark-Mode.svg" alt="Trualert Logo" />
            </a>
            <a href="/">
            <img className='w-32 h-auto' src="https://trualert.com/wp-content/uploads/2024/08/Wordmark-Dark-Mode.svg" alt="Trualert Text" />
            </a>
          </div>
          <nav>
            <div className='flex text-md'>
              <a className='mx-1.5 p-2 hover:text-[#FF0F0F] transition ease-in-out duration-500' href="/about">About</a>
              <a className='mx-1.5 p-2 hover:text-[#FF0F0F] transition ease-in-out duration-500' href="/blogs">Blogs</a>
              <a className='mx-1.5 p-2 hover:text-[#FF0F0F] transition ease-in-out duration-500' href="/product">Product</a>
              <a className='mx-1.5 p-2 hover:text-[#FF0F0F] transition ease-in-out duration-500' href="/pricing">Pricing</a>
              <a className='mx-1.5 p-2 hover:text-[#FF0F0F] transition ease-in-out duration-500' href="/support">Support</a>
            </div>
          </nav>
          <div>
            <button className='bg-[#920A0A] text-white text-[15px] px-6 py-2 rounded-md hover:bg-[#920a0a] transition duration-1000'>
              <a href="/signup">Sign Up</a>
            </button>
          </div>
        </section>
      </div>
      {/* Mobile Navigation */}
      <div className='flex lg:hidden w-full px-5 md:px-10 relative'>
        <section className='flex flex-row justify-between items-center py-7.5 w-full'>
          <div>
            <a className='flex items-center gap-1.5 md:gap-5' href="/">
              <img className='w-[34px] md:w-[48px] h-auto' src="https://trualert.com/wp-content/uploads/2024/08/LogoMark-Dark-Mode.svg" alt="Trualert Logo" />
              <img className='w-[90px] md:w-[130px] h-auto' src="https://trualert.com/wp-content/uploads/2024/08/Wordmark-Dark-Mode.svg" alt="Trualert Text" />
            </a>
          </div>
          <div className='p-1.5'>
            <button onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
              {menuOpen ? (
                // X icon
                <svg xmlns="http://www.w3.org/2000/svg" width="36px" height="36px" fill="#FFFFFF" viewBox="0 0 24 24">
                  <path d="M18.3 5.71a1 1 0 0 0-1.41 0L12 10.59 7.11 5.7A1 1 0 0 0 5.7 7.11L10.59 12l-4.89 4.89a1 1 0 1 0 1.41 1.41L12 13.41l4.89 4.89a1 1 0 0 0 1.41-1.41L13.41 12l4.89-4.89a1 1 0 0 0 0-1.4z" />
                </svg>
              ) : (
                // Hamburger icon
                <svg xmlns="http://www.w3.org/2000/svg" height="36px" viewBox="0 -960 960 960" width="36px" fill="#FFFFFF">
                  <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" />
                </svg>
              )}
            </button>
          </div>
        </section>

        <div className={`absolute left-0 right-0 mt-23 bg-[#292929] rounded-xs overflow-hidden transition-all duration-500 ${menuOpen ? 'max-h-80' : 'max-h-0'}`}>
          <nav>
            <a className={`block py-2.5 px-5 hover:bg-[#3F444B] transition-all duration-300 ${menuOpen ? 'translate-y-0 opacity-100' : '-translate-y-4 opacity-0'}`}
              style={{ transitionDelay: '0ms' }} href="/about" onClick={() => setMenuOpen(false)}>About</a>
            <a className={`block py-2.5 px-5 hover:bg-[#3F444B] transition-all duration-300 ${menuOpen ? 'translate-y-0 opacity-100' : '-translate-y-4 opacity-0'}`}
              style={{ transitionDelay: '80ms' }} href="/blogs" onClick={() => setMenuOpen(false)}>Blogs</a>
            <a className={`block py-2.5 px-5 hover:bg-[#3F444B] transition-all duration-300 ${menuOpen ? 'translate-y-0 opacity-100' : '-translate-y-4 opacity-0'}`}
              style={{ transitionDelay: '160ms' }} href="/product" onClick={() => setMenuOpen(false)}>Product</a>
            <a className={`block py-2.5 px-5 hover:bg-[#3F444B] transition-all duration-300 ${menuOpen ? 'translate-y-0 opacity-100' : '-translate-y-4 opacity-0'}`}
              style={{ transitionDelay: '240ms' }} href="/pricing" onClick={() => setMenuOpen(false)}>Pricing</a>
            <a className={`block py-2.5 px-5 hover:bg-[#3F444B] transition-all duration-300 ${menuOpen ? 'translate-y-0 opacity-100' : '-translate-y-4 opacity-0'}`}
              style={{ transitionDelay: '320ms' }} href="/support" onClick={() => setMenuOpen(false)}>Support</a>
          </nav>
        </div>
      </div>
    </div>
  )
}

export default navigation