import "./NavBarStyles.css"

import React from 'react'
import { Link } from "react-router-dom"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { HashLink as HLink } from 'react-router-hash-link';

const NavBar = () => {
  return (
  
    <Navbar fixed="top" expand="sm" id="nav">
    <Container>
      <Navbar.Brand href="/">Tom Davies</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="justify-content-end" style={{ width: "100%" }}>
          
          <Nav.Link href="/about">About</Nav.Link>
          <Nav.Link href="/project">Projects</Nav.Link>
          
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
);
}

export default NavBar
