import React from 'react'
import { useState, useEffect } from 'react'
// import { Link } from 'react-scroll'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'

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
    <nav className={`navbar ${navActive ? 'active' : ''}`}>
      <div>
        <img src='./Images/said-khail.png' width='200px' alt='logo' />
      </div>
    </nav>
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
