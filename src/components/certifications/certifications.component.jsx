import { React, useState } from "react";
import "./certifications.styles.scss";
import { Container, Col, Row, Card } from "react-bootstrap";

const Certifications = () => {
  const [certifications, setCertifications] = useState([
    {
      title: ["AWS Cloud Practioner"],
      subtitle: "AWS",
      description: "Certified AWS Cloud Practioner",
      id: 1,
    },
    {
      title: ["IBM Carbon Design System - React"],
      subtitle: "IBM",
      description: "Certified IBM Carbon Design System for React developer",
      id: 2,
    },
    {
      title: ["IBM Enterprise Design Thinking Practioner"],
      subtitle: "IBM",
      description: "Certified IBM Design Thinking Practioner",
      id: 3,
    },
    {
      title: ["IBM Agile Exlporer"],
      subtitle: "IBM",
      description: "Agile",
      id: 3,
    },
  ]);
  return (
    <Row xs={1} md={3} lg={4} className="g-4">
      {certifications.map((certification, idx) => (
        <Col>
          <Card className="skillcard">
            <Card.Body>
              <Card.Title>{certification.title}</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                {certification.subtitle}
              </Card.Subtitle>
              <Card.Text>{certification.description}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
};

export default Certifications;
