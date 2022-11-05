import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/otalktone.png'
import IMG2 from '../../assets/portfolio2.jpg'
import IMG3 from '../../assets/portfolio3.jpg'
import IMG4 from '../../assets/portfolio4.jpg'
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
    title: 'project number 2',
    github: 'http://github.com',
    demo: 'https://otalktone.fly.dev/'
  },

  {
    id: 3,
    image: IMG3,
    title: 'project number 3',
    github: 'http://github.com',
    demo: 'https://otalktone.fly.dev/'
  },

  {
    id: 4,
    image: IMG4,
    title: 'project number 4',
    github: 'http://github.com',
    demo: 'https://otalktone.fly.dev/'
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