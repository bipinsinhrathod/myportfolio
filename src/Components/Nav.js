import React from 'react'

import { Navigation, navigation } from '../data'

import { Link } from 'react-scroll'

const Nav = () => {
  return (
    <>
      <nav>
        <ul className='flex space-x-8 capitalize text-[15px]'>
            {navigation.map((item,index)=>{
                return(
                    <li className='text-white hover:text-accent cursor-pointer hover:scale-125 transition-all duration-300' key={index}>
                        <Link to={item.href}
                        activeClass='active'
                        spy={true}
                        smooth={true}
                        duration={500}
                        offset={-70}
                        className='transition-all duration-300'
                        >{item.name}</Link>
                    </li>
                )
            })}
        </ul>
      </nav>
    </>
  )
}

export default Nav
