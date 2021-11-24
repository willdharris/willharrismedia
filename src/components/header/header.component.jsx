import React from "react";
import { Container, Navbar, Nav, NavDropdown } from "react-bootstrap";

import "./header.styles.scss";
function Header() {
  return (
    <div className="header">
      <Navbar collapseOnSelect expand="lg" bg="none" variant="dark">
        <Container>
          <Navbar.Brand href="#home">wh</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#about">about</Nav.Link>
              <Nav.Link href="#work">work</Nav.Link>
              <Nav.Link href="#skills">skills</Nav.Link>
              <Nav.Link href="#contact">contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Header;
