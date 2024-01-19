import React, { useState } from 'react'
import { RxHamburgerMenu } from "react-icons/rx";
import { MdClose } from "react-icons/md";

const Nav = () => {

  const [ nav, setNav ] = useState(false);

  const handeNav = () => {
    setNav(!nav);
  }


  return (
    <div className='w-full h-[70px] p-4 z-20 shadow-md fixed bg-white'>
      <div className="max-w-[1400px] mx-auto flex justify-between items-center">
        <div className=''>
          <h1 className='text-red-500 text-3xl font-bold'>Cars</h1>
        </div>

        {/* Web view  */}
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


        {/* Mobile View  */}
        <div className='md:hidden'>
            <RxHamburgerMenu size={24} className='cursor-pointer' onClick={handeNav}/>
        </div>

        
        <div className={nav ? 'transform absolute top-0 left-0 w-full h-screen bg-white ' : 'hidden'}>
          <div className='flex justify-between items-center p-4'>
            <h1 className='text-red-500 text-3xl font-bold hover:text-black'>Cars</h1>
            <MdClose size={28} onClick={handeNav} className='cursor-pointer'/>
          </div>
          <div className='px-4 py-12'>
            <ul className='flex flex-col justify-start gap-8'>
              <li className='text-xl'>Home</li>
              <li className='text-xl'>About</li>
              <li className='text-xl'>Rental Deals</li>
              <li className='text-xl'>How it work</li>
              <li className='text-xl'>Contact</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Nav
