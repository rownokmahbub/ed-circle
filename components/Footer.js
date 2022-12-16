import React from 'react'
import { BsFacebook, BsInstagram, BsTwitter } from 'react-icons/bs'

const Footer = () => {
  return (
    <div className='bg-[#101828]'>
        <div className="container mx-auto py-10">
           <div className="grid grid-col-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-10 text-white">
            <div className="flex flex-col gap-4">
               <img src="/assets/logo_light.svg" alt="" />
               <p>Top learning experiences that create more talent in the world.</p>
            </div>
           <div className="flex flex-col gap-2">
                <p className='text-gray-500 text-xl font-semibold'>Product</p>
                <p className='text-lg  font-medium'>Overview</p>
                <p className='text-lg  font-medium'>Features</p>
                <p className='text-lg  font-medium'>Solution</p>
                <p className='text-lg  font-medium'>Tutorials</p>
                <p className='text-lg  font-medium'>Pricing</p>
           </div>
           <div className="flex flex-col gap-2">
                <p className='text-gray-500 text-xl font-semibold'>Company</p>
                <p className='text-lg  font-medium'>About Us</p>
                <p className='text-lg  font-medium'>Career</p>
                <div className="flex gap-1">
                <p className='text-lg  font-medium'>press</p>
                <p className='text-xs flex justify-center items-center  font-semibold text-black bg-white px-2 py-1 rounded-full'>new</p>
                </div>
                
                <p className='text-lg  font-medium'>News</p>
            
           </div>
           <div className="flex flex-col gap-2">
                <p className='text-gray-500 text-xl font-semibold'>Social</p>
                <p className='text-lg  font-medium'>Facebook</p>
                <p className='text-lg  font-medium'>Youtube</p>
            
                
                <p className='text-lg  font-medium'>Twitter</p>
                <p className='text-lg  font-medium'>Linkedin</p>
            
           </div>
           <div className="flex flex-col gap-2">
                <p className='text-gray-500 text-xl font-semibold'>Legal</p>
                <p className='text-lg  font-medium'>Terms</p>
                <p className='text-lg  font-medium'>Privacy</p>
            
                
                <p className='text-lg  font-medium'>Cookies</p>
                <p className='text-lg  font-medium'>Contact</p>
            
           </div>
            </div> 
            <div className="flex justify-between items-center pt-20 pb-5">
                <p className='text-gray-500'>© 2022 Ed-Circle. All rights reserved.</p>
                <div className="flex gap-3">
            <BsFacebook className='text-gray-500 hover:text-primary'/>
            <BsInstagram className='text-gray-500 hover:text-primary'/>
            <BsTwitter className='text-gray-500 hover:text-primary'/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer