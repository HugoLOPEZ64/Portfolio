import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/hugolopez.png'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>hello, I'm</h5>
        <h1>hugo lopez</h1>
        <h5 className="text-light">Web developer</h5>
        <CTA />
        <HeaderSocials />

        <div className="me">
          <img src={ME} alt="that's me" />
        </div>

        <a href="#contact" className='scroll__down'> scroll down {'>'}{'>'}{'>'} </a>
      </div>
    
    </header>
  )
}

export default Header