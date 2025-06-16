import React from 'react'

function navigation() {
  return (
    <div className='mx-20'>
      <section className='flex justify-evenly items-center gap-4'>
        <div className='flex items-center gap-2'>
          <img className='w-12' src="https://trualert.com/wp-content/uploads/2024/08/LogoMark-Dark-Mode.svg" alt="Trualert Logo" />
          <img className='w-32 h-auto' src="https://trualert.com/wp-content/uploads/2024/08/Wordmark-Dark-Mode.svg" alt="Trualert Text" />
        </div>
        <nav>
          <ul className='flex gap-6 text-md '>
            <li className='mx-1.5 p-2'><a href="/about">About</a></li>
            <li><a href="/blogs">Blogs</a></li>
            <li><a href="/product">Product</a></li>
            <li><a href="/pricing">Pricing</a></li>
            <li><a href="/support">Support</a></li>
          </ul>
        </nav>
        <div>
          <button className='bg-red-600 text-white px-6 py-2 rounded-lg hover:bg-red-700 transition duration-300'>
            <a href="/signup">Sign up</a>
          </button>
        </div>
      </section>
    </div>
  )
}

export default navigation