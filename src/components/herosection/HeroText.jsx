import React from 'react'
import {motion} from 'framer-motion'
import {fadeIn} from '../../framermotion/variants.js'

const HeroText = () => {
  return (
    <div className="flex flex-col gap-4 h-full justify-center md:text-left sm:text-center">
        <motion.h2 
        variants={fadeIn("down",0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{once:false,amount:0}}
        className="lg:text-2xl sm:text-xl uppercase text-cyan">Full Stack Developer</motion.h2>
        <motion.h1 
        variants={fadeIn("right",0.2)} 
                initial="hidden"
                whileInView="show"
                viewport={{once:false,amount:0}}
        className="md:text-[2.8rem] lg:text-6xl sm:text-4xl font-bold font-special text-orange">Navya Kolipaka</motion.h1>
        <motion.p
        variants={fadeIn("right",0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{once:false,amount:0}}
        className="text-lg mt-4 text-white">A passionate Full Stack Developer  <br />with 1.5 years of experience.</motion.p>
    </div>
  )
}

export default HeroText