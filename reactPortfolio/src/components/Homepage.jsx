import React from 'react'
import '../styles/HeroSection.css'

export const HeroSection = () => {
  return (
    <section id='HeroSection' className='hero-section'>
      <div className='hero-content-box'>
        <div className='hero-content'>
          <p className='section-title'>Hello, I am Said</p>
          <h1 className='hero-section-title'>
            <span className='hero-title-color'>Front-End Developer</span>
            <br />
          </h1>
          <p className='hero-section-des'>
            I'm Said, as you might have gathered from the title, I've traversed various domains within the IT landscape. Amidst the challenging times of the COVID period, I
            ventured into entrepreneurship, establishing and later divesting my own company within the span of a year. Technology, in its entirety,has long captivated my interest.
            <br /> While my journey encompassed diverse IT realms, software development initially posed a unique challenge, one that intrigued me and continues to do so. Should you
            seek further insights or have any inquiries, please don't hesitate to reach out. I'm more than willing to share my experiences.
          </p>
        </div>
        <button className='btn btn-primary'>Drop us a message</button>
      </div>
      <div className='hero-img'>
        <img src='/Images/profile-pic.png' width='400' height='400' alt='ProfileImg' />
      </div>
    </section>
  )
}

export default HeroSection
