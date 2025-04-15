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
import {motion} from 'framer-motion';
import {fadeIn} from '../../framermotion/variants'

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

const AllSkills = () => {
  return (
    <div>
        <div className="flex items-center justify-center relative gap-2 max-w-[1200px] mx-auto">
            {skills.map((item,index)=>{
                return(
                    <motion.div
                    variants={fadeIn("up",`0.${index}`)}
                            initial="hidden"
                            whileInView="show"
                            viewport={{once:false,amount:0.8}}>
                    <SingleSkill key={index} text={item.skill} imgSvg={<item.icon/>}/></motion.div>
                )


                
            })}
        </div>
    </div>
  )
}

export default AllSkills