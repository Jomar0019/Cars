import React from 'react'
import { BsFillPeopleFill } from "react-icons/bs";
import { PiSteeringWheelBold } from "react-icons/pi";
import { FaGasPump } from "react-icons/fa6";
import { TbAirConditioning } from "react-icons/tb";
import { FaHeart } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";

const CarCards = ({ img, brand, name }) => {
  return (
    <div className='flex flex-col rounded-md bg-white shadow-lg '>
        <div className='px-2'>
            <img src={img} alt="" className='h-[150px] md:h-[250px] object-contain' />
        </div>
        <div className='md:py-4 md:px-8'>
            <div className='grid grid-cols-2 px-2'>
                <h5 className='font-bold text-sm md:text-lg'>{brand}</h5>
                <p className='text-end font-bold text-sm md:text-lg'>$150.00</p>
                <p className='text-[10px] md:text-sm text-black/70 font-bold'>{name}</p>
                <p className='text-[10px] md:text-sm text-end text-black/70'>per day</p>
            </div>
            <div className='grid grid-cols-2 md:grid-cols-4 justify-items-center gap-1 px-1 md:p-2 md:gap-3 my-1 md:my-3'>
                <div className='p-1 md:p-2 bg-red-100/50 rounded-md text-center w-full '>
                    <BsFillPeopleFill className='text-red-500/90 mx-auto text-sm md:text-lg' />
                    <p className='text-[11px] text-red-500/90 font-bold mt-1'>people</p>
                </div>
                <div className='p-1 md:p-2 bg-red-100/50 rounded-md text-center w-full'>
                    <PiSteeringWheelBold className='text-red-500/90  mx-auto text-sm md:text-lg' />
                    <p className='text-[11px] text-red-500/90 font-bold mt-1'>Manual</p>
                </div>
                <div className='p-1 md:p-2 bg-red-100/50 rounded-md text-center w-full'>
                    <FaGasPump className='text-red-500/90  mx-auto text-sm md:text-lg' />
                    <p className='text-[11px] text-red-500/90 font-bold mt-1'>100L</p>
                </div>
                <div className='p-1 md:p-2 bg-red-100/50 rounded-md text-center w-full'>
                    <TbAirConditioning className='text-red-500/90  mx-auto text-sm md:text-lg'/>
                    <p className='text-[11px] text-red-500/90 font-bold mt-1'>AC</p>
                </div>
                
            </div>
            <div className='mb-2 md:mb-3 p-1 flex w-full gap-1'>
                <button className='basis-1/3 rounded border border-red-200 flex items-center justify-center'><CiHeart size={20} className='text-red-500' /></button>
                <button className='basis-2/3 text-white text-sm bg-red-500 px-3 py-2 rounded md:text-base '>Rent Now</button>
            </div>
        </div>
    </div>
  )
}

export default CarCards
