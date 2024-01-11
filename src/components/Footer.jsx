import React from 'react'
import { MdLocationPin, MdMail } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";
import { FaFacebookF, FaTwitter, FaLinkedin } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";

const Footer = () => {
  return (
    <div className='w-full relative md:px-12 pb-6 bg-[#1c1d1e] text-white'>
      <div className="pt-40 grid grid-cols-1 md:grid-cols-4">
        <div className='p-4 text-center'>
          <h5 className='text-2xl font-bold mb-3 '>Cars</h5>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore laboriosam minus quasi dicta aliquam consectetur modi facilis id, recusandae beatae velit quas voluptatum fugit.</p>
        </div>
        <div className='p-4 text-center md:text-start'>
          <h5 className='text-xl font-bold mb-3'>Categories</h5>
          <ul className='md:list-disc list-inside'>
            <li className='cursor-pointer hover:border-b hover:inline'>Home</li>
            <li className='cursor-pointer hover:border-b hover:inline'>About</li>
            <li className='cursor-pointer hover:border-b hover:inline'>Rental Deals</li>
            <li className='cursor-pointer hover:border-b hover:inline'>How it works</li>
            <li className='cursor-pointer hover:border-b hover:inline'>Contact</li>
          </ul>
        </div>
        <div className='p-4 text-center md:text-start'>
          <h5 className='text-xl font-bold mb-3'>Contacts</h5>
          <ul>
            <li className='flex gap-4 items-center justify-center md:justify-start mb-2'>
              <MdLocationPin />
              <p>Bacoor Cavite Philippines</p>
            </li>
            <li className='flex gap-4 items-center justify-center md:justify-start mb-2'>
              <FaPhone />
              <p>+63 9876543210</p>
            </li>
            <li className='flex gap-4 items-center justify-center md:justify-start mb-2'>
              <FaPhone />
              <p>+63 9876543210</p>
            </li>
            <li className='flex gap-4 items-center justify-center md:justify-start mb-2'>
              <MdMail />
              <p>Carrental@gmail.com</p>
            </li>
          </ul>
        </div>
        <div className='p-4 text-center md:text-start'>
          <h5 className='text-xl font-bold mb-3'>Help</h5>
          <ul className='md:list-disc list-inside mb-3'>
            <li className='cursor-pointer hover:border-b hover:inline'>Customer Support</li>
            <li className='cursor-pointer hover:border-b hover:inline'>Terms & Conditions</li>
            <li className='cursor-pointer hover:border-b hover:inline'>Privacy Policy</li>
          </ul>
          <h5 className='text-xl font-bold mb-3'>Follow Us</h5>
          <div className='flex gap-4 items-center justify-center md:justify-start'>
            <div className='p-2 bg-white rounded-full cursor-pointer'><FaFacebookF className='text-black'/></div>
            <div className='p-2 bg-white rounded-full cursor-pointer'><FaTwitter className='text-black'/></div>
            <div className='p-2 bg-white rounded-full cursor-pointer'><RiInstagramFill className='text-black'/></div>
            <div className='p-2 bg-white rounded-full cursor-pointer'><FaLinkedin className='text-black'/></div>
          </div>
        </div>
      </div>

      <div className='absolute w-[90%] md:w-[900px] top-5 left-6 md:-top-[30%] md:right-1/4 md:left-1/4 bg-red-400 rounded-md flex p-5 md:p-10 justify-center items-center'>
        <div>
            <h4 className='text-xl md:text-3xl text-center font-bold mb-1 md:mb-3'>Do you have any questions?</h4>
            <p className='text-center mb-1 md:mb-3 md:text-lg'>Put your email address and get started</p>
            <div className='flex items-center bg-white px-2 py-1 md:py-3 gap-4 rounded-md'>
              <input type="text " className='px-3 py-2 border-transparent outline-none w-full' placeholder='Enter your email'/>
              <button className='bg-red-500 text-white px-4 py-1 md:py-2 rounded'>Submit</button>
            </div>
        </div>
        
      </div>

    </div>
  )
}

export default Footer
