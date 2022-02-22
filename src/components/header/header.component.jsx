import { React, useState } from "react";
import { Container, Navbar, Nav, Row, Col } from "react-bootstrap";
import Hamburger from "hamburger-react";
import "./header.styles.scss";

function Header() {
  const [isOpen, setOpen] = useState(false);

  return (
    <header className="header">
      <Container>
        <Row>
          <Col>
            <Navbar
              collapseOnSelect
              expand="lg"
              bg="none"
              variant="dark"
              className={`${isOpen ? "open" : ""}`}
            >
              <Navbar.Brand href="#home">
                <span className="curly">{"{"}</span>
                <span className="description">wh</span>
                <span className="curly">{"}"}</span>
              </Navbar.Brand>
              <Navbar.Toggle aria-controls="responsive-navbar-nav">
                {" "}
                <Hamburger toggled={isOpen} toggle={setOpen} />
              </Navbar.Toggle>

              <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="ms-auto" onClick={() => setOpen(false)}>
                  <Nav.Link href="#about">
                    <div className="nav-section">
                      <span className="nav-num">01.</span> <span>About</span>
                    </div>
                  </Nav.Link>
                  <Nav.Link href="#work">
                    <div className="nav-section">
                      <span className="nav-num">02.</span>Work
                    </div>
                  </Nav.Link>
                  <Nav.Link href="#skills">
                    <div className="nav-section">
                      <span className="nav-num">03.</span>Skills
                    </div>
                  </Nav.Link>
                  <Nav.Link href="#contact">
                    <div className="nav-section">
                      <span className="nav-num">04.</span>Contact
                    </div>
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
