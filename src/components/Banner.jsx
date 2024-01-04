import React from 'react'
import bgCar from '../assets/Cars/lambo4.png'

const Banner = () => {
  return (
    <div className='relative overflow-hidden w-full flex justify-start items-center bg-black/80 h-[400px]'>
      <div className='ml-12'>
        <h5 className='text-white border-b border-white inline text-2xl font-bold'>Limited Offer</h5>
        <h4 className='text-5xl font-bold mb-3 mt-6 text-white'><span className='text-red-500'>50%</span> off for first</h4>
        <h4 className='text-5xl font-bold mb-3 text-white' >time rent a car</h4>
        <button className='bg-red-500 text-white rounded-md px-4 py-2 mt-3'>Get started</button>
      </div>
      <div className="absolute right-0">
        <img src={bgCar} alt="" className='object-contain w-full h-[450px]'/>
      </div>
    </div>
  )
}

export default Banner
