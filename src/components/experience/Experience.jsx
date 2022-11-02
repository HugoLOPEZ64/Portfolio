import React from 'react'
import './experience.css'
import {BsCheckCircleFill} from 'react-icons/bs'

const Experience = () => {
  return (
    <section id='experience'>
      <h5>What I can do</h5>
      <h2>My skills</h2>

      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>front end</h3>
          <div className="experience__content">
            <article className='experience__details'>
              <BsCheckCircleFill className='experience__details-icon'/>
              <div>
                <h4>HTML</h4>
                <small className='text-light'>Experienced</small>
              </div>            
            </article>

            <article className='experience__details'>
            <BsCheckCircleFill className='experience__details-icon'/>
              <div>
                <h4>CSS</h4>
                <small className='text-light'>Experienced</small>
              </div>             
            </article>

            <article className='experience__details'>
            <BsCheckCircleFill className='experience__details-icon'/>
              <div>
                <h4>Sass</h4>
                <small className='text-light'>Experienced</small>
              </div>             
            </article>

            <article className='experience__details'>
            <BsCheckCircleFill className='experience__details-icon'/>
              <div>
                <h4>Tailwind</h4>
                <small className='text-light'>Experienced</small>
              </div>              
            </article>

            <article className='experience__details'>
            <BsCheckCircleFill className='experience__details-icon'/>
              <div>
                <h4>JavaScript</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>

            <article className='experience__details'>
            <BsCheckCircleFill className='experience__details-icon'/>
              <div>
                <h4>React</h4>
                <small className='text-light'>Experienced</small>
              </div>             
            </article>
            </div>
        </div>


        <div className="experience__backend">
        <h3>back end</h3>
          <div className="experience__content">
            <article className='experience__details'>
            <BsCheckCircleFill className='experience__details-icon'/>
              <div>
                <h4>Node JS</h4>
                
              </div>
            </article>
            <article className='experience__details'>
            <BsCheckCircleFill className='experience__details-icon'/>
              <div>
                <h4>Express</h4>
                <small className='text-light'>Experienced</small>
              </div>
              
            </article>
            <article className='experience__details'>
            <BsCheckCircleFill className='experience__details-icon'/>
            <div>
                <h4>PostgreSQL</h4>
                <small className='text-light'>Experienced</small>
            </div>
              
            </article>
            <article className='experience__details'>
            <BsCheckCircleFill className='experience__details-icon'/>
            <div>
              <h4>Strapi</h4>
              <small className='text-light'>Experienced</small>
            </div>
              
            </article>
            
            
            </div>

        </div>
      </div>

    </section>
  )
}

export default Experience