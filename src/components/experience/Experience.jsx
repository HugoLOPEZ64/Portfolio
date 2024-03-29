import React from 'react'
import './experience.css'

import {AiFillHtml5} from 'react-icons/ai'
import {SiSass} from 'react-icons/si'
import {SiTailwindcss} from 'react-icons/si'
import {SiJavascript} from 'react-icons/si'
import {FaReact} from 'react-icons/fa'
import {FaNodeJs} from 'react-icons/fa'
import {SiExpress} from 'react-icons/si'
import {SiPostgresql} from 'react-icons/si'
import { FiFramer } from 'react-icons/fi'
import {FaGitAlt} from 'react-icons/fa'

import {SiMongodb} from 'react-icons/si'
import {GrWordpress} from 'react-icons/gr'

const Experience = () => {
  return (
    <section id='experience'>
      <h5>what I can do</h5>
      <h2>my skills</h2>

      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>front end</h3>
          <div className="experience__content">
            <article className='experience__details'>
              <AiFillHtml5 className='experience__details-icon'/>
              <div>
                <h4>HTML</h4>
                <small className='text-light'></small>
              </div>            
            </article>

            <article className='experience__details'>
            <SiSass className='experience__details-icon'/>
              <div>
                <h4>CSS & SASS</h4>
                <small className='text-light'></small>
              </div>             
            </article>

            <article className='experience__details'>
            <SiTailwindcss className='experience__details-icon'/>
              <div>
                <h4>Tailwind</h4>
                <small className='text-light'></small>
              </div>              
            </article>

            <article className='experience__details'>
            <FiFramer className='experience__details-icon'/>
              <div>
                <h4>Material UI, Bootstrap, Bulma</h4>
                <small className='text-light'></small>
              </div>             
            </article>

            <article className='experience__details'>
            <SiJavascript className='experience__details-icon'/>
              <div>
                <h4>JavaScript</h4>
                <small className='text-light'></small>
              </div>
            </article>

            <article className='experience__details'>
            <FaReact className='experience__details-icon'/>
              <div>
                <h4>React</h4>
                <small className='text-light'></small>
              </div>             
            </article>
            </div>
        </div>


        <div className="experience__backend">
        <h3>back end & tools</h3>
          <div className="experience__content">
            <article className='experience__details'>
            <FaNodeJs className='experience__details-icon'/>
              <div>
                <h4>Node JS</h4>
                
              </div>
            </article>
            <article className='experience__details'>
            <SiExpress className='experience__details-icon'/>
              <div>
                <h4>Express</h4>
                <small className='text-light'></small>
              </div>
              
            </article>
            <article className='experience__details'>
            <SiPostgresql className='experience__details-icon'/>
            <div>
                <h4>PostgreSQL</h4>
                <small className='text-light'></small>
            </div>
              
            </article>
            <article className='experience__details'>
            <SiMongodb className='experience__details-icon'/>
            <div>
              <h4>MongoDB</h4>
              <small className='text-light'></small>
            </div>
              
            </article>
            <article className='experience__details'>
            <FaGitAlt className='experience__details-icon'/>
            <div>
                <h4>Git</h4>
                <small className='text-light'></small>
            </div>
              
            </article>
            <article className='experience__details'>
            <GrWordpress className='experience__details-icon'/>
            <div>
                <h4>Wordpress</h4>
                <small className='text-light'></small>
            </div>
              
            </article>
            
            
            </div>

        </div>
        
        
        
      </div>

    </section>
  )
}

export default Experience