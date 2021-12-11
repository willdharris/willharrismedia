import React from "react";
import Header from "../components/header/header.component";
import { Container, Col, Row, Card, Image } from "react-bootstrap";
import headshot from "../assets/profilepicsquare-300x300.jpeg";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./homepage.styles.scss";

const HomePage = () => (
  <section className="homepage">
    <div className="bg">
      <Container>
        <Row>
          <Col md={7} lg={6}>
            <div className="center-text">
              <div>
                <div className="home-text text-white">
                  <p>Hi, my name is</p>
                  <h1 id="name">Will Harris.</h1>
                </div>
                <div className="home-sub-text">
                  <p>Frontend Developer and Problem Solver.</p>
                </div>
                <div className="link-horizontal">
                  <ul>
                    <li>
                      <div className="center-content">
                        <a
                          href="https://www.linkedin.com/in/willdharris/"
                          className="icon-btn text-white"
                          target="_blank"
                        >
                          <FontAwesomeIcon
                            icon={["fab", "linkedin"]}
                            size="3x"
                          />
                          <h6 className="text-center text-white">LinkedIn</h6>
                        </a>
                      </div>
                    </li>
                    <li className="borders-right p-0"></li>
                    <li>
                      <div className="center-content">
                        <a
                          href="https://github.com/willdharris"
                          className="icon-btn text-white"
                          target="_blank"
                        >
                          <FontAwesomeIcon icon={["fab", "github"]} size="3x" />
                          <h6 className="text-center text-white">Github</h6>
                        </a>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </Col>

          <Col>
            <div className="center-text">
              <div className="profile-pic">
                <div className="wrapper">
                  <div>
                    <Image
                      src={headshot}
                      alt="Photo of Will Harris"
                      rounded
                      fluid
                    />
                  </div>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  </section>
);

export default HomePage;
