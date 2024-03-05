import React from 'react'
import { useState, useEffect } from 'react'
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap'
import '../styles/Header.css'
function Header() {
  const [navActive, setNavActive] = useState(false)

  //Open navabr
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
    <Navbar bg='light' expand='lg' className={`${navActive ? 'active' : ''}`}>
      <Container>
        <Navbar.Brand href='#'>
          <img src='./Images/said-khail.png' width='200px' alt='logo' />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav' className='justify-content-end'>
          <Nav>
            <Nav.Link href='#home'>Home</Nav.Link>
            <Nav.Link href='#link'>Projects</Nav.Link>
            <NavDropdown title='Find-More' id='basic-nav-dropdown'>
              <NavDropdown.Item href='#'>Download CV</NavDropdown.Item>
              <NavDropdown.Item href='https://github.com/SKhail' target='_blank' rel='noopener noreferrer'>
                Github
              </NavDropdown.Item>
              <NavDropdown.Item href='#action/3.3'>Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href='#action/3.4'>Separated link</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header

//     <div>
//       <Navbar expand='lg' className='bg-body-tertiary'>
//         <Container>
//           {/* <Navbar.Brand href='#home'>React-Bootstrap</Navbar.Brand> */}

//           <Navbar.Brand href='#home'>
//             <img src={logo} width='30' height='30' className='d-inline-block align-top' alt='React Bootstrap logo' />
//           </Navbar.Brand>
//           <Navbar.Toggle aria-controls='basic-navbar-nav' />
//           <Navbar.Collapse id='basic-navbar-nav'>
//             <Nav className='me-auto'>
//               {/* This NavDropdown is hidden on large screens */}
//               <NavDropdown title='Dropdown' id='basic-nav-dropdown' hidden lg>
//                 <NavDropdown.Item href='#action/3.1'>Profile</NavDropdown.Item>
//                 <NavDropdown.Item href='#action/3.2'>About-Me</NavDropdown.Item>
//                 <NavDropdown.Item href='#action/3.3'>Projects</NavDropdown.Item>
//                 <NavDropdown.Divider />
//                 <NavDropdown.Item href='#action/3.4'>Contact-Me</NavDropdown.Item>
//               </NavDropdown>
//             </Nav>
//           </Navbar.Collapse>
//         </Container>
//       </Navbar>
//     </div>
//   )
//
