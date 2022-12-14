import React from 'react'
import {CiSearch} from 'react-icons/ci'
import {BsArrowDownShort} from 'react-icons/bs'
const NavBar = () => {
  return (
    <div className='mx-auto '>
        <div className="container flex flex-col lg:flex-row py-2 justify-between items-center">
            <img src="/assets/logo.svg" alt="logo" />
            <div className="flex gap-2 items-center border border-[#d0d5dd] px-0.5 pl-2 py-0.5 rounded-md" >
                <CiSearch className='text-[#c3c5c9]'/>
                <input className='focus:outline-none' type="text" placeholder='Want to learn?'/>
                <button className='flex items-center px-3 py-1 font-medium text-purple-600 capitalize rounded-md bg-purple-50 hover:bg-purple-200'>Explore
                    <BsArrowDownShort/>
                </button>
            </div>
            <div className="flex items-center gap-4 ">
                <p className='text-base font-medium cursor-pointer'>Program</p>
                <p className='text-base font-medium cursor-pointer'>Enterprise</p>
                <p className='text-base font-medium cursor-pointer'>Universities</p>
            </div>
            <div className="flex items-center gap-4">
                <p className='text-base font-medium cursor-pointer'>Sign In</p>
                <p className='text-base font-medium capitalize bg-purple-500 border border-none cursor-pointer btn btn-sm'>Create Free Account</p>
             
            </div>
        </div>
    </div>
  )
}

export default NavBar