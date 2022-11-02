import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/otalktone.png'
import IMG2 from '../../assets/otalktone.png'
import IMG3 from '../../assets/otalktone.png'
import IMG4 from '../../assets/otalktone.png'
import IMG5 from '../../assets/otalktone.png'
import IMG6 from '../../assets/otalktone.png'


const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My projects</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG1} alt="Otalktone, meet locals with similar interests" />
          </div>
            <h3>Otalktone</h3>
            <a href="https://github.com" target='_blank' rel="noreferrer" className='btn'>Github</a>
            <a href="https://otalktone.fly.dev/" className='btn btn-primary' rel="noreferrer" target='_blank'>Demo</a>       
        </article>
      </div>
    </section>
  )
}

export default Portfolio