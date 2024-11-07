import Link from 'next/link'
import React from 'react'

function Hero() {
  return (
    <div className='w-full h-screen' >
        <div className='h-[90%]  w-[80%] mx-auto' >
            <img className='absolute brightness-125 w-[50%] object-contain bottom-0 right-0 ' src='/Herobg.png'  ></img>
            <div className='flex justify-center items-center ' >
              <div className='w-[50%]' >
              <h2 className='text-[70px]' >Take the backseat, the WOLVES are at it!!</h2>
              <Link href="#" className="bg-[#00C4F4] rounded-lg font-semibold text-sm px-4 py-2 hover:scale-105">
                Get Started
              </Link>
              </div>

            </div>
        </div>
    </div>
  )
}

export default Hero