import React from 'react'
import Cars from '../assets/about-img.png'
import { FaCircleCheck } from "react-icons/fa6";

const About = () => {
  return (
    <div className='w-full h-screen bg-white'>
        <div className="w-[1400px] mx-auto flex justify-center items-center gap-5 h-full">
          <div className='basis-1/2'>
            <img src={Cars} alt="" className='max-w-[750px]'/>
          </div>
          <div className='basis-1/2'>
            <h4 className='font-bold text-2xl text-red-500 border-b-2 border-b-red-500 inline'>About Us</h4>
            <h2 className='text-6xl font-bold mt-6'>Biggest Car Dealer </h2>
            <h2 className='text-6xl font-bold my-6'>Marketplace</h2>
            <p className='text-black/90 '>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates, blanditiis? Hic, delectus? Debitis animi officiis labore ipsam unde hic aspernatur! Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, cum.</p>
            <ul className='my-6'>
              <li className='flex gap-3 items-center'>
                <FaCircleCheck size={24} className='text-red-500'/>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, ab.</p>
              </li>
              <li className='flex gap-3 items-center my-3'>
                <FaCircleCheck size={24} className='text-red-500'/>
                <p>Lorem ipsum dolor sit amet consectetur umque, ab.</p>
              </li>
              <li className='flex gap-3 items-center'>
                <FaCircleCheck size={24} className='text-red-500'/>
                <p>Lorem ipsum dolor sit amet.</p>
              </li>
            </ul>
            <button className='px-8 py-2 bg-red-500 text-white rounded-md'>Rent Now</button>
          </div>
        </div>

    </div>
  )
}

export default About
