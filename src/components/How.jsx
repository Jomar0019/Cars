import React from 'react'
import CS from '../assets/Icons/cs.png'
import BP from '../assets/Icons/best-price.png'
import Loc from '../assets/Icons/location.png'
import Alfa from '../assets/Logo/Alfa-Romeo.png'
import Audi from '../assets/Logo/Audi.png'
import Bentley from '../assets/Logo/Bentley.png'
import Tesla from '../assets/Logo/Tesla.png'
import Dodge from '../assets/Logo/Dodge.png'
import Chev from '../assets/Logo/Chevrolet.png'
import BMW from '../assets/Logo/BMW.png'
import Lambo from '../assets/Logo/Lamborghini.png'

const How = () => {
  return (
    <div className='w-full h-screen bg-[#f5f5f5]'>
        <div className="flex justify-center items-center h-full">
            <div className='flex flex-col'>
                <div className='text-center'>
                    <h2 className='text-5xl font-bold'>How it work</h2>
                    <p className='w-1/2 mx-auto my-5'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint dolorem ipsa. Eligendi distinctio laboriosam!</p>
                </div>
                <div className="max-w-[1000px] mx-auto grid grid-cols-3 gap-6 mb-40">
                    <div className='flex flex-col justify-center items-center bg-white rounded-md shadow-md py-12'>
                
                        <div>
                            <img src={CS} alt="" className='w-18 mb-6' />
                        </div>
                        <div className='text-center'>
                            <h3 className='text-2xl font-bold mb-3'>Customer Support</h3>
                            <p className='w-3/4 mx-auto'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla neque fugit consectetur nam facilis eaque. Lorem ipsum dolor sit</p>
                        </div>

                    </div>

                    <div className='flex flex-col justify-center items-center bg-white rounded-md shadow-md py-12'>
                
                        <div>
                            <img src={BP} alt="" className='w-18 mb-6' />
                        </div>
                        <div className='text-center'>
                            <h3 className='text-2xl font-bold mb-3'>Best Price</h3>
                            <p className='w-3/4 mx-auto'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla neque fugit consectetur nam facilis eaque. Lorem ipsum dolor sit</p>
                        </div>

                    </div>

                    <div className='flex flex-col justify-center items-center bg-white rounded-md shadow-md py-12'>
                
                        <div>
                            <img src={Loc} alt="" className='w-18 mb-6' />
                        </div>
                        <div className='text-center'>
                            <h3 className='text-2xl font-bold mb-3'>Many Location</h3>
                            <p className='w-3/4 mx-auto'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla neque fugit consectetur nam facilis eaque. Lorem ipsum dolor sit</p>
                        </div>

                    </div>
                    
                </div>
                <div className='w-full grid grid-cols-4 md:grid-cols-8 items-center gap-5 bg-white py-5'>
                    <img src={Alfa} alt="" />
                    <img src={Audi} alt="" />
                    <img src={Bentley} alt="" />
                    <img src={Tesla} alt="" />
                    <img src={Dodge} alt="" />
                    <img src={Chev} alt="" />
                    <img src={BMW} alt="" />
                    <img src={Lambo} alt="" />
                </div>
            </div>
            
        </div>
        
    </div>
  )
}

export default How
