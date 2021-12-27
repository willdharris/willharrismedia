import { React } from "react";
import "./certifications.styles.scss";
import { Col, Row, Card } from "react-bootstrap";
import aws from "../../assets/aws.png";
import ibmReact from "../../assets/ibm-react.png";
import designThinking from "../../assets/design-thinking.png";
import agile from "../../assets/agile.png";
import ai from "../../assets/ai.png";
import people from "../../assets/people.png";
import dataSci from "../../assets/data-science.png";

const Certifications = () => {
  const certifications = [
    {
      title: ["AWS Cloud Practioner"],
      subtitle: "AWS",
      description: "Certified AWS Cloud Practioner",
      img: aws,
      url: "https://www.credly.com/badges/39d95502-18bb-4c57-babf-f6c39667d061/public_url",
      id: 1,
      key: 1,
    },
    {
      title: ["IBM Carbon Design System - React"],
      subtitle: "IBM",
      description: "Certified IBM Carbon Design System for React",
      img: ibmReact,
      url: "https://www.credly.com/badges/426459ba-5d00-49b2-b594-90e22bfa9b6c/public_url",
      id: 2,
      key: 2,
    },
    {
      title: ["IBM Enterprise Design Thinking"],
      subtitle: "IBM",
      description: "Certified IBM Design Thinking Practioner",
      img: designThinking,
      url: "https://www.credly.com/badges/de65dfc7-9569-4940-ad79-330682eb5229/public_url",
      id: 3,
      key: 3,
    },
    {
      title: ["EDT - Team Essentials for AI"],
      subtitle: "IBM",
      description:
        "Certified IBM Enterprise Design Thinking - Team Essentials for AI",
      img: ai,
      url: "https://www.credly.com/badges/3b5cd61b-2012-4ed2-a7ce-5a5dff36d7f9/public_url",
      id: 4,
      key: 4,
    },
    {
      title: ["IBM Agile Exlporer"],
      subtitle: "IBM",
      description: "Certified IBM Agile Exlporer",
      img: agile,
      url: "https://www.credly.com/badges/05039495-b01c-4d95-b9b8-3967e7dbb411/public_url",
      id: 5,
      key: 5,
    },
    {
      title: ["IBM People Skills"],
      subtitle: "IBM",
      description:
        "Certified People Skills - Communication, Presentation, Collaboration, and Problem Solving",
      img: people,
      url: "https://www.credly.com/badges/e238f4d7-d174-470d-bab5-dda8bfb328f3/public_url",
      id: 6,
      key: 6,
    },
    {
      title: ["IBM Data Science Foundations"],
      subtitle: "IBM",
      description: "Certified Data Science Foundations - Level 1",
      img: dataSci,
      url: "https://www.credly.com/badges/5de4892d-e566-4211-b58a-da33eb55bee1/public_url",
      id: 7,
      key: 7,
    },
  ];
  return (
    <Row xs={1} sm={2} md={2} lg={4} className="g-4 justify-content-center">
      {certifications.map((certification, idx) => (
        <Col key={`cert${certification.id}`}>
          <Card className="skillcard">
            <Card.Link href={certification.url} target="_blank">
              {" "}
              <Card.Body>
                <Card.Title>{certification.title}</Card.Title>
                <Card.Img variant="top" src={certification.img} />
                <Card.Text>{certification.description}</Card.Text>
              </Card.Body>
            </Card.Link>
          </Card>
        </Col>
      ))}
    </Row>
  );
};

export default Certifications;
