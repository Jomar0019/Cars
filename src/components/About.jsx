import React from 'react'
import Cars from '../assets/about-img.png'
import { FaCircleCheck } from "react-icons/fa6";

const About = () => {
  return (
    <div className='w-full h-screen bg-white p-4'>
        <div className="relative max-w-[1400px] mx-auto flex justify-center items-center gap-5 h-full">
          <div className='absolute -bottom-10 md:bottom-0 md:relative basis-1/2'>
            <img src={Cars} alt="" className='w-[500px] md:w-[750px] object-contain'/>
          </div>
          <div className='w-full md:basis-1/2'>
            <h4 className='font-bold text-xl md:text-2xl text-red-500 border-b-2 border-b-red-500 inline'>About Us</h4>
            <h2 className='text-3xl md:text-6xl font-bold mt-3 md:mt-6'>Biggest Car Dealer </h2>
            <h2 className='text-3xl md:text-6xl font-bold my-2 md:my-6'>Marketplace</h2>
            <p className='text-black/90 text-sm md:text-base'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates, blanditiis? Hic, delectus? Debitis animi officiis labore ipsam unde hic aspernatur! Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, cum.</p>
            <ul className='my-6'>
              <li className='flex gap-3 items-center'>
                <FaCircleCheck size={24} className='text-red-500'/>
                <p className='text-sm md:text-base'>Lorem ipsum dolor sit amet consec adipisi elit ab.</p>
              </li>
              <li className='flex gap-3 items-center my-3'>
                <FaCircleCheck size={24} className='text-red-500'/>
                <p className='text-sm md:text-base'>Lorem ipsum dolor sit amet consectetur umque, ab.</p>
              </li>
              <li className='flex gap-3 items-center'>
                <FaCircleCheck size={24} className='text-red-500'/>
                <p className='text-sm md:text-base'>Lorem ipsum dolor sit amet consectetur umque, ab.</p>
              </li>
            </ul>
            <button className='px-8 py-2 bg-red-500 text-white rounded-md text-sm md:text-base'>Rent Now</button>
          </div>
        </div>

    </div>
  )
}

export default About
