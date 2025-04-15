import React from 'react'
import {motion} from 'framer-motion';
import {fadeIn} from '../../framermotion/variants'

const AboutMeImage = () => {
  return (
    <motion.div 
    variants={fadeIn("left",0.2)}
    initial="hidden"
    whileInView="show"
    viewport={{once:false,amount:0.7}}
    className="h-[500px] w-[300px] relative sm:ml-20 sm:mt-10 pt-10">
       <div className="h-[500px] w-[300px] rounded-[100px] absolute overflow-hidden">
       <img src="../../public/images/about-me.jpg" alt="aboutme"  className="h-full w-[300px] object-cover"/>
       </div>
        <div className="h-[500px] w-[250px] bg-orange absolute bottom-[-50px] left-[-20px] rounded-bl-[120px] rounded-tr-[120px] rounded-tl-[20px] rounded-br-[20px] -z-10 "></div>
    </motion.div>
  )
}

export default AboutMeImage