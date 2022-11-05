import React from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {BsWhatsapp} from 'react-icons/bs'
import { useRef } from 'react'
import emailjs from 'emailjs-com'

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_bjfikul', 'template_l1c4pqs', form.current, '8XWm_pSld3-Any2KR')
      e.target.reset()
    
  };

  return (
    <section id='contact'>
      <h5>get in touch</h5>
      <h2>contact me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className='contact_option-icon'/>
              <h4>Email</h4>
              
            <a href="mailto:hugo.lopez002@gmail.com" target="_blank" rel="noreferrer">Send an email</a>
          </article>

          <article className="contact__option">
            <BsWhatsapp className='contact_option-icon'/>
              <h4>WhatsApp</h4>
              
              <a href="https://wa.me/33785582688" target="_blank" rel="noreferrer">Send a message</a>
          </article>

          
        </div>

        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your full name' required />
          <input type="email" name='email' placeholder='Your email' required />
          <textarea name="message" rows="7" placeholder='Your message' required ></textarea>
          <button type='submit' className='btn btn-primary'>send message</button>
        </form>

      </div>
    </section>
  )
}

export default Contact