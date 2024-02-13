import React from 'react'

import { brands } from '../data'

const Brands = () => {
  return (
    <>
      <section className='min-h-[146px] bg-tertiary flex items-center'>
        <div className='container mx-auto flex md:justify-between items-center flex-wrap justify-evenly'>
            {brands.map((brand,index)=>{
                return(
                    <div key={index}>
                      <a href={brand.href} target='blank'> 
                      <img src={brand.img}  alt="" />
                      </a> 
                    </div>
                )
            })}
        </div>
      </section>
    </>
  )
}

export default Brands
