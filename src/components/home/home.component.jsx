import React from "react";
import { Container, Row, Nav } from "react-bootstrap";

import "./home.styles.scss";

function Home() {
  const description = [
    "Problem Solver",
    "Dot Connector",
    "Detail Stickler",
    "Design Thinker",
  ];

  return (
    <section className="home" id="home">
      <div className="bg">
        <Container className="home-landing">
          <Row>
            <div className="home-body">
              <div>
                <div className="greeting ">Hi, my name is</div>
                <div className="big-heading" id="name">
                  Will Harris.
                </div>
                <div className="sub-heading">
                  Frontend Developer and <span className="curly">{"{"}</span>
                  <span className="description">{description[0]}</span>
                  <span className="curly">{"}"}</span>.
                </div>
                <nav
                  className="side-nav"
                  aria-label="Main Navigation."
                  id="section-nav"
                >
                  <ul>
                    <li>
                      <Nav.Link
                        className="side-link"
                        href="#home"
                        aria-label="Go to first section. Home."
                      >
                        00
                      </Nav.Link>
                    </li>
                    <li>
                      <Nav.Link
                        className="side-link"
                        href="#about"
                        aria-label="Go to second section. About."
                      >
                        01
                      </Nav.Link>
                    </li>
                    <li>
                      <Nav.Link
                        className="side-link"
                        href="#work"
                        aria-label="Go to second section. Work."
                      >
                        02
                      </Nav.Link>
                    </li>
                    <li>
                      <Nav.Link
                        className="side-link"
                        href="#skills"
                        aria-label="Go to third section. Skills."
                      >
                        03
                      </Nav.Link>
                    </li>
                    <li>
                      <Nav.Link
                        className="side-link"
                        href="#contact"
                        aria-label="Go to fourth section. Contact."
                      >
                        04
                      </Nav.Link>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </Row>
        </Container>
      </div>
    </section>
  );
}

export default Home;
