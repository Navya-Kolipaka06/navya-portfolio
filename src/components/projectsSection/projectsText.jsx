import React from 'react'
import {motion} from 'framer-motion';
import {fadeIn} from '../../framermotion/variants'

const projectsText = () => {
  return (
    <motion.div 
    variants={fadeIn("up",0.2)}
    initial="hidden"
    whileInView="show"
    viewport={{once:false,amount:0}}
    className="flex flex-col items-center mt-[100px]">
        <h2 className="text-6xl text-cyan mb-10">Projects</h2>
        <p className="text-lg text-center text-white">I have worked on a variety of web development projects, ranging from
            responsive websites for small business to full-stack applications a 
            complex front-end interfaces.
        </p>
    </motion.div>
  )
}

export default projectsText