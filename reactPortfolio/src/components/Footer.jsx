import React from 'react'
import '../styles/Footer.css'
import { Container, Row, Col, Button, Form } from 'react-bootstrap'

export const Footer = () => {
  return (
    <footer className='footer-section bg-light py-5'>
      <Container>
        <Row>
          <Col md={6}>
            <h2>Contact Me</h2>
            <p>If you have any questions, feel free to reach out to me </p>
            <ul className='list-unstyled'>
              <li>Email: saidkhail091@gmail.com</li>
              <li>Phone: 0742819345</li>
              <li>
                Github:{' '}
                <a href='https://github.com/SKhail' target='_blank' rel='noopener noreferrer'>
                  Github Said
                </a>
              </li>
            </ul>
          </Col>
          <Col md={6}>
            <h2>Say Hello 👋🏿</h2>
            <Form>
              <Form.Group controlId='formName'>
                <Form.Control type='text' placeholder='Your Name'></Form.Control>
              </Form.Group>

              <Form.Group controlId='formEmail'>
                <Form.Control type='email' placeholder='Your Email'></Form.Control>
              </Form.Group>

              <Form.Group controlId='formMessage'>
                <Form.Control type='textarea' rows={3} placeholder='Your Message'></Form.Control>
              </Form.Group>

              <Button variant='primary' type='submit'>
                Send Message
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer
