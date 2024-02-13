import React, { useEffect, useState } from 'react'

import Nav from '../Components/Nav'
import NavMobile from '../Components/NavMobile'
import Socials from '../Components/Socials'


const Header = () => {
    const[bg,setBg] = useState(false);

    useEffect(() =>{
        window.addEventListener('scroll',()=>{
            window.scrollY >50 ? setBg(true) : setBg(false);
        })
    })

  return ( 
    <>
      <header className={`${bg ?'bg-tertiary h-20':'h-24'} flex items-center fixed top-0 w-full text-white z-10 transition-all duration-300`}>
        <div className="container mx-auto h-full flex items-center justify-between">
            <a href="#"><h1 className='text-3xl font-body mb-2'>Bipinsinh Rathod</h1></a>
            <div className='hidden lg:block'>
                <Nav/>
            </div>
            <div className="hidden lg:block">
                <Socials/>
            </div>
            <div className=" lg:hidden">
                <NavMobile/>
            </div>
        </div>
      </header>
    </>
  )
}

export default Header
