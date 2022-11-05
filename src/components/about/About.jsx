import React from 'react'
import './about.css'
import ME from '../../assets/me-about-color.png'
import {MdSchool} from 'react-icons/md'
/* import {FiUsers} from 'react-icons/fi' */
/* import {FaFolderOpen} from 'react-icons/fa' */

const About = () => {
  return (
    <section id='about'>
      <h5>who's this guy ?</h5>
      <h2>about me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="that's me" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <MdSchool className='about__icon'/>
              <a href="https://oclock.io/formations/developpeur-web-fullstack-javascript" rel="noreferrer" target="_blank"><h4>O'clock</h4></a>
              <h6>coding school </h6>
              <small>Full Stack JavaScript study course</small>
            </article>

            
            </div>

            <p>
              After being lucky enough to be able to experiment different careers around the world for the past 10 years, I have decided in 2020 to reconnect with my teenage years by studying web development. 
              I went ahead and chose to complete a 6 months JavaScript study course with <i><b><a href="https://oclock.io/formations/developpeur-web-fullstack-javascript" rel="noreferrer" target="_blank">O'clock</a></b></i> coding school. I have acquired various skills and knowledge and am now a web developer with a strong appetency for front end programming.<br></br><br></br>
              Currenly based in Amsterdam, I am excited and open to new work opportunities.

  
            </p>

            <a href="#contact" className='btn btn-primary'>let's talk</a>

          </div>
        </div>
      
    </section>
  )
}

export default About