import React from 'react'
import { BsFillPeopleFill } from "react-icons/bs";
import { PiSteeringWheelBold } from "react-icons/pi";
import { FaGasPump } from "react-icons/fa6";
import { TbAirConditioning } from "react-icons/tb";

const CarCards = ({ img, brand, name }) => {
  return (
    <div className='flex flex-col rounded-md bg-white shadow-lg'>
        <div>
            <img src={img} alt="" className='h-[250px] object-contain' />
        </div>
        <div className='py-4 px-8'>
            <div className='grid grid-cols-2'>
                <h5 className='font-bold text-lg'>{brand}</h5>
                <p className='text-end font-bold text-lg'>$150.00</p>
                <p className='text-sm text-black/70 font-bold'>{name}</p>
                <p className='text-sm text-end text-black/70'>per day</p>
            </div>
            <div className='grid grid-cols-4 justify-items-center gap-4 my-3'>
                <div className='p-2 bg-red-100/50 rounded-md text-center w-full '>
                    <BsFillPeopleFill className='text-red-500/90 mx-auto' size={24}/>
                    <p className='text-[12px] text-red-500/90 font-bold mt-1'>people</p>
                </div>
                <div className='p-2 bg-red-100/50 rounded-md text-center w-full'>
                    <PiSteeringWheelBold className='text-red-500/90  mx-auto' size={24}/>
                    <p className='text-[12px] text-red-500/90 font-bold mt-1'>Manual</p>
                </div>
                <div className='p-2 bg-red-100/50 rounded-md text-center w-full'>
                    <FaGasPump className='text-red-500/90  mx-auto' size={24}/>
                    <p className='text-[12px] text-red-500/90 font-bold mt-1'>100L</p>
                </div>
                <div className='p-2 bg-red-100/50 rounded-md text-center w-full'>
                    <TbAirConditioning className='text-red-500/90  mx-auto'size={24}/>
                    <p className='text-[12px] text-red-500/90 font-bold mt-1'>AC</p>
                </div>
                
            </div>
            <div className='mb-3'>
                <button className='w-full text-white bg-red-500 px-3 py-2 rounded'>Rent Now</button>
            </div>
        </div>
    </div>
  )
}

export default CarCards
