import React from 'react'
import CV from '../../assets/HUGOLOPEZ.pdf'

const CTA = () => {
  return (
    <div className='cta'>
        <a href={CV} download className='btn'>download CV</a>
        <a href="#contact" className='btn btn-primary'>let's talk</a>
    </div>
  )
}

export default CTA