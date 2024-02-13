import React from 'react'
import Resume from '../assets/bipinsinh1.pdf'

import Bipin from '../assets/b3.png'
// import WomanImg from '../assets/img/banner-woman2.webp'

const Hero = () => {
  return (
    <>
      <section id='home' className='lg:h-[85vh] flex items-center bg-primary lg:bg-cover lg:bg-center lg:bg-no-repeat py-32 lg:py-0 overflow-hidden'>
        <div className='container mx-auto h-full'>
        <div className='flex items-center h-full pt-8'>
            <div className='flex flex-1 flex-col items-center lg:items-start'><p className='text-lg text-accent mb-[22px]'>Hey, I'm Bipinsinh</p>
            <h1 className='text-4xl leading-[44px] md:text-5xl md:leading-tight lg:text-7xl lg:leading-[1.2] font-bold md:tracking-tight'>I Build & Design <br />Web Interface.</h1>
            <p  className='pt-4 pb-8 md:pt-6 md:pb-12 max-w-[480px] text-lg text-center lg:text-left text-accent'>Front-end Developer.</p>

            <a href={Resume} download={true} className='btn btn-md rounded-xl animate-bounce bg-accent hover:bg-accent-hover md:btn-lg transition-all'>My Resume</a>
            </div>
            <div className='hidden lg:flex flex-1 justify-center items-center h-full '>
                <img width={'75%'} className='hover:scale-105 transition-all duration-500' src={Bipin} alt="" />
            </div>
        </div>
        </div>
      </section>
    </>
  )
}

export default Hero
