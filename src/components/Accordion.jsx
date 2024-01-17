import React, { useState } from 'react'
import { FaMinus, FaPlus } from "react-icons/fa6";

const Accordion = ({ question }) => {
    const [ accordion, setAccordion ] = useState(false);

    const onClickHandler = () => {
        setAccordion(!accordion);
    }

  return (
    <div className=' mb-2 border-red-500 border rounded p-4'>
        <div className="flex justify-between items-center mb-2 cursor-pointer" onClick={onClickHandler}>
            <h5 className={`md:text-xl font-semibold ${accordion ? 'text-red-500' : 'text-black'}`}>{question}</h5>
            {accordion ? 
            <FaMinus size={23} className={` hidden md:flex ${accordion ? 'text-red-500' : 'text-black'}`}/> :
            <FaPlus size={23} className={` hidden md:flex ${accordion ? 'text-red-500' : 'text-black'}`}/> 
            }
        </div>
        
        <p className={`text-sm md:text-base ${accordion ? 'flex' : 'hidden'} transition-all duration-500`}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa expedita magnam sed, quidem accusamus esse dolor soluta distinctio repudiandae eveniet!</p>
    </div>
  )
}

export default Accordion
