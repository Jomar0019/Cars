import React from 'react'
import CarCards from '../components/Cards/CarCards'
import Car1 from '../assets/Cars/car1.png'
import Car2 from '../assets/car-flip.png'
import Car3 from '../assets/Cars/bentley.png'
import Car4 from '../assets/Cars/bmw.png'
import Car5 from '../assets/Cars/chev.png'
import Car6 from '../assets/Cars/dodge.jpg'
import Car7 from '../assets/Cars/mustang.png'


const Deals = () => {
  return (
    <div className='w-full bg-[#f5f5f5] py-12'>
      <div className="max-w-[1400px] mx-auto flex justify-center items-center h-full">
        <div className="w-full flex flex-col">
            <div className='text-center px-2'>
                <h4 className='font-bold text-2xl text-red-500 border-b-2 border-b-red-500 inline'>Rental Deals</h4>
                <h2 className='text-3xl md:text-6xl font-bold mt-6'>Explore our top deals</h2>
                <div className='md:w-1/2 mx-auto flex justify-between items-center md:grid grid-cols-6 md:gap-4 my-10'>
                    <button className='bg-red-500 text-white px-4 py-2 rounded-md'>All</button>
                    <button className='bg-white border px-4 py-2 rounded-md'>Audi</button>
                    <button className='bg-white border px-4 py-2 rounded-md'>Bently</button>
                    <button className='bg-white border px-4 py-2 rounded-md'>Tesla</button>
                    <button className='bg-white border px-4 py-2 rounded-md'>Dodge</button>
                    <button className='bg-white border px-4 py-2 rounded-md'>BMW</button>
                </div>
            </div>
            <div className='grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-5 p-2'>
                <CarCards img={Car1} brand={"Chevrolet"} name={"Corvette C7"}/>
                <CarCards img={Car2} brand={"Mercedes"} name={"A6 2024"}/>
                <CarCards img={Car3} brand={"Bently"} name={"A6 2024"}/>
                <CarCards img={Car4} brand={"BMW"} name={"A6 2024"}/>
                <CarCards img={Car5} brand={"Chevrolet"} name={"A6 2024"}/>
                <CarCards img={Car6} brand={"Dodge"} name={"A6 2024"}/>
                <CarCards img={Car7} brand={"Mustang"} name={"A6 2024"}/>
                <CarCards img={Car1} brand={"Chevrolet"} name={"Corvette C7"}/>
            </div>
            <div className="text-center mt-10">
                <button className='bg-red-500 text-white px-8 py-2 rounded-md'>View more</button>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Deals
