import React from 'react'
import {motion} from 'framer-motion';
import {fadeIn} from '../../framermotion/variants'

const ExperienceTopRight = () => {
  return (
    <motion.div
    variants={fadeIn("left",0.2)}
    initial="hidden"
    whileInView="show"
    viewport={{once:false,amount:0}}
     className="md:h-[400px] md:w-[350px] sm:h-auto border-2 border-orange border-dashed rounded-2xl p-4">
        <p className="font-bold text-cyan">Associate Consultant</p>
        <p className="text-orange">NSE Talentsprint</p>
        <p className="text-lightGrey">March-2023</p>
        <ul className="list-disc mt-4 pl-4 text-white">
            <li>Implementing reusable components.</li>
            <li>Participating in large scale application.</li>
            <li>Working on the performance of web applications.</li>
            <li>Generating new ideas for better user experience.</li>
            <li>Help trainees with their assignments and guide them.</li>
            <li>Provide support for students through their learning journey.</li>
            <li>Participating in internal trainings</li>
        </ul>
    </motion.div>
  )
}

export default ExperienceTopRight