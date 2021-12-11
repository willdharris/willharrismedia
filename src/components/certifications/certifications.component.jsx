import { React, useState } from "react";
import "./certifications.styles.scss";
import { Col, Row, Card } from "react-bootstrap";
import aws from "../../assets/aws.png";
import ibmReact from "../../assets/ibm-react.png";
import designThinking from "../../assets/design-thinking.png";
import agile from "../../assets/agile.png";

const Certifications = () => {
  const [certifications, setCertifications] = useState([
    {
      title: ["AWS Cloud Practioner"],
      subtitle: "AWS",
      description: "Certified AWS Cloud Practioner",
      img: aws,
      url: "https://www.credly.com/badges/39d95502-18bb-4c57-babf-f6c39667d061/public_url",
      id: 1,
    },
    {
      title: ["IBM Carbon Design System - React"],
      subtitle: "IBM",
      description: "Certified IBM Carbon Design System for React",
      img: ibmReact,
      url: "https://www.credly.com/badges/426459ba-5d00-49b2-b594-90e22bfa9b6c/public_url",
      id: 2,
    },
    {
      title: ["IBM Enterprise Design Thinking"],
      subtitle: "IBM",
      description: "Certified IBM Design Thinking Practioner",
      img: designThinking,
      url: "https://www.credly.com/badges/de65dfc7-9569-4940-ad79-330682eb5229/public_url",
      id: 3,
    },
    {
      title: ["IBM Agile Exlporer"],
      subtitle: "IBM",
      description: "Certified IBM Agile Exlporer",
      img: agile,
      url: "https://www.credly.com/badges/05039495-b01c-4d95-b9b8-3967e7dbb411/public_url",
      id: 3,
    },
  ]);
  return (
    <Row xs={1} md={3} lg={4} className="g-4">
      {certifications.map((certification, idx) => (
        <Col>
          <Card className="skillcard">
            <Card.Link href={certification.url} target="_blank">
              <Card.Body>
                <Card.Title>{certification.title}</Card.Title>
                {/* <Card.Subtitle className="mb-2 text-muted">
                {certification.subtitle}
              </Card.Subtitle> */}
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
