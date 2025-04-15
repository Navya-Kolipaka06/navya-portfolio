import React from 'react'
import { FaHtml5 } from "react-icons/fa";
import { FaJava } from "react-icons/fa6";
import { FaCss3Alt } from "react-icons/fa";
import { SiMysql } from "react-icons/si";
import { RiJavascriptLine } from "react-icons/ri";
import { SiMongodb } from "react-icons/si";
import { FaNode } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import SingleSkill from './SingleSkill'

const skills=[
{
    skill:"Java" ,
    icon:FaJava,
},
{
    skill:"MySQL",
    icon:SiMysql,
},
{
    skill:"HTML" ,
    icon:FaHtml5,
},
{
    skill:"CSS" ,
    icon:FaCss3Alt,
},
{
    skill:"Javascript" ,
    icon:RiJavascriptLine,
},
{
    skill:"MongoDB" ,
    icon:SiMongodb,
},
{
    skill:"Node.js" ,
    icon:FaNode,
},
{
    skill:"Express.js" ,
    icon:SiExpress,
},
{
    skill:"React.js",
    icon:FaReact,
},
{
    skill:"Tailwind CSS",
    icon:RiTailwindCssFill,
}
];

const AllSkillsSM = () => {
  return (
    <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-12 my-12">
        {skills.map((item,index)=>{
            return <div key={index} className="flex flex-col items-center border rounded-full border-orange shadow-cyanShadow">
                <item.icon className="text-orange text-7xl"/>
                <p className="text-center mt-4 text-white">{item.skill}</p>
               </div>
        })}
    </div>
  )
}

export default AllSkillsSM