import React from 'react'
import './about.css'
import ME from '../../assets/me-about-color.png'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {FaFolderOpen} from 'react-icons/fa'

const About = () => {
  return (
    <section id='about'>
      <h5>Who's this guy ?</h5>
      <h2>About me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="that's me" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <FaAward className='about__icon'/>
              <h5>Experience</h5>
              <small>1 year study</small>
            </article>

            <article className='about__card'>
              <FiUsers className='about__icon'/>
              <h5>Clients</h5>
              <small>none so far</small>
            </article>

            <article className='about__card'>
              <FaFolderOpen className='about__icon'/>
              <h5>Projects</h5>
              <small>7 projects</small>
            </article>
            </div>

            <p>
              Passionnate Full Stack developper but front end oriented. I'm happy to join you on your journey!
              happy Lorem ipsum, dolor sit amet consectetur adipisicing elit. Asperiores magnam molestiae et obcaecati perspiciatis, similique excepturi facilis minima magni porro fuga repudiandae sequi itaque accusantium fugit ea iure ab voluptatum!
            </p>

            <a href="#contact" className='btn btn-primary'>Let's talk</a>

          </div>
        </div>
      
    </section>
  )
}

export default About