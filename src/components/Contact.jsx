import React from 'react'
import Chat from '../assets/Icons/online-chat.png'
import Location from '../assets/Icons/pin.png'
import Phone from '../assets/Icons/phone-call.png'

const Contact = () => {
  return (
    <div className='w-full h-screen'>
      <div className="max-w-[1400px] mx-auto flex flex-col justify-center h-screen">
        <h5 className='text-left ml-4 text-2xl font-bold text-red-500'>Contact Us</h5>
        <div className='w-full flex flex-col md:flex-row'>
            <div className="basis-1/2 p-3 md:p-4">
                <h4 className='text-xl md:text-3xl font-bold mb-3'>Our branch office</h4>
                <p className='md:w-3/4'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor, quia perferendis? Dignissimos</p>
                <ul className='my-6 md:my-12'>
                    <li className='flex gap-4 justify-start items-center'>
                      <img src={Chat} alt="" className='w-10'/>
                      <div>
                        <h5 className='text-lg font-bold'>Message us</h5>
                        <p>Carrental@gmail.com</p>
                      </div>
                    </li>

                    <li className='flex gap-4 justify-start items-center my-6 md:my-12'>
                      <img src={Location} alt="" className='w-10'/>
                      <div>
                        <h5 className='text-lg font-bold'>Office Branch</h5>
                        <p>Bacoor Cavite Philippines</p>
                      </div>
                    </li>

                    <li className='flex gap-4 justify-start items-center'>
                      <img src={Phone} alt="" className='w-10'/>
                      <div>
                        <h5 className='text-lg font-bold'>Call us</h5>
                        <p>+63 9876543210</p>
                        <p>+63 9876543210</p>
                      </div>
                    </li>
                </ul>
            </div>
            <div className="md:basis-1/2 p-4">
                <input type="text" className='w-full md:w-3/4 border px-3 py-2 rounded border-[#c1c1c1]' placeholder='Name'/>
                <input type="text" className='w-full md:w-3/4 border px-3 py-2 rounded border-[#c1c1c1] my-2' placeholder='example@gmail.com'/>
                <div className='flex w-full md:w-3/4 mb-2 gap-2'>
                  <input type="text" className='w-2/12 border px-3 py-2 rounded border-[#c1c1c1] text-center' placeholder='+63'/>
                  <input type="text" className='w-10/12 border px-3 py-2 rounded border-[#c1c1c1]' placeholder='9912345678'/>
                </div>
                <textarea name="" id="" cols="20" rows="6" className='block w-full md:w-3/4 mb-2 border border-[#c1c1c1]  rounded px-3 py-2' placeholder='Your Message...'></textarea>
                <button className='px-8 py-2 bg-red-500 text-white rounded'>Submit</button>
            </div>
        </div>
        
      </div>
    </div>
  )
}

export default Contact
