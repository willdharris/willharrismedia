import React from "react";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Col, Row, Card } from "react-bootstrap";
import "./toolbox.styles.scss";

const Toolbox = () => {
  const [skills, setSkills] = useState([
    { title: ["fab", "html5"], subtitle: "html", id: 1 },
    { title: ["fab", "css3"], subtitle: "css", id: 2 },
    { title: ["fab", "js"], subtitle: "javascript", id: 3 },
    { title: ["fab", "react"], subtitle: "react", id: 4 },
    { title: ["fab", "sass"], subtitle: "sass", id: 7 },
    { title: ["fab", "bootstrap"], subtitle: "bootstrap", id: 8 },

    { title: ["fab", "chrome"], subtitle: "chrome devtools", id: 5 },
    { title: "terminal", subtitle: "cli", id: 10 },
    { title: ["fab", "git-alt"], subtitle: "git", id: 6 },
    { title: ["fab", "github"], subtitle: "github", id: 6 },
    { title: ["fab", "aws"], subtitle: "aws", id: 9 },
    { title: ["fab", "sketch"], subtitle: "sketch", id: 11 },
  ]);
  return (
    <Row xs={2} md={3} lg={6} className="g-4">
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
