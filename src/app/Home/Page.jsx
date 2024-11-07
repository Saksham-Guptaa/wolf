import React from 'react'
import Hero from '../components/Hero'
import About from '../components/About'
import WhyUs from '../components/WhyUs'
import Guide from '../components/Guide'
import Vision from '../components/Vision'
import Features from '../components/Features'
import Exchange from '../components/Exchange'
import StartNow from '../components/StartNow'
import Footer from '../components/Footer'

function Page() {
  return (
    <div className='space-y-10'  >
        <Hero/>
        <About/>
        <WhyUs/>
        <Guide/>
        <Vision/>
        <Features/>
        <Exchange/>
        <StartNow/>
        <Footer/>
    </div>
  )
}

export default Page