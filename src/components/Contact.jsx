import React from 'react'
import Chat from '../assets/Icons/online-chat.png'
import Location from '../assets/Icons/pin.png'
import Phone from '../assets/Icons/phone-call.png'

const Contact = () => {
  return (
    <div className='w-full md:h-screen py-12 md:py-0'>
      <div className="max-w-[1400px] mx-auto flex flex-col justify-center h-screen">
        <h5 className='text-left ml-4 text-xl md:text-2xl font-bold text-red-500'>Contact Us</h5>
        <div className='w-full flex flex-col md:flex-row'>
            <div className="basis-1/2 px-4 md:p-4">
                <h4 className='text-lg md:text-3xl font-bold mb-1 md:mb-3'>Our branch office</h4>
                <p className='md:w-3/4 text-sm md:text-base'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor, quia perferendis? Dignissimos</p>
                <ul className='my-6 md:my-12'>
                    <li className='flex gap-4 justify-start items-center'>
                      <img src={Chat} alt="" className='w-8 md:w-10'/>
                      <div>
                        <h5 className='text-md md:text-lg font-bold'>Message us</h5>
                        <p className='text-sm md:text-base'>Carrental@gmail.com</p>
                      </div>
                    </li>

                    <li className='flex gap-4 justify-start items-center my-6 md:my-12'>
                      <img src={Location} alt="" className='w-8 md:w-10'/>
                      <div>
                        <h5 className='text-md md:text-lg font-bold'>Office Branch</h5>
                        <p className='text-sm md:text-base'>Bacoor Cavite Philippines</p>
                      </div>
                    </li>

                    <li className='flex gap-4 justify-start items-center'>
                      <img src={Phone} alt="" className='w-8 md:w-10'/>
                      <div>
                        <h5 className='text-md md:text-lg font-bold'>Call us</h5>
                        <p className='text-sm md:text-base'>+63 9876543210</p>
                        <p className='text-sm md:text-base'>+63 9876543210</p>
                      </div>
                    </li>
                </ul>
            </div>
            <div className="md:basis-1/2 p-4">
                <input type="text" className='w-full md:w-3/4 border px-3 py-2 rounded border-[#c1c1c1] text-sm md:text-base' placeholder='Name'/>
                <input type="text" className='w-full md:w-3/4 border px-3 py-2 rounded border-[#c1c1c1] my-2 text-sm md:text-base' placeholder='example@gmail.com'/>
                <div className='flex w-full md:w-3/4 mb-2 gap-2'>
                  <input type="text" className='w-2/12 border px-3 py-2 rounded border-[#c1c1c1] text-center text-sm md:text-base' placeholder='+63'/>
                  <input type="text" className='w-10/12 border px-3 py-2 rounded border-[#c1c1c1] text-sm md:text-base' placeholder='9912345678'/>
                </div>
                <textarea name="" id="" cols="20" rows="6" className='block w-full md:w-3/4 mb-2 border border-[#c1c1c1]  rounded px-3 py-2 text-sm md:text-base' placeholder='Your Message...'></textarea>
                <button className='px-8 py-2 bg-red-500 text-white rounded text-sm md:text-base'>Submit</button>
            </div>
        </div>
        
      </div>
    </div>
  )
}

export default Contact
