import React from 'react'
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import {useState} from 'react';



const ContactMeForm = () => {
    const [name,setName] = useState('');
    const [email,setEmail] = useState('');
    const [message,setMessage]=useState('');
    const [success,setSuccess] = useState('');

    const handleName = (e)=>{
        setName(e.target.value)
    }
    const handleEmail = (e)=>{
        setEmail(e.target.value)
    }
    const handleMessage = (e)=>{
        setMessage(e.target.value)
    }

    const form = useRef();


    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs
          .sendForm('service_y8e79rd', 'template_41mu11o', form.current, {
            publicKey: 'MnE2DJSw4ShcG2VSx',
          })
          .then(
            () => {
              setName('');
              setEmail('');
              setMessage('');
              setSuccess('Message sent!');
            },
            (error) => {
              console.log('FAILED...', error.text);
            },
          );
      };


  return (
    <div>
        <p className="text-cyan">{success}</p>
        <form action="" className="flex flex-col gap-4" ref={form} onSubmit={sendEmail}>

            <input type="text" placeholder="Your Name" required name="name" className="h-12 rounded-lg bg-lightBrown px-2 text-white" value={name} onChange={handleName}/>
            <input type="email" placeholder="Your Email" required name="emial" className="h-12 rounded-lg bg-lightBrown px-2 text-white" value={email} onChange={handleEmail}/>
            <textarea name="message" id="" type="text" placeholder="Message" rows="9" cols="50" required className="rounded-lg bg-lightBrown p-2 h-[300px] w-full text-white" value={message} onChange={handleMessage}></textarea>
            <button type="submit" className="w-full rounded-lg border border-cyan text-white h-12 font-bold text-xl hover:bg-darkCyan bg-cyan transition-all duration-500">Send</button>
            
        </form>
    </div>
  )
}

export default ContactMeForm