import React from 'react'
import { useState } from 'react'
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import '../styles/Header.css'

function Header() {
  const [navActive, setNavActive] = useState(false)

  return (
    <Navbar expand='lg' className={`${navActive ? 'active' : ''}`}>
      <Container>
        <Navbar.Brand href='#'>
          <img src='./Images/said-khail.png' width='200px' alt='logo' />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav' className='justify-content-end'>
          <Nav>
            <Nav.Link as={Link} to='/'>
              Home
            </Nav.Link>
            <Nav.Link as={Link} to='/Projects'>
              Projects
            </Nav.Link>
            <NavDropdown title='Find-More' id='basic-nav-dropdown'>
              <NavDropdown.Item href='https://docs.google.com/document/d/1qWaTiffXX4ItqUoI5g0sjvk77pF3yBT0GhW5hSfHiNA/edit?usp=sharing' target='_blank' rel='noopener noreferrer'>
                View CV
              </NavDropdown.Item>
              <NavDropdown.Item href='https://github.com/SKhail' target='_blank' rel='noopener noreferrer'>
                Github
              </NavDropdown.Item>
              <NavDropdown.Item href='#action/3.3'>Coming Soon</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href='#action/3.4'>Coming Soon</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header
