import React from "react";
import {Navbar,Container,Nav } from 'react-bootstrap';
import './Nav.css';



const Navs=()=>{
    return(
        <Navbar  className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home">I know</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Html</Nav.Link>
              <Nav.Link href="#link">css</Nav.Link>
              <Nav.Link href="#home">bootstrap</Nav.Link>
              <Nav.Link href="#link">java script</Nav.Link>
              <Nav.Link href="#home">react</Nav.Link>
             
             
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

    )
}


export default Navs;