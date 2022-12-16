import React from 'react'
import {IoIosArrowForward} from 'react-icons/io'
const Services = () => {
    const service=[
        {
            img:'/assets/ux.svg',
            title:'Ux Design',
            sub:'Lessons on design that cover the most recent developments.'
        },
        {
            img:'/assets/web.svg',
            title:'web  Development',
            sub:'Lessons on design that cover then most recent developments.'
        },
        {
            img:'/assets/market.svg',
            title:'Marketing',
            sub:'Lessons on design that cover then most recent developments.'
        }
    ]
  return (
    <div className='container mx-auto items-center py-10'>
        <p className='text-lg text-purple-500 text-center font-medium'>Our services</p>
        <p className='text-3xl font-semibold text-center py-3'>Fostering a playful & engaging learning <br />
environment</p>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-16 pt-10">
{service.map((ser,i)=>{
    return(
        <div className='px-6 py-8 rounded-xl bg-gray-50 hover:bg-purple-600 group border border-gray-300' key={i}>
            <div className="flex gap-3 items-center">
            <img src={ser.img} alt="services" />
            <p className='text-2xl group-hover:text-white font-semibold '>{ser.title}</p>
            </div>
           
            <p className='text-base group-hover:text-white pr-6 py-2'>{ser.sub}</p>
            <button className='flex gap-2 items-center text-purple-600 group-hover:text-white'>Learn More <IoIosArrowForward/> </button>
        </div>
    )
})}
</div>
    </div>
  )
}

export default Services