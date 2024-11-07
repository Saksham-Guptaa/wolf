import Link from 'next/link'
import React from 'react'

function About() {
  return (
    <div className='flex items-center mx-24 ' >
        <div className='w-1/2' >
            <img src="/about.png" className='w-[80%]' alt="about" />
        </div>
        <div className='w-1/2 ' >
            <p className='text-[#00C4F4]  ' >About us</p>
            <p className='text-[40px]'>Accelerate the world&apos;s transition</p>
            <p className='text-[#CFCFCF] ' >Wolf Decentralized is a unique development model that aims to provide research based solutions to your project. We find the best suited market tactics, legal and technical solutions for you to assist your brainchild with the best help it can get. We are not just a motivated and expert team of developers, we abide by our name, WOLVES who hunt just what you venture needs. </p>
            <div className='mt-4' >
                <Link href="#" className="bg-[#00C4F4]  rounded-lg font-semibold text-sm px-4 py-4 hover:scale-105">
                    More About Us
                </Link>
            </div>
            
        </div>
    </div>
  )
}

export default About