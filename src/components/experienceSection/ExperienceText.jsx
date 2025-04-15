import React from 'react'
import {motion} from 'framer-motion';
import {fadeIn} from '../../framermotion/variants'

const ExperienceText = () => {
  return (
    <motion.div 
    variants={fadeIn("down",0.2)}
    initial="hidden"
    whileInView="show"
    viewport={{once:false,amount:0}}
    className="flex flex-col items-center mt-[100px]">
        <h2 className="text-6xl text-cyan mb-10">Experience</h2>
        <div className="border border-lightBrown p-4 rounded-xl mb-10 flex">
            <p className="text-lg text-center text-lightGrey">I specialize in <span className="text-white">
                React and Modern Javascript</span>, leveraging best practice
                 to create scalable and maintainable solutions.
                My experience spans working on diverse projects,from small business websites to 
                  <span className="text-white"> complex front-end systems</span>, always aiming for clean code and exceptional user 
                 experiences.
            </p>
        </div>
    </motion.div>
  )
}

export default ExperienceText