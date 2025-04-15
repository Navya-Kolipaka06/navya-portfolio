import React from 'react'
import ProjectsText from './projectsText'
import SingleProject from './SingleProject'


const projects=[
  {
    name:'EasyLearnWithExpert',
    year:'June2023',
    align:'right',
    image:'./images/website-img-3.jpg',
    link:'#',
  },
  {
    name:'ShopEase',
    year:'Feb2024',
    align:'left',
    image:'./images/website-img-4.jpg',
    link:'https://github.com/Navya-Kolipaka/ShopEase/tree/main/E-Commerce',
  },
]
const Projectsmain = () => {
  return (
    <div id="projects" className="max-w-[1200px] mx-auto px-4">
        <ProjectsText/>
        <div className="flex flex-col gap-10 max-w-[900px] mx-auto">
            {projects.map((item,index)=>{
              return <SingleProject key={index} name={item.name} year={item.year} align={item.align} image={item.image} link={item.link}/>
            })}
        </div>
    </div>
  )
}

export default Projectsmain