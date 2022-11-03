import React from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {BsWhatsapp} from 'react-icons/bs'

const Contact = () => {
  return (
    <section id='contact'>
      <h5>Get in touch</h5>
      <h2>Contact me</h2>

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

          <article className="contact__option">
            <MdOutlineEmail className='contact_option-icon'/>
              <h4>Email</h4>
              
              <a href="mailto:hugo.lopez002@gmail.com" target="_blank" rel="noreferrer">Send an email</a>
          </article>
        </div>

        <form action="">
          <input type="text" name='name' placeholder='Your name' required />
          <input type="email" name='email' placeholder='Your email' required />
          <textarea name="message" rows="7" placedholder='Your message' required ></textarea>
          <button type='submit' className='btn btn-primary'></button>
        </form>

      </div>
    </section>
  )
}

export default Contact