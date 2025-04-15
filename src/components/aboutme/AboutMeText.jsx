import React from 'react'
import {motion} from 'framer-motion'
import {fadeIn} from '../../framermotion/variants'

const AboutMeText = () => {
  return (
    <div className="flex flex-col md:items-start sm:items-centeer md:text-left sm:text-center ml-5 mr-10 pt-20">
        <h2
        
        className="text-6xl text-cyan mt-10 mb-10" >About Me</h2>
        <motion.p
        variants={fadeIn("right",0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{once:false,amount:0.7}}
        className="text-white">I’m Navya Kolipaka, a passionate MERN Stack Developer skilled in building 
            scalable and efficient web applications. I specialize in React.js, Node.js, Express.js, and MongoDB, creating 
             seamless user experiences. With experience in e-learning and e-commerce projects, I focus on performance, security, 
              and clean code. I thrive in dynamic environments, solving complex problems with innovation. Always eager to learn, 
             I stay updated with the latest technologies to build impactful solutions.</motion.p>
        <button className="border border-orange rounded-full py-2 px-4 text-lg flex items-center mt-10 hover:bg-orange trasition-all duration-500 cursor-pointer md:self-start sm:self-center text-white hover:text-cyan shadow-cyanShadow">My Projects</button>
    </div>
  )
}

export default AboutMeText