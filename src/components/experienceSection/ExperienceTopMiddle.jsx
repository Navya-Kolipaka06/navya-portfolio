import React from 'react'
import {motion} from 'framer-motion';
import {fadeIn} from '../../framermotion/variants'

const ExperienceTopMiddle = () => {
  return (
    <motion.div
    variants={fadeIn("up",0.2)}
    initial="hidden"
    whileInView="show"
    viewport={{once:false,amount:0}}
     className="lg:w-[30%] md:w-[50%] sm:w-[80%]">
      <img src="/images/experience-image.png" alt="experience image" />
    </motion.div>
  )
}

export default ExperienceTopMiddle