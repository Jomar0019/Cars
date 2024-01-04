import React, {useState} from 'react'
import Accordion from './Accordion'
import { FaMinus, FaPlus } from "react-icons/fa6";

const Faq = () => {
    const [ accordion, setAccordion ] = useState(true);

    const onClickHandler = () => {
        setAccordion(!accordion);
    }

  return (
    <div className='w-full h-screen bg-[#f4f4f4]'>
      <div className="max-w-[1400px] mx-auto flex flex-col justify-center items-center h-screen">
        <h4 className='font-bold text-2xl text-red-500 border-b-2 border-b-red-500 inline'>Frequently asked questions</h4>
        <h2 className='text-5xl font-bold my-6 text-[#303030]'>General Questions</h2>

        <div className='flex flex-col w-3/4'>
            <div className=' mb-2 border-red-500 border rounded p-4 '>
                <div className="flex justify-between items-center mb-2 cursor-pointer" onClick={onClickHandler}>
                    <h5 className={`text-xl font-semibold ${!accordion ? 'text-black' : 'text-red-500'}`}>What are your age requirements for renting in the US and Canada?</h5>
                    {accordion ?
                    <FaMinus size={23} className={`${accordion ? 'text-red-500' : 'text-black'}`}/> :
                    <FaPlus size={23} className={`${accordion ? 'text-red-500' : 'text-black'}`}/> 
                    
                    }
                </div>
                
                <p className={`${accordion ? 'flex' : 'hidden'} transition-all duration-500`}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa expedita magnam sed, quidem accusamus esse dolor soluta distinctio repudiandae eveniet!</p>
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
