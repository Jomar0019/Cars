import React, {useState} from 'react'
import Accordion from './Accordion'
import { FaMinus, FaPlus } from "react-icons/fa6";

const Faq = () => {
    const [ accordion, setAccordion ] = useState(true);

    const onClickHandler = () => {
        setAccordion(!accordion);
    }

  return (
    <div className='w-full md:h-screen bg-[#f4f4f4] py-12 md:py-0'>
      <div className="max-w-[1400px] mx-auto flex flex-col justify-center items-center h-full">
        <h4 className='font-bold text-xl md:text-2xl text-red-500 border-b-2 border-b-red-500 inline'>Frequently asked questions</h4>
        <h2 className='text-3xl md:text-5xl font-bold my-3 md:my-6 text-[#303030]'>General Questions</h2>

        <div className='flex flex-col md:w-3/4 px-4'>
            <div className=' mb-2 border-red-500 border rounded p-4 '>
                <div className="flex justify-between items-center mb-2 cursor-pointer" onClick={onClickHandler}>
                    <h5 className={`md:text-xl font-semibold ${!accordion ? 'text-black' : 'text-red-500'}`}>What are your age requirements for renting in the US and Canada?</h5>
                    {accordion ?
                    <FaMinus size={23} className={`hidden md:flex ${accordion ? 'text-red-500' : 'text-black'}`}/> :
                    <FaPlus size={23} className={`hidden md:flex ${accordion ? 'text-red-500' : 'text-black'}`}/> 
                    
                    }
                </div>
                
                <p className={` text-sm md:text-base ${accordion ? 'flex' : 'hidden'} transition-all duration-500`}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa expedita magnam sed, quidem accusamus esse dolor soluta distinctio repudiandae eveniet!</p>
            </div>
            <Accordion question={'Will Enterprise pick me up?'} />
            <Accordion question={'What are your renter requirements for renting in the US and Canada?'} />
            <Accordion question={'What forms of payment are accepted for renting a car?'} />
        </div>
      </div>
    </div>
  )
}

export default Faq
