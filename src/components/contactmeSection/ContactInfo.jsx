import React from 'react'
import { MdMarkEmailRead } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import SingleInfo from './SingleInfo';


const ContactInfo = () => {
  return (
    <div className="flex flex-col gap-4 text-white mt-10">
        <SingleInfo text="navya.kolipaka69@gmail.com" Image={MdMarkEmailRead}/>
        <SingleInfo text="+91 9652125412" Image={FaPhoneAlt }/>
        <SingleInfo text="Hyderabad,Telangana" Image={FaLocationDot}/>
    </div>
  )
}

export default ContactInfo