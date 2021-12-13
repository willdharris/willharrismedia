import { React, useState } from "react";
import "./projects.styles.scss";
import { Container, Col, Row, Card } from "react-bootstrap";
import spotify from "../../assets/spotify.png";
import epg from "../../assets/epg.png";
import lookup from "../../assets/lookup.png";

const Projects = () => {
  const [projects, setProjects] = useState([
    {
      title: ["Spotify Clone"],
      subtitle: "React, OAuth, RestAPI",
      description: "spotify clone full stack project",
      repo: "https://github.com/willdharris",
      demo: "https://www.spotify.com/us/",
      img: spotify,
      id: 1,
    },
    {
      title: ["TV Programming Guide"],
      subtitle: "HTML, CSS, Vanilla JS, APIs",
      description: "custom epg for ops team",
      repo: "https://github.com/willdharris/discovery",
      demo: "https://discoveryepg.netlify.app/",
      img: epg,
      id: 2,
    },
    {
      title: ["Custom Lookup Web App"],
      subtitle: "IBM Carbon Design System, Vanilla JS, xls to JSON",
      description: "custom lookup app for ops team",
      repo: "https://github.com/willdharris/vlm-distro-map",
      demo: "https://vlm-ms-tools.netlify.app/",
      img: lookup,
      id: 3,
    },
  ]);
  return (
    <Row xs={1} md={1} lg={2} className="g-4 justify-content-center">
      {projects.map((project, idx) => (
        <Col>
          <Card className="projects">
            <Card.Body>
              <Card.Title>{project.title}</Card.Title>
              <Card.Subtitle className="mb-2 ">
                {project.subtitle}
              </Card.Subtitle>
              <Card.Img variant="top" src={project.img} />
              <Card.Text>{project.description}</Card.Text>
              <a href={project.repo} target="_blank">
                Repo
              </a>{" "}
              <a href={project.demo} target="_blank">
                Demo
              </a>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
};

export default Projects;
