import React from 'react'
import './services.css'
import {BiCheck} from 'react-icons/bi'

const Services = () => {
  return (
    <section id='services'>
      <h5>What I offer</h5>
      <h2>Services</h2>

        <div className="container services__container">
          <article className="service">
            <div className="service__head">
              <h3>UI/UX Design</h3>
            </div>

            <ul className='service__list'>
              <li>
                <BiCheck llassName='service__list-icon' />
                <p>bla bla bla bla bla bla bla bla bla bla bla</p>
              </li>
              <li>
                <BiCheck llassName='service__list-icon' />
                <p>bla bla bla bla bla bla bla bla bla bla bla</p>
              </li>
              <li>
                <BiCheck llassName='service__list-icon' />
                <p>bla bla bla bla bla bla bla bla bla bla bla</p>
              </li>
              <li>
                <BiCheck llassName='service__list-icon' />
                <p>bla bla bla bla bla bla bla bla bla bla bla</p>
              </li>
              <li>
                <BiCheck llassName='service__list-icon' />
                <p>bla bla bla bla bla bla bla bla bla bla bla</p>
              </li>
              <li>
                <BiCheck llassName='service__list-icon' />
                <p>bla bla bla bla bla bla bla bla bla bla bla</p>
              </li>
            </ul>
          </article>

          <article className="service">
            <div className="service__head">
              <h3>Web development</h3>
            </div>

            <ul className='service__list'>
              <li>
                <BiCheck llassName='service__list-icon' />
                <p>bla bla bla bla bla bla bla bla bla bla bla</p>
              </li>
              <li>
                <BiCheck llassName='service__list-icon' />
                <p>bla bla bla bla bla bla bla bla bla bla bla</p>
              </li>
              <li>
                <BiCheck llassName='service__list-icon' />
                <p>bla bla bla bla bla bla bla bla bla bla bla</p>
              </li>
              <li>
                <BiCheck llassName='service__list-icon' />
                <p>bla bla bla bla bla bla bla bla bla bla bla</p>
              </li>
              <li>
                <BiCheck llassName='service__list-icon' />
                <p>bla bla bla bla bla bla bla bla bla bla bla</p>
              </li>
              <li>
                <BiCheck llassName='service__list-icon' />
                <p>bla bla bla bla bla bla bla bla bla bla bla</p>
              </li>
            </ul>
          </article>

          <article className="service">
            <div className="service__head">
              <h3>Content creation</h3>
            </div>

            <ul className='service__list'>
              <li>
                <BiCheck llassName='service__list-icon' />
                <p>bla bla bla bla bla bla bla bla bla bla bla</p>
              </li>
              <li>
                <BiCheck llassName='service__list-icon' />
                <p>bla bla bla bla bla bla bla bla bla bla bla</p>
              </li>
              <li>
                <BiCheck llassName='service__list-icon' />
                <p>bla bla bla bla bla bla bla bla bla bla bla</p>
              </li>
              <li>
                <BiCheck llassName='service__list-icon' />
                <p>bla bla bla bla bla bla bla bla bla bla bla</p>
              </li>
              <li>
                <BiCheck llassName='service__list-icon' />
                <p>bla bla bla bla bla bla bla bla bla bla bla</p>
              </li>
              <li>
                <BiCheck llassName='service__list-icon' />
                <p>bla bla bla bla bla bla bla bla bla bla bla</p>
              </li>
            </ul>
          </article>

        </div>
    </section>
  )
}

export default Services