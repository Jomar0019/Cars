import React from 'react'
import BP from '../assets/Icons/best-price.png'
import User from '../assets/Icons/user.png'
import Ship from '../assets/Icons/shipping.png'
import CS from '../assets/Icons/technical-support.png'
import WCU from '../assets/Cars/dodge.jpg'

const Why = () => {
  return (
    <div className='w-full h-screen'>
      <div className="max-w-[1400px] mx-auto flex justify-center items-center h-full ">
        <div className='basis-1/2'>
          <h4 className='font-bold text-2xl text-red-500 border-b-2 border-b-red-500 inline'>Why choose us</h4>
          <h2 className='text-5xl font-bold mt-6 text-[#303030]'>We offer the best experience</h2>
          <h2 className='text-5xl font-bold mt-6 text-[#303030]'>with our rental deals</h2>
          <ul className='my-6 p-4'>

            <li className='flex items-center gap-4 mb-3'>
              <img src={BP} alt="" className='w-12 border border-red-500 p-2 rounded-md' />
              <div>
                <h5 className='text-xl font-bold mb-1 text-[#303030]'>Best Price Guaranteed</h5>
                <p className='w-3/4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat impedit porro fuga a nam.</p>
              </div>
            </li>

            <li className='flex items-center gap-4 mb-3 text-[#303030]'>
              <img src={User} alt="" className='w-12 border border-red-500 p-2 rounded-md ' />
              <div>
                <h5 className='text-xl font-bold mb-1 text-[#303030]'>Experience Driver</h5>
                <p className='w-3/4 text-[#303030]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat impedit porro fuga a nam.</p>
              </div>
            </li>

            <li className='flex items-center gap-4 mb-3'>
              <img src={Ship} alt="" className='w-12 border border-red-500 p-2 rounded-md ' />
              <div>
                <h5 className='text-xl font-bold mb-1 text-[#303030]'>Car Delivery</h5>
                <p className='w-3/4 text-[#303030]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat impedit porro fuga a nam.</p>
              </div>
            </li>

            <li className='flex items-center gap-4 mb-3'>
              <img src={CS} alt="" className='w-12 border border-red-500 p-2 rounded-md ' />
              <div>
                <h5 className='text-xl font-bold mb-1 text-[#303030]'>24/7 Technical Support</h5>
                <p className='w-3/4 text-[#303030]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat impedit porro fuga a nam.</p>
              </div>
            </li>

          </ul>
        </div>
        <div className='basis-1/2'>
          <img src={WCU} alt="" className='max-w-[700px]' />
        </div>
      </div>
    </div>
  )
}

export default Why