import React from "react";
import Projects from "../projects/projects.component";
import { Container, Col, Row, Card } from "react-bootstrap";

import "./work.styles.scss";

const Work = () => (
  <div className="work">
    <Container>
      <h1>work</h1>
      <p>A selection of web projects I have built.</p>
      <Container>
        <Projects />
      </Container>
    </Container>
  </div>
);

export default Work;
