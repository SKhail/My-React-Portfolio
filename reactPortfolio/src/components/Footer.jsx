import React, { useState } from 'react';
import '../styles/Footer.css';
import { Container, Row, Col, Button, Form, Modal } from 'react-bootstrap';

function Footer() {
  //Utilising usestate for the modal to work
  const [showModal, setShowmodal] = useState(false);

  //Handling  opening and closing of the modal
  const handleShowModal = () => setShowmodal(true);
  const handleCloseModal = () => setShowmodal(false);

  //Dealing with the submission form
  const handleSubmission = (event) => {
    event.preventDefault();
    // form logic

    handleCloseModal(); //Closing
  };

  return (
    <footer className='footer-section py-5'>
      <Container>
        <Row className='justify-content-center'>
          <Col xs={6} md={4}>
            <div className='contact-box'>
              <h2>Contact Me</h2>
              <p>If you have any questions, feel free to reach out to me </p>
              <ul className='list-unstyled'>
                <li>
                  <a href='mailto:saidkhail091@gmail.com' target='_blank' rel='noopener noreferrer'>
                    <img src='./Images/email.png' alt='Email Icon' target='_blank' width='30' height='30' />
                  </a>
                  <a href='https://github.com/SKhail' target='_blank' rel='noopener noreferrer'>
                    <img src='./Images/github-logo.png' alt='Github-Logo' width='30' height='30' />
                  </a>
                </li>
              </ul>
              {/* <div className='text-center'>
                <Button variant='primary' className='helloBtn' onClick={handleShowModal}>
                  Say Hello 👋🏿
                </Button> */}
            </div>
            {/* </div> */}
            <Modal show={showModal} onHide={handleCloseModal}>
              <Modal.Header closeButton>
                <Modal.Title>Contact Me </Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <Form onSubmit={handleSubmission}>
                  <Form.Group controlId='formName'>
                    <Form.Control type='text' placeholder='Your Name'></Form.Control>
                  </Form.Group>
                  <Form.Group controlId='formEmail'>
                    <Form.Control type='email' placeholder='Your Email'></Form.Control>
                  </Form.Group>
                  <Form.Group controlId='formMessage'>
                    <Form.Control type='textarea' rows={3} placeholder='Your Message'></Form.Control>
                  </Form.Group>
                  <div className='text-center'>
                    <Button variant='primary' type='submit'>
                      Send Message
                    </Button>
                  </div>
                </Form>
              </Modal.Body>
            </Modal>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
