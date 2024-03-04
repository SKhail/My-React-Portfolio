import React from 'react'
import '../styles/HeroSection.css'
export const HeroSection = () => {
  return (
    <section id='HeroSection' className='hero-section'>
      <div className='hero-content-box'>
        <div className='hero-content'>
          <p className='section-title'>Hello, I am Said</p>
          <h1 className='hero-section-title'>
            <span className='hero-title-color'>Front-End</span>
            {''}
            <br />
            Developer
          </h1>
          <p className='hero-section-des'>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur, perspiciatis!
            <br /> Lorem ipsum dolor sit amet.
          </p>
        </div>
        <button className='btn btn-primary'>Drop us a message</button>
      </div>
      <div className='hero-Img'>
        <img src='/Images/profile-pic.png' alt='ProfileImg' />
      </div>
    </section>
  )
}

export default HeroSection
