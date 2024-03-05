import React, { useState } from 'react'
import { Container, Row, Col, Button, Card, Carousel } from 'react-bootstrap'
import reactPortfolio from '../data/App.json'

const Projects = () => {
  console.log('data: ', reactPortfolio)
  //   [ dataNameObj, method/function to update that STATE ]
  const [projects, setProjects] = useState(reactPortfolio.portfolio)

  return (
    <Container>
      <h2 className='mb-4'>Projects</h2>
      <Carousel>
        {projects.map((item, index) => (
          <Carousel.Item key={index}>
            <Card className='h-100'>
              <Card.Img variant='top' src={item.src} className='project-img' />
              <Card.Body>
                <Card.Title>{item.title}</Card.Title>
                <Card.Text>{item.description}</Card.Text>
                <Button variant='primary' href={item.link}>
                  View Project
                </Button>
              </Card.Body>
            </Card>
          </Carousel.Item>
        ))}
      </Carousel>
    </Container>
  )
}

export default Projects
