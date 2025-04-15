import React from 'react'
import Experienceinfo from './Experienceinfo'
import {motion} from 'framer-motion';
import {fadeIn} from '../../framermotion/variants'

const ExperienceTopLeft = () => {
  return (
    <motion.div
    variants={fadeIn("right",0.2)}
    initial="hidden"
    whileInView="show"
    viewport={{once:false,amount:0.7}}
    className="flex flex-col gap-6 w-[300px]">
        <p className="text-orange font-bold uppercase text-3xl font-special text-center">Since 2023</p>
        <div className="flex justify-center items-center gap-4">
            
            <Experienceinfo number="1.5" text="Years"/>
                <p className="font-bold text-6xl text-lightBrown">-</p>
            <Experienceinfo number="10+" text="WebSites"/> <br />
        </div>    
            <div className="text-center text-white">
                <p>With 1.5 years of experience building dynamic and user-friendly web app applications.</p>
            </div>


        
    </motion.div>
  )
}

export default ExperienceTopLeft