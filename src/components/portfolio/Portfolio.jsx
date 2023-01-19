import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/otalktone.png'
import IMG2 from '../../assets/countryguide3.png'
import IMG3 from '../../assets/meditation.png'
import IMG4 from '../../assets/weather.png'
import IMG5 from '../../assets/portfolio5.png'
import IMG6 from '../../assets/portfolio6.jpg'


const data = [
  {
    id: 1,
    image: IMG1,
    title: 'Otalktone, meet locals with similar interests on your travels',
    github: 'http://github.com',
    demo: 'https://otalktone.fly.dev/'
  },

  {
    id: 2,
    image: IMG2,
    title: 'Country Guide, know everything about any country',
    github: 'https://github.com/HugoLOPEZ64/Country-Guide',
    demo: 'https://country-guide-coral.vercel.app/'
  },

  {
    id: 3,
    image: IMG3,
    title: 'The not so responsive Meditation app (WIP)',
    github: 'https://github.com/HugoLOPEZ64/Meditation-app',
    demo: 'https://meditation-app-black.vercel.app/'
  },

  {
    id: 4,
    image: IMG4,
    title: 'Weather app. again.',
    github: 'http://github.com',
    demo: 'https://weather-app-alpha-green.vercel.app/'
  },

  {
    id: 5,
    image: IMG5,
    title: 'project number 5',
    github: 'http://github.com',
    demo: 'https://otalktone.fly.dev/'
  },

  {
    id: 6,
    image: IMG6,
    title: 'project number 6',
    github: 'http://github.com',
    demo: 'https://otalktone.fly.dev/'
  }
]


const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>my projects</h5>
      <h2>portfolio</h2>

      <div className="container portfolio__container">
        {
          data.map(({id, image, title, github, demo}) => {
            return (
              <article key={id} className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={image} alt={title} />
          </div>
            <h3>{title}</h3>
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