import React from 'react'
import './testimonials.css'
import AVTR1 from '../../assets/avatar1.jpg'
import AVTR2 from '../../assets/avatar2.jpg'
import AVTR3 from '../../assets/avatar3.jpg'
import AVTR4 from '../../assets/avatar4.jpg'

// import Swiper core and required modules
import { Pagination, Navigation } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';




const data = [
  {
    avatar: AVTR1,
    name: 'Jean Bonbeur',
    review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis tortor urna, vehicula eget dictum sit amet, vestibulum quis nisl. Maecenas scelerisque augue nisl, tincidunt consequat nunc viverra id. Vestibulum efficitur'
  },
  {
    avatar: AVTR2,
    name: 'Lary Golade',
    review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis tortor urna, vehicula eget dictum sit amet, vestibulum quis nisl. Maecenas scelerisque augue nisl, tincidunt consequat nunc viverra id. Vestibulum efficitur'
  },
  {
    avatar: AVTR3,
    name: 'Zinédine Zidane',
    review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis tortor urna, vehicula eget dictum sit amet, vestibulum quis nisl. Maecenas scelerisque augue nisl, tincidunt consequat nunc viverra id. Vestibulum efficitur'
  },
  {
    avatar: AVTR4,
    name: 'Denis Brogniart',
    review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis tortor urna, vehicula eget dictum sit amet, vestibulum quis nisl. Maecenas scelerisque augue nisl, tincidunt consequat nunc viverra id. Vestibulum efficitur'
  },
]

const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>What they think of me</h5>
      <h2>Review about my work</h2>

      <Swiper className="container testimonials__container"
      // install Swiper modules
      modules={[Pagination, Navigation]}
      spaceBetween={40}
      slidesPerView={1}
      pagination={{ clickable: true }}>
        {
          data.map(({avatar, name, review}, index) => {
            return (
              <SwiperSlide key={index} className="testimonial">
          <div className="client__avatar">
            <img src={avatar} alt=""/>
          </div>
          <h5 className='client__name'>{name}</h5>
                <small className='client__review'>{review}</small>
        </SwiperSlide>
          
            )
          })
        }
      </Swiper>   
    </section>
  )
}

export default Testimonials