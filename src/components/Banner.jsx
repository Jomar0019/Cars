import React from 'react'
import bgCar from '../assets/Cars/lambo4.png'

const Banner = () => {
  return (
    <div className='relative overflow-hidden w-full flex justify-start items-center bg-black/80 h-[200px] md:h-[400px]'>
      <div className='ml-3 md:ml-12 z-10'>
        <h5 className='text-white border-b border-white inline text-xl md:text-2xl font-bold'>Limited Offer</h5>
        <h4 className='text-2xl md:text-5xl font-bold md:mb-3 mt-3 md:mt-6 text-white'><span className='text-red-600'>50%</span> off for first</h4>
        <h4 className='text-2xl md:text-5xl font-bold mb-3 text-white' >time rent a car</h4>
        <button className='bg-red-500 text-white rounded-md px-4 py-2 md:mt-3 text-sm md:text-base'>Get started</button>
      </div>
      <div className="absolute right-0 opacity-40 md:opacity-100">
        <img src={bgCar} alt="" className='object-contain z-0 w-[250px] md:w-[750px]'/>
      </div>
    </div>
  )
}

export default Banner
