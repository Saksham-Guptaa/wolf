import React from 'react'

function WhyUs() {
  return (
    <div className=' mx-10 ' >
        <p className='text-[#00C4F4] text-center '> Why Choose Us</p>
        <p className='text-[40px] text-center'>An Approach as unique as your venture!</p>
        <p className='text-[#CFCFCF] text-center'>Wolves provide the best technical, legal and market help to your venture. We are happy with challenges, we derive uniqueness in every solution that we create.</p>
        <div className='flex mt-10 space-x-10 ' >
        <div className=' w-1/4 border p-10 py-14 border-[#353535] rounded-lg  ' >
            <img src="/bookcall.png" className='w-14' alt="" />
            <p className='text-[28px] ' >Safe and Secure</p>
            <p className='text-[#7D7D7D]'>Concerned your DApp, App or website is not secure? We are here to the rescue.</p>
        </div>

        <div className=' w-1/4 border p-10 py-14 border-[#353535] rounded-lg  ' >
            <img src="/bookcall.png" className='w-14' alt="" />
            <p className='text-[28px] ' >Intelligent Consultancy</p>
            <p className='text-[#7D7D7D]'>Looking for an well- rounded solution? or thinking whether your solution is market capable? 
            Our consultants know the solutions always.</p>
        </div>

        <div className=' w-1/4 border p-10 py-14 border-[#353535] rounded-lg  ' >
            <img src="/bookcall.png" className='w-14' alt="" />
            <p className='text-[28px] '>Research based solutions</p>
            <p className='text-[#7D7D7D]'>We cater to your venture just like ours. Building the latest technology is exactly OUR FORTE!</p>
        </div>

        <div className=' w-1/4 border p-10 py-14 border-[#353535] rounded-lg  ' >
            <img src="/bookcall.png" className='w-14' alt="" />
            <p className='text-[28px] '>Development to ICO</p>
            <p className='text-[#7D7D7D]' >We know how the market works. Let&apos;s take your crypto to the exchanges.</p>
        </div>
        </div>
    </div>
  )
}

export default WhyUs