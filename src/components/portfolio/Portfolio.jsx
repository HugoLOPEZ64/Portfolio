import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/otalktone.png'
import IMG2 from '../../assets/landing.png'
import IMG3 from '../../assets/meditation.png'
import IMG4 from '../../assets/weather.png'
import IMG5 from '../../assets/travel.png'
import IMG6 from '../../assets/crud.png'


const data = [
  {
    id: 1,
    image: IMG1,
    title: 'Otalktone, travel and meet locals with similar interests',
    sub: 'React Tailwind NodeJS Express PostgreSQL',
    github: 'https://youtu.be/iePhu_kNySE',
    demo: 'https://otalktone.fly.dev/'
  },

  {
    id: 2,
    image: IMG2,
    title: 'The animated landing page. It is fun. (WIP)',
    sub: 'HTML Sass React Framer-Motion',
    github: 'https://github.com/HugoLOPEZ64/React-FramerMotion-landingpage',
    demo: 'https://hugolopez-framermotion.netlify.app/'
  },

  {
    id: 3,
    image: IMG3,
    title: 'The not so responsive Meditation app (WIP)       .',
    sub: 'HTML CSS JavaScript',
    github: 'https://github.com/HugoLOPEZ64/Meditation-app',
    demo: 'https://meditation-app-black.vercel.app/'
  },

  {
    id: 4,
    image: IMG4,
    title: 'Weather app. again. Check if it is raining outside',
    sub: 'HTML CSS JavaScript',
    github: 'https://github.com/HugoLOPEZ64/',
    demo: 'https://weather-app-alpha-green.vercel.app/'
  },

  {
    id: 5,
    image: IMG5,
    title: 'HugoPIN. Pin and save the spots you like (WIP)',
    sub: 'React MongoDB Express NodeJS',
    github: 'https://github.com/HugoLOPEZ64/',
    demo: ''
  },

  {
    id: 6,
    image: IMG6,
    title: 'CRUD Contact list. Add, edit and delete contacts',
    sub: 'HTML CSS JavaScript',
    github: 'https://github.com/HugoLOPEZ64/crud-contact-list',
    demo: 'https://crud-contact-list.vercel.app/'
  },

   

]


const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>my projects</h5>
      <h2>portfolio</h2>

      <div className="container portfolio__container">
        {
          data.map(({id, image, title, github, demo, sub,}) => {
            return (
              <article key={id} className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={image} alt={title} />
          </div>
            <h3>{title}</h3>
            <h5>{sub}</h5>
               <div className="portfolio__item-cta">
                <a href={github} target='_blank' rel="noreferrer" className='btn'>GitHub</a>
                <a href={demo} className='btn btn-primary' rel="noreferrer" target='_blank'>demo</a> 
                
              </div>       
        </article>
          )
         })
        }
      </div>
    </section>
  )
}

export default Portfolio