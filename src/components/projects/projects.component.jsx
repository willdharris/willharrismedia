import { React } from "react";
import "./projects.styles.scss";
import { Col, Row, Card } from "react-bootstrap";
import spotify from "../../assets/spotify.png";
import epg from "../../assets/epg.png";
import lookup from "../../assets/lookup.png";

const Projects = () => {
  const projects = [
    {
      title: ["TV Programming Guide"],
      subtitle: "HTML, CSS, Vanilla JS, REST API",
      description:
        "An app to view the programming schedules of Discovery networks all in one place. Built for ops team to eliminate the need to search 16 different websites each day, saving hours of labor per year.",
      repo: "https://github.com/willdharris/discovery",
      demo: "https://discoveryepg.netlify.app/",
      img: epg,
      id: 1,
    },
    {
      title: ["Custom Lookup Web App"],
      subtitle: "IBM Carbon Design System, Vanilla JS, XLS to JSON",
      description:
        "A web app to simplify and expedite manual lookup processes. XLS sheets are converted to JSON, objects are compared, then delta list is generated and exported. ",
      repo: "https://github.com/willdharris/vlm-distro-map",
      demo: "https://vlm-ms-tools.netlify.app/",
      img: lookup,
      id: 2,
    },
    {
      title: ["Spotify Profile App"],
      subtitle:
        "Node.js, Express, OAuth, Spotify API, React, Styled Components",
      description:
        "A full stack web app to visualize personalized Spotify data.",
      repo: "https://github.com/willdharris/spotify-app",
      demo: "http://whm-spotify.herokuapp.com/",
      img: spotify,
      id: 3,
    },
  ];
  return (
    <Row xs={1} md={1} lg={2} className="g-4 justify-content-center">
      {projects.map((project, idx) => (
        <Col key={`project${project.id}`}>
          <Card className="projects">
            <Card.Body>
              <Card.Title className="title">{project.title}</Card.Title>
              <Card.Subtitle className="mb-2 ">
                {project.subtitle}
              </Card.Subtitle>
              <Card.Img variant="top" src={project.img} />
              <Card.Text>{project.description}</Card.Text>
              <a href={project.repo} target="_blank" rel="noreferrer">
                Repo
              </a>{" "}
              <a href={project.demo} target="_blank" rel="noreferrer">
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
