import React from "react";
import Toolbox from "../toolbox/toolbox.component";
import Certifications from "../certifications/certifications.component";
import "./skills.styles.scss";
import { Container } from "react-bootstrap";

const Skills = () => (
  <section className="skills" id="skills">
    <Container>
      {" "}
      <div className="skills-inner">
        <div className="skills-header">
          <h1>
            <span className="sec-num">03.</span>Skills
          </h1>
          <div className="skills-header">
            <div className="skills-sub">
              <h4>Toolbox</h4>
              <h5>Some of the tools I use to design and build.</h5>
            </div>
          </div>
          <Container>
            <Toolbox />
          </Container>

          <div className="horizontal-divide"></div>
          <div className="skills-sub">
            <h4>Certifications</h4>
          </div>
        </div>
        <Container>
          <Certifications />
        </Container>
      </div>
    </Container>
  </section>
);

export default Skills;
