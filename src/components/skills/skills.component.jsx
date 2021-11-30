import React from "react";
import Toolbox from "../toolbox/toolbox.component";
import Certifications from "../certifications/certifications.component";
import "./skills.styles.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Container, Col, Row, Card } from "react-bootstrap";

const Skills = () => (
  <div className="skills">
    <Container>
      {" "}
      <h1>skills</h1>
      <h3>education and certifications</h3>
      <Container>
        <Certifications />
      </Container>
      <h3>toolbox</h3>
      <p>Some of the tools I use to design and build.</p>
      <Container>
        <Toolbox />
      </Container>
    </Container>
  </div>
);

export default Skills;
