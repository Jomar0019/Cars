import React from 'react'
import BP from '../assets/Icons/best-price.png'
import User from '../assets/Icons/user.png'
import Ship from '../assets/Icons/shipping.png'
import CS from '../assets/Icons/technical-support.png'
import WCU from '../assets/Cars/dodge.png'

const Why = () => {
  return (
    <div className='w-full md:h-screen py-12 pb-36'>
      <div className="max-w-[1400px] mx-auto flex justify-center md:items-center h-full relative">
        <div className='md:basis-1/2 px-4 md:px-0'>
          <h4 className='font-bold text-xl md:text-2xl text-red-500 border-b-2 border-b-red-500 inline'>Why choose us</h4>
          <h2 className='text-3xl md:text-5xl font-bold mt-3 md:mt-6 text-[#303030]'>We offer the best experience</h2>
          <h2 className='text-3xl md:text-5xl font-bold md:mt-6 text-[#303030]'>with our rental deals</h2>
          <ul className='md:my-6 py-6 md:p-4'>

            <li className='flex items-start md:items-center gap-4 mb-3'>
              <img src={BP} alt="" className='w-10 md:w-12 border border-red-500 p-1 md:p-2 rounded-md' />
              <div>
                <h5 className='text-md md:text-xl font-bold md:mb-1 text-[#303030]'>Best Price Guaranteed</h5>
                <p className='md:w-3/4 text-sm md:text-base'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat impedit porro fuga a nam.</p>
              </div>
            </li>

            <li className='flex items-start md:items-center gap-4 mb-3 text-[#303030]'>
              <img src={User} alt="" className='w-10 md:w-12 border border-red-500 p-1 md:p-2 rounded-md ' />
              <div>
                <h5 className='text-md md:text-xl font-bold md:mb-1 text-[#303030]'>Experience Driver</h5>
                <p className='md:w-3/4 text-[#303030] text-sm md:text-base'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat impedit porro fuga a nam.</p>
              </div>
            </li>

            <li className='flex items-start md:items-center gap-4 mb-3'>
              <img src={Ship} alt="" className='w-10 md:w-12 border border-red-500 p-1 md:p-2 rounded-md ' />
              <div>
                <h5 className='text-md md:text-xl font-bold md:mb-1 text-[#303030]'>Car Delivery</h5>
                <p className='md:w-3/4 text-[#303030] text-sm md:text-base'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat impedit porro fuga a nam.</p>
              </div>
            </li>

            <li className='flex items-start md:items-center gap-4 mb-3'>
              <img src={CS} alt="" className='w-10 md:w-12 border border-red-500 p-1 md:p-2 rounded-md ' />
              <div>
                <h5 className='text-md md:text-xl font-bold mb-1 text-[#303030]'>24/7 Technical Support</h5>
                <p className='md:w-3/4 text-[#303030] text-sm md:text-base'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat impedit porro fuga a nam.</p>
              </div>
            </li>

          </ul>
        </div>
        <div className='absolute -bottom-36 md:bottom-0 md:relative basis-1/2'>
          <img src={WCU} alt="" className='md:w-[700px] w-[290px]' />
        </div>
      </div>
    </div>
  )
}

export default Why
