import React from "react";
import Projects from "../projects/projects.component";
import { Container } from "react-bootstrap";

import "./work.styles.scss";

const Work = () => (
  <section className="work" id="work">
    <Container>
      <div className="work-inner">
        <div className="work-header">
          <h1>
            <span className="sec-num">02.</span>Work
          </h1>
          <h4>A selection of web projects I've built.</h4>
        </div>
        <Container className="work-projects">
          <Projects />
        </Container>
      </div>
    </Container>
  </section>
);

export default Work;
