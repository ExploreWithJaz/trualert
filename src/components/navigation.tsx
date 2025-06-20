import React from 'react'

function navigation() {
  return (
    <div className='mx-20 w-auto font-sans font-medium'>
      <section className='flex justify-between items-center mx-60 py-8'>
        <div className='flex items-center gap-2'>
          <img className='w-12' src="https://trualert.com/wp-content/uploads/2024/08/LogoMark-Dark-Mode.svg" alt="Trualert Logo" />
          <img className='w-32 h-auto' src="https://trualert.com/wp-content/uploads/2024/08/Wordmark-Dark-Mode.svg" alt="Trualert Text" />
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
  )
}

export default navigation