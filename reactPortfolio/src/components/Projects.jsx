import React, { useState } from 'react'
import { Container, Row, Col, Button, Card } from 'react-bootstrap'
import reactPortfolio from '../data/App.json'
import projects from '../data/App.json'

const Projects = () => {
  console.log('data: ', reactPortfolio)
  //   [ dataNameObj, method/function to update that STATE ]
  const [projects, setProjects] = useState(reactPortfolio.portfolio)

  return (
    <Container>
      <h2 className='mb-4'>Projects</h2>
      <Row className='rol-cols-1 row-cols-md-2 row-cols-lg-3 g-4'>
        {projects.map((item, index) => (
          <Col key={index}>
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
          </Col>
        ))}
      </Row>
    </Container>
  )
}

export default Projects
