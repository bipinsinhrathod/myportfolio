import React from 'react'

import Projects from './Projects'

const Portfolio = () => {
  return (
    <>
      <section id='portfolio' className="section bg-primary min-h-[1400px]">
        <div className="container mx-auto">
            <div className="flex flex-col items-center text-center">
                <h2 className="section-title before:content-portfolio relative before:absolute before:opacity-40 before:-top-[2rem] before:-left-3/4 before:hidden before:lg:block">My Latest Work</h2>
                <p className="subtitle">I made lots of project during my college time , i made one full stack project in my second sem of the college , and i aslo made one online food ordering full stack website . And than i learn about ReactJS and i made two project in it , one is shoes web site and second is my own portfolio website .</p>
            </div>
            <Projects/>
        </div>
      </section>
    </>
  )
}

export default Portfolio
