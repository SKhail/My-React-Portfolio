import React from 'react'
import '../styles/HomePage.css'
import { Container, Row, Col, Button } from 'react-bootstrap'
// import Projects from './Projects'
import CustomButton from './CustomButton'

export const HomePage = () => {
  return (
    <section id='HeroSection' className='hero-section'>
      <Container>
        <Row>
          <Col md={6} className='hero-content-box'>
            <div className='hero-content'>
              <span className='section-title'>Front-End Developer</span>
              <p className='hero-section-des'>
                I'm Said, as you might have gathered from the title, I've traversed various domains within the IT landscape. Amidst the challenging times of the COVID period, I
                ventured into entrepreneurship, establishing and later divesting my own company within the span of a year. Technology, in its entirety,has long captivated my
                interest.
                <br /> While my journey encompassed diverse IT realms, software development initially posed a unique challenge, one that intrigued me and continues to do so. Should
                you seek further insights or have any inquiries, please don't hesitate to reach out. I'm more than willing to share my experiences.
              </p>
              <CustomButton email='saidkhail091@gmail.com' />
            </div>
          </Col>
          <Col md={6} className='hero-img'>
            <img src='/Images/profilepic.JPG' className='img-fluid' alt='Profile-Image' />
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default HomePage
