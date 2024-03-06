import React, { useState } from 'react'
import { Container, Row, Col, Button, Card, Carousel } from 'react-bootstrap'
import '../styles/Projects.css'
import reactPortfolio from '../data/App.json'

const Projects = () => {
  console.log('data: ', reactPortfolio)
  //   [ dataNameObj, method/function to update that STATE ]
  const [projects, setProjects] = useState(reactPortfolio.portfolio)

  return (
    <Container>
      <h2 className='mb-4 text-center'></h2>
      <div className=' d-flex justify-content-center'>
        <Carousel className='w-50 h-50 mb-2'>
          {projects.map((item, index) => (
            <Carousel.Item key={index}>
              <Card className=''>
                <Card.Img variant='top' src={item.src} className='project-img' />
                <Card.Body className='custom-body'>
                  <Card.Title className='custom-title text-center'>{item.title}</Card.Title>
                  <Card.Text className='custom-text text-center'>{item.description}</Card.Text>
                  <Button variant='info' href={item.link}>
                    View Project
                  </Button>
                </Card.Body>
              </Card>
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
    </Container>
  )
}

export default Projects
