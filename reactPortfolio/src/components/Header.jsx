import React from 'react'

import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'
import logo from '../assets/logo.png'

export const Header = () => {
  return (
    <div>
      <Navbar expand='lg' className='bg-body-tertiary'>
        <Container>
          {/* <Navbar.Brand href='#home'>React-Bootstrap</Navbar.Brand> */}

          <Navbar.Brand href='#home'>
            <img src={logo} width='30' height='30' className='d-inline-block align-top' alt='React Bootstrap logo' />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='me-auto'>
              {/* This NavDropdown is hidden on large screens */}
              <NavDropdown title='Dropdown' id='basic-nav-dropdown' hidden lg>
                <NavDropdown.Item href='#action/3.1'>Profile</NavDropdown.Item>
                <NavDropdown.Item href='#action/3.2'>About-Me</NavDropdown.Item>
                <NavDropdown.Item href='#action/3.3'>Projects</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href='#action/3.4'>Contact-Me</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  )
}

export default Header
