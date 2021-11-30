import React from "react";
import { Container } from "react-bootstrap";

import "./about.styles.scss";

const About = () => (
  <div className="about">
    <Container>
      <h1>about me</h1>

      <p className="about-copy">
        I've worked in tech for over 7 years, in various creative, technical,
        and customer facing roles. But I found my sweet spot in Front End
        development. I thrive in the space between the creative and the
        technical, so I love that I get to be artistic <em>and</em> scientific
        in building tools that solve problems and help people. I’m a forever
        learner, always curious to discover the why behind the what. I’m a dot
        connector and detail stickler. I’m passionate about intentional design
        and clean code that ultimately helps improve the human experience.{" "}
        <br />
        In my current job, I support a cloud application at IBM and build custom
        apps to improve business operations. <br />
        I’m at home with HTML, CSS, JavaScript, and React, but I love learning
        new technologies and languages. I'm currently dabbling in Python and
        Apex for Salesforce. <br />
        Offline, I’m helping my wife raise our three little humans. And if the
        stars align, I’m somewhere off the grid on a mountain bike...but
        realistically I’m probably just on the couch watching football or the
        Braves.
      </p>
    </Container>
  </div>
);

export default About;
