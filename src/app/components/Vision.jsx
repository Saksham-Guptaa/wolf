import Link from 'next/link'
import React from 'react'

function Vision() {
  return (
    <div className='flex justify-around items-center  ' >
        
        <div className=' w-1/3 space-y-16' >
            <div>
            <p className='text-[#00C4F4]  ' >Our Vision</p>
            <p className='text-[40px]'>Cients all around the world</p>
            </div>
            <div className='mt-4 flex justify-between text-center ' >
                <div className='' >
                    <p className='text-5xl  font-semibold' >5k+</p>
                    <p className='text-[#cfcfcfe8] text-xl'>Community Joined</p>
                </div>
                <div>
                    <p className='text-5xl  font-semibold'>50+</p>
                    <p className='text-[#cfcfcfe8] text-xl'>Clients</p>
                </div>
                <div>
                    <p className='text-5xl  font-semibold'>50+</p>
                    <p className='text-[#cfcfcfe8] text-xl' >Connected VCs</p>
                </div>
            </div>
            
        </div>
        <div className='w-1/3' >
            <img src="/Worldmap.png" className='' alt="about" />
        </div>
    </div>
  )
}

export default Vision