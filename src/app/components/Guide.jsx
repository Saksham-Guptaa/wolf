import Link from 'next/link'
import React from 'react'

function Guide() {
  return (
    <div className=' '>
        <p className='text-[#00C4F4] text-center '>Step by step guide</p>
        <p className='text-[40px] text-center'>Easy Steps to Success</p>
        <p className='text-[#CFCFCF] text-center'>Wolves provide the best technical, legal and market help to your venture. We are happy with challenges, we derive uniqueness in every solution that we create.</p>


        <div className='flex justify-center mt-10 space-x-8 ' >
            <div className='w-1/4 border flex flex-col items-center text-center p-10 py-20 border-[#353535] rounded-lg  ' >
                <img src="/bookcall.png" className='w-20' alt="" />
                <p className='text-[36px] ' >Book a call with us!!</p>
            </div>

            <div className='w-1/4 border flex flex-col items-center text-center p-10 py-20 border-[#353535] rounded-lg  ' >
                <img src="/ideate.png" className='w-20' alt="" />
                <p className='text-[36px]'>Ideate & discuss</p>
            </div>

            <div className='w-1/4 border flex flex-col items-center  text-center p-10 py-20 border-[#353535] rounded-lg  ' >
                <img src="/addus.png" className='w-20' alt="" />
                <p className='text-[36px]'>Add us to your team.</p>
            </div>
        </div>
        <div className='flex items-center justify-center mt-10' >
            <Link href="#" className="bg-[#00C4F4] rounded-lg  font-semibold text-sm px-5 py-4 hover:scale-105">
            Download App
            </Link>
        </div>
        
    </div>
  )
}

export default Guide