import React from 'react'
import SingleContactSocial from './SingleContactSocial'
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const ContactSocial = () => {
  return (
    <div className="flex gap-6 mt-10">
        <SingleContactSocial link="https://www.linkedin.com/in/navya-kolipaka-8b0546325/" Icon={FaLinkedin}/>
        <SingleContactSocial link="https://github.com/Navya-Kolipaka" Icon={FaGithub}/>
    </div>
  )
}

export default ContactSocial