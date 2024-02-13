import React, { useEffect, useState } from 'react'

import { projectsData } from '../data'

import { projectsNav } from '../data'

import Project from './Project'

const Projects = () => {

    const [item, setitem] = useState({name:'all'})
    const [projects, setprojects] = useState([])
    const [active, setactive] = useState(0)

    useEffect(()=>{
        if(item.name==='all') {
            setprojects(projectsData)
        }else{
            const newProjects = projectsData.filter(
                (project) => {
                    return project.category.toLowerCase()===item.name
                }
            )
            setprojects(newProjects)
        }
    },[item])

    const handleClick = (e, index)=>{
        setitem({name: e.target.textContent.toLowerCase()})
        setactive(index)
    }





  return (
    <>
     <div>
        <nav className='mb-12 max-w-xl mx-auto'>
            <ul className='flex flex-col md:flex-row justify-evenly items-center text-white'>
                {projectsNav.map((item,index)=>{
                    return <li onClick={(e)=>{
                        handleClick(e,index)
                    }} className={`${
                        active === index ? 'active' : ''
                    } cursor-pointer capitalize m-4`} key={index}>{item.name}</li>
                })}
            </ul>
        </nav>
        <section className='grid lg:grid-cols-3 gap-y-12 lg:gap-x-8 lg:gap-y-8'>
            {projects.map((item)=>{
                return<Project item={item} key={item.id} />
            })}
        </section>
     </div> 
    </>
  )
}

export default Projects
