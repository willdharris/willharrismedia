import React from "react";
import { Container, Navbar, Nav, NavDropdown, Row, Col } from "react-bootstrap";
import useInterval from "../../hooks/useInterval";
import "./header.styles.scss";

function Header() {
  return (
    <header className="header">
      <Container>
        <Row>
          <Col>
            <Navbar collapseOnSelect expand="lg" bg="none" variant="dark">
              <Navbar.Brand href="#home">wh</Navbar.Brand>
              <Navbar.Toggle aria-controls="responsive-navbar-nav" />
              <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="ms-auto">
                  <Nav.Link href="#about">
                    <span className="nav-num">01.</span> About
                  </Nav.Link>
                  <Nav.Link href="#work">
                    <span className="nav-num">02.</span>Work
                  </Nav.Link>
                  <Nav.Link href="#skills">
                    <span className="nav-num">03.</span>Skills
                  </Nav.Link>
                  <Nav.Link href="#contact">
                    <span className="nav-num">04.</span>Contact
                  </Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Navbar>
          </Col>
        </Row>
      </Container>
    </header>
  );
}

export default Header;
