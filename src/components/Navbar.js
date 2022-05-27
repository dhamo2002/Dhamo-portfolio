import React from 'react';
import { Navbar,Nav,Container } from 'react-bootstrap';



const NavBar = () => {
  return (

        <div>
            <Navbar bg="dark" variant='dark' expand="lg">
                 <Container>
                    <Navbar.Brand href="#home">ISHRAE GCT</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                      <Nav className="ms-auto">
                        <Nav.Link >Home</Nav.Link>
                        <Nav.Link >Team</Nav.Link>
                        <Nav.Link >Contact us</Nav.Link>
                      </Nav>
                    </Navbar.Collapse>
                 </Container>
            </Navbar>
        </div>

    
  )
}

export default NavBar