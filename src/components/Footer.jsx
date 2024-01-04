import React from 'react'
import { MdLocationPin, MdMail } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";
import { FaFacebookF, FaTwitter, FaLinkedin } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";

const Footer = () => {
  return (
    <div className='w-full relative px-12 pb-6 bg-black text-white'>
      <div className="pt-40 grid grid-cols-4">
        <div className='p-4'>
          <h5 className='text-xl font-bold mb-3'>Cars</h5>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore laboriosam minus quasi dicta aliquam consectetur modi facilis id, recusandae beatae velit quas voluptatum fugit.</p>
        </div>
        <div className='p-4'>
          <h5 className='text-xl font-bold mb-3'>Categories</h5>
          <ul className='list-disc list-inside'>
            <li>Home</li>
            <li>About</li>
            <li>Rental Deals</li>
            <li>How it works</li>
            <li>Contact</li>
          </ul>
        </div>
        <div className='p-4'>
          <h5 className='text-xl font-bold mb-3'>Contacts</h5>
          <ul>
            <li className='flex gap-4 items-center mb-2'>
              <MdLocationPin />
              <p>Bacoor Cavite Philippines</p>
            </li>
            <li className='flex gap-4 items-center mb-2'>
              <FaPhone />
              <p>+63 9876543210</p>
            </li>
            <li className='flex gap-4 items-center mb-2'>
              <FaPhone />
              <p>+63 9876543210</p>
            </li>
            <li className='flex gap-4 items-center mb-2'>
              <MdMail />
              <p>Carrental@gmail.com</p>
            </li>
          </ul>
        </div>
        <div className='p-4'>
          <h5 className='text-xl font-bold mb-3'>Help</h5>
          <ul className='list-disc list-inside mb-3'>
            <li>Customer Support</li>
            <li>Terms & Conditions</li>
            <li>Privacy Policy</li>
          </ul>
          <h5 className='text-xl font-bold mb-3'>Follow Us</h5>
          <div className='flex gap-4 items-center'>
            <div className='p-2 bg-white rounded-full'><FaFacebookF className='text-black'/></div>
            <div className='p-2 bg-white rounded-full'><FaTwitter className='text-black'/></div>
            <div className='p-2 bg-white rounded-full'><RiInstagramFill className='text-black'/></div>
            <div className='p-2 bg-white rounded-full'><FaLinkedin className='text-black'/></div>
          </div>
        </div>
      </div>

      <div className='absolute w-[900px] -top-[30%] right-1/4 left-1/4 bg-red-200 rounded-md flex p-10 justify-center items-center'>
        <div>
            <h4 className='text-3xl font-bold mb-3'>Do you have any questions?</h4>
            <p className='text-center mb-3 text-lg'>Put your email address and get started</p>
            <div className='flex items-center bg-white px-2 py-3 gap-4 rounded-md'>
              <input type="text " className='px-3 py-2 border-transparent outline-none w-full' placeholder='Enter your email'/>
              <button className='bg-red-500 text-white px-4 py-2 rounded'>Submit</button>
            </div>
        </div>
        
      </div>

    </div>
  )
}

export default Footer
