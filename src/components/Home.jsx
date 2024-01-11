import React from 'react'
import CarHome from '../assets/home-bg.png'
const Home = () => {
  return (
    <div className='w-full h-screen bg-[#f5f5f5]'>
      <div className="max-w-[1400px] mx-auto flex justify-center md:justify-start items-center h-full">
        <div className='relative z-1'>
            <h1 className='text-5xl md:text-7xl font-bold mb-5'>Drive First Class,</h1>
            <h1 className='text-5xl md:text-7xl font-bold mb-5'>Pay Economy</h1>
            <p className='max-w-[440px] mb-5 opacity-70'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo quis labore dolor iure corporis nulla, ducimus voluptatem ad porro fugiat.</p>
            <div className='flex gap-4'>
                <button className='bg-red-500 py-2 px-8 text-white rounded'>Book Now</button>
                <button className='underline underline-offset-4 text-red-500'>See All Cars</button>
            </div>
        </div>
        <div className="absolute md:right-12 bottom-12 max-w-[1000px]">
            <img src={CarHome} alt="CarBG" className='object-cover w-full'/>
        </div>

        <div className='absolute -bottom-24 md:right-1/4 md:left-1/4 md:-bottom-16 w-full md:w-1/2 bg-white shadow-lg md:rounded-lg py-5 px-2 md:p-10 '>
          <h3 className='text-xl mb-2'>Looking for a car?</h3>
          <div className="grid grid-cols-3 md:grid-cols-4 gap-1 md:gap-4 items-center">
            <div>
              <div className='flex flex-col justify-between'>
                <div className=''>
                  <select name="" id="" className='w-full border text-sm md:text-base border-gray-300 px-4 py-2 rounded-md'>
                    <option value="">Select Brand</option>
                    <option value="">Brand 1</option>
                    <option value="">Brand 2</option>
                    <option value="">Brand 3</option>
                  </select>
                </div>
              </div>
            </div>

            <div>
              <div className='flex flex-col justify-between'>
                <div className=''>
                  <select name="" id="" className='w-full border text-sm md:text-base border-gray-300 px-4 py-2 rounded-md'>
                    <option value="">Select Model</option>
                    <option value="">Model 1</option>
                    <option value="">Model 2</option>
                    <option value="">Model 3</option>
                  </select>
                </div>
              </div>
            </div>

            <div>
              <div className='flex flex-col justify-between'>
                <div className=''>
                  <select name="" id="" className='w-full border text-sm md:text-base border-gray-300 px-4 py-2 rounded-md'>
                    <option value="">Select Year</option>
                    <option value="">Year 1</option>
                    <option value="">Year 2</option>
                    <option value="">Year 3</option>
                  </select>
                </div>
              </div>
            </div>

            <div className='text-center col-span-3 md:col-span-1'>
              <button className='w-full text-sm md:text-base bg-red-500 text-white py-2 px-8 rounded-md'>Search vehicle</button>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Home
// w-[1050px] h-[600px]