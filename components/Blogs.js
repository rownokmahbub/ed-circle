import React from 'react'

const Blogs = () => {
  return (
    <div className='container mx-auto py-20'>
        <p className='text-2xl font-semibold'>Our Recent Blogs</p>
        <div className="flex justify-between items-center">
            <div className="flex flex-col gap-4">
            <div className="flex gap-6 items-center">
                <img src="/assets/blog1.svg" alt="" />
                <div className="flex flex-col gap-3">
                    <p className='text-[#6941C6] text-lg font-semibold'>November 16, 2014</p>
                    <p className=' text-xl font-semibold'>Three Pillars of User Delight</p>
                    <p className='text-base text-gray-500'>Delight can be experienced <br /> viscerally, behaviourally, and reflectively. <br /> A great design is ...</p>
                    <div className="flex gap-4 items-center">
                        <p className='text-[#C11574] font-medium bg-[#FDF2FA] px-3 py-1 rounded-full'>Research</p>
                        <p className='text-[#027A48] font-medium bg-[#ECFDF3] px-3 py-1 rounded-full'>UI UX</p>
                    </div>
                </div>
            </div>
            <div className="flex gap-6 items-center">
                <img src="/assets/blog2.svg" alt="" />
                <div className="flex flex-col gap-3">
                    <p className='text-[#6941C6] text-lg font-semibold'>November 16, 2014</p>
                    <p className=' text-xl font-semibold'>Three Pillars of User Delight</p>
                    <p className='text-base text-gray-500'>Delight can be experienced <br /> viscerally, behaviourally, and reflectively. <br /> A great design is ...</p>
                    <div className="flex gap-4 items-center">
                        <p className='text-[#C11574] font-medium bg-[#FDF2FA] px-3 py-1 rounded-full'>Research</p>
                        <p className='text-[#027A48] font-medium bg-[#ECFDF3] px-3 py-1 rounded-full'>UI Design</p>
                    </div>
                </div>
            </div>
            </div>
          <div className="flex flex-col gap-4">
            <img src="/assets/blog3.svg" alt="" />
          <p className='text-[#6941C6] text-lg font-semibold'>November 16, 2014</p>
          <p className=' text-xl font-semibold'>Three Pillars of User Delight</p>
          <p className='text-base text-gray-500'>Agile methods aim to overcome usability barriers in traditional development, but post new threats to user experience quality. </p>
          <div className="flex gap-4 items-center">
                        <p className='text-[#C11574] font-medium bg-[#FDF2FA] px-3 py-1 rounded-full'>Research</p>
                        <p className='text-[#027A48] font-medium bg-[#ECFDF3] px-3 py-1 rounded-full'>UI Technology</p>
                        <p className='text-[#027A48] font-medium bg-[#ECFDF3] px-3 py-1 rounded-full'>UI Programming</p>
                    </div>
          </div>
        </div>
    </div>
  )
}

export default Blogs