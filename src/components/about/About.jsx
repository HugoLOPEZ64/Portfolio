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
        <div className="about_me">
          <div className="about__me-image">

            <img src={ME} alt="Yep, that's me" />
          </div>
        </div>

        <div className="about_content">
          <div className="about_cards">
            <article className='about__card'>
              <FaAward className ='about__icon'/>
              <h5>Experience</h5>
              <small>1 year study</small>
            </article>

            <article className='about__card'>
              <FiUsers className ='about__icon'/>
              <h5>Previous company</h5>
              <small>none so far, you'll be the first one!</small>
            </article>

            <article className='about__card'>
              <FaFolderOpen className ='about__icon'/>
              <h5>Projects</h5>
              <small>7 projects in progress</small>
            </article>
            
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum et dolore nesciunt corporis molestiae similique vitae minima ipsum suscipit, voluptates architecto alias quae impedit officiis veritatis explicabo nihil consequatur iusto!
            </p>

            <a href="#contact" className='btn btn-primary'>Let's talk</a>

          </div>
        </div>
      </div>
    </section>
  )
}

export default About