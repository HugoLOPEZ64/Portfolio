import React from 'react'
import './footer.css'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {MdOutlineEmail} from 'react-icons/md'

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>hugo lopez</a>

      <ul className='permalinks'>
        <li><a href="#">home</a></li>
        <li><a href="#about">about</a></li>
        <li><a href="#experience">experience</a></li>
        <li><a href="#services">services</a></li>
        <li><a href="#portfolio">portfolio</a></li>
        <li><a href="#testimonials">testimonials</a></li>
        <li><a href="#contact">contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://github.com/HugoLOPEZ64"><FaGithub /> </a>
        <a href="mailto:hugo.lopez002@gmail.com"><MdOutlineEmail/></a>
        <a href="https://www.linkedin.com/in/hugo-lopez-508388224/"><BsLinkedin /></a>
      </div>

      <div className="footer__copyright">
        <small>Thanks for stopping by :-)</small>
      </div>

    </footer>
  )
}

export default Footer