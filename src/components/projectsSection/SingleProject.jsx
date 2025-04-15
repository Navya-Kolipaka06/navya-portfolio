import React from 'react';
import { BiSolidRightTopArrowCircle } from "react-icons/bi";
import {motion} from 'framer-motion';
import {fadeIn} from '../../framermotion/variants'

const SingleProject = ({ name, year, align, image, link }) => {
  const isLeft = align === "left";

  return (
    <motion.div
    variants={fadeIn("up",0.2)}
    initial="hidden"
    whileInView="show"
    viewport={{once:false,amount:0}}
      className={`flex flex-col md:flex-row items-center gap-8 w-full mb-14
        ${isLeft ? "md:flex-row" : "md:flex-row-reverse"} mt-10`}
    >
      {/* Text Section */}
      <div className={`md:w-1/2 w-full flex flex-col gap-3 text-left px-4
        ${isLeft ? "md:pl-[320px]" : "md:pr-10"}`}>
        <h2 className="text-orange text-2xl md:text-3xl">{name}</h2>
        <h3 className="text-white text-xl font-thin font-special">{year}</h3>
        <a
          href={link}
          className="text-lg flex gap-2 items-center text-cyan hover:text-orange"
          target="_blank"
          rel="noopener noreferrer"
        >
          View <BiSolidRightTopArrowCircle />
        </a>
      </div>

      {/* Image Section */}
      <div className="md:w-1/2 w-full max-h-[220px] max-w-[400px] rounded-xl overflow-hidden transform transition-all duration-500 relative border border-white">
        <div className="w-full h-full bg-cyan opacity-50 absolute left-0 top-0 hover:opacity-0 transition-all duration-500 md:block sm:hidden"></div>
        <img src={image} alt="project image" className="w-full h-full object-cover" />
      </div>
    </motion.div>
  );
};

export default SingleProject;
