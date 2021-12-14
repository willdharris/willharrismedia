import React from "react";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Col, Row, Card } from "react-bootstrap";
import "./toolbox.styles.scss";

const Toolbox = () => {
  const [skills, setSkills] = useState([
    { title: ["fab", "html5"], subtitle: "HTML", id: 1 },
    { title: ["fab", "css3"], subtitle: "CSS", id: 2 },
    { title: ["fab", "js"], subtitle: "JavaScript", id: 3 },
    { title: ["fab", "react"], subtitle: "React", id: 4 },
    { title: ["fab", "sass"], subtitle: "Sass", id: 7 },
    { title: ["fab", "bootstrap"], subtitle: "Bootstrap", id: 8 },

    { title: ["fab", "chrome"], subtitle: "Chrome DevTools", id: 5 },
    { title: "terminal", subtitle: "CLI", id: 10 },
    { title: ["fab", "git-alt"], subtitle: "Git", id: 6 },
    { title: ["fab", "github"], subtitle: "GitHub", id: 6 },
    { title: ["fab", "aws"], subtitle: "AWS", id: 9 },
    { title: ["fab", "sketch"], subtitle: "Sketch", id: 11 },
  ]);
  return (
    <Row xs={2} md={3} lg={5} className="g-4 justify-content-center">
      {skills.map((skill, idx) => (
        <Col>
          <Card className="skillcard">
            <Card.Body>
              <Card.Title>
                <FontAwesomeIcon icon={skill.title} size="3x" />
              </Card.Title>
              <Card.Subtitle className="mb-2 ">{skill.subtitle}</Card.Subtitle>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
};

export default Toolbox;
