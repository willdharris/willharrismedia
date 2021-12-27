import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import headshot from "../../assets/profilepicsquare-300x300.jpeg";

import "./about.styles.scss";

const About = () => (
  <section className="about" id="about">
    <Container>
      <div className="about-inner">
        <h1>
          <span className="sec-num">01.</span>About
        </h1>
        <Row className="center-text">
          <Col md={7} lg={6}>
            <div className="about-copy">
              <ul>
                <li>
                  I thrive in the space between the creative and the technical.
                  With a background in music and audio engineering, then
                  spending over 7 years in tech, I found my sweet spot in
                  Frontend development. I love the collaboration of science and
                  art that make up Frontend. I'm passionate about intentional
                  design, clean code, and building tools and experiences that
                  ultimately improve the human experience.{" "}
                </li>
                <li>
                  In my current job, I support cloud applications at IBM and
                  build custom apps to improve business operations. I'm at home
                  with HTML, CSS, JavaScript, and React, but I love learning new
                  technologies and languages.{" "}
                </li>
                <li>
                  Offline, I'm helping my wife raise our three little humans.
                  And if the stars align, I'm somewhere off the grid on a
                  mountain bike...but realistically I'm probably just on the
                  couch watching football or the Braves.
                </li>
              </ul>
              {/* <p className="about-copy">
                Coming from a background in music and audio engeering, then
                spending over 7 years in tech, I found my sweet spot in Frontend
                development. I thrive in the space between the technical and the
                creative, so I love that I get to be scientifically artistic in
                building tools that solve problems and help people. I’m a
                forever learner, always curious to discover the why behind the
                what. I’m a dot connector and detail stickler. I’m passionate
                about intentional design and clean code that ultimately helps
                improve the human experience. <br />
                In my current job, I support cloud applications at IBM and build
                custom apps to improve business operations. <br />
                I’m at home with HTML, CSS, JavaScript, and React, but I love
                learning new technologies and languages. I'm currently dabbling
                in Python and Apex for Salesforce. <br />
                Offline, I’m helping my wife raise our three little humans. And
                if the stars align, I’m somewhere off the grid on a mountain
                bike...but realistically I’m probably just on the couch watching
                football or the Braves.
              </p> */}
              {/* <p className="about-copy">
              I've worked in tech for over 7 years, in various creative,
              technical, and customer facing roles. But I found my sweet spot in
              Front End development. I thrive in the space between the creative
              and the technical, so I love that I get to be artistic{" "}
              <em>and</em> scientific in building tools that solve problems and
              help people. I’m a forever learner, always curious to discover the
              why behind the what. I’m a dot connector and detail stickler. I’m
              passionate about intentional design and clean code that ultimately
              helps improve the human experience. <br />
              In my current job, I support a cloud application at IBM and build
              custom apps to improve business operations. <br />
              I’m at home with HTML, CSS, JavaScript, and React, but I love
              learning new technologies and languages. I'm currently dabbling in
              Python and Apex for Salesforce. <br />
              Offline, I’m helping my wife raise our three little humans. And if
              the stars align, I’m somewhere off the grid on a mountain
              bike...but realistically I’m probably just on the couch watching
              football or the Braves.
            </p> */}
            </div>
          </Col>
          <Col className="image-container">
            <div>
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

            <div className="socials">
              <a
                href="https://www.linkedin.com/in/willdharris/"
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon icon={["fab", "linkedin"]} />
              </a>
              <a
                href="https://github.com/willdharris"
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon icon={["fab", "github"]} />
              </a>
            </div>
          </Col>
        </Row>
      </div>
    </Container>
  </section>
);

export default About;
