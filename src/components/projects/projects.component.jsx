import { React, useState } from "react";
import "./projects.styles.scss";
import { Container, Col, Row, Card } from "react-bootstrap";

const Projects = () => {
  const [projects, setProjects] = useState([
    {
      title: ["Spotify Clone"],
      subtitle: "React, OAuth, RestAPI",
      description: "spotify clone full stack project",
      id: 1,
    },
    {
      title: ["TV Programming Guide"],
      subtitle: "HTML, CSS, Vanilla JS, APIs",
      description: "custom epg for ops team",
      id: 2,
    },
    {
      title: ["Custom Lookup Web App"],
      subtitle: "HTML, IBM Carbon Design System, Vanilla JS",
      description: "custom lookup app for ops team",
      id: 3,
    },
  ]);
  return (
    <Row xs={1} md={3} lg={3} className="g-4">
      {projects.map((project, idx) => (
        <Col>
          <Card className="skillcard">
            <Card.Body>
              <Card.Title>{project.title}</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                {project.subtitle}
              </Card.Subtitle>
              <Card.Text>{project.description}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
};

export default Projects;
