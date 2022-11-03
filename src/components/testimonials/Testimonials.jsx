import React from 'react'
import './testimonials.css'
import AVTR1 from '../../assets/avatar1.jpg'
import AVTR2 from '../../assets/avatar2.jpg'
import AVTR3 from '../../assets/avatar3.jpg'
import AVTR4 from '../../assets/avatar4.jpg'

const data = [
  {
    avatar: AVTR1,
    name: 'Jean Bonbeur',
    review: 'absolutely amazing experience working with hugo!'
  },
  {
    avatar: AVTR2,
    name: 'Lary Golade',
    review: 'Hugo has the softest skills i have ever seen'
  },
  {
    avatar: AVTR3,
    name: 'Zinédine Zidane',
    review: 'As well as being an incredible web developer, Hugo is also a terrific football player'
  },
  {
    avatar: AVTR4,
    name: 'Denis Brogniart',
    review: 'AH'
  },
]

const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>What they think of me</h5>
      <h2>Review about my work</h2>

      <div className="container testimonials__container">
        {
          data.map(({avatar, name, review}, index) => {
            return (
              <article key={index} className="testimonial">
          <div className="client__avatar">
            <img src={avatar} alt=""/>
          </div>
          <h5 className='client__name'>{name}</h5>
                <small className='client__review'>{review}</small>
        </article>
          
            )
          })
        }
      </div>   
    </section>
  )
}

export default Testimonials