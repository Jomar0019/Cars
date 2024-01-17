import React from 'react'

const Nav = () => {
  return (
    <div className='w-full h-[70px] p-4 z-20 shadow-md fixed bg-white'>
      <div className="max-w-[1400px] mx-auto flex justify-between items-center">
        <div className=''>
          <h1 className='text-red-500 text-3xl font-bold'>Cars</h1>
        </div>
        <div className='hidden md:flex'>
          <ul className='flex justify-around items-center gap-12 font-bold'>
            <li>Home</li>
            <li>About</li>
            <li>Rental Deals</li>
            <li>How it work</li>
            <li>Contact</li>
          </ul>
        </div>
        <div className='hidden md:flex gap-4'>
          <button className='px-8 py-2 bg-white text-red-500 border border-red-500 rounded'>Log In</button>
          <button className='px-8 py-2 bg-red-500 text-white rounded'>Sign Up</button>
        </div>
      </div>
    </div>
  )
}

export default Nav
