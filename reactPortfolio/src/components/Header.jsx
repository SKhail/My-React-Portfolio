import React from 'react'
import { useState, useEffect } from 'react'
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import '../styles/Header.css'

function Header() {
  const [navActive, setNavActive] = useState(false)

  //Open navbar
  const toggleNav = () => {
    setNavActive(!navActive)
  }

  //Close navbar
  const closeMenu = () => {
    setNavActive(false)
  }

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 500) {
        closeMenu() // Call to close the menu
      }
    }
    //Include an event Listener
    window.addEventListener('resize', handleResize)

    //Returning
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  useEffect(() => {
    if (window.innerWidth <= 1200) {
      closeMenu() // Call to close the menu
    }
  }, [])

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
              <NavDropdown.Item href='#'>Download CV</NavDropdown.Item>
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
