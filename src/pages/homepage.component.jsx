import React from "react";
import Header from "../components/header/header.component";
import { Container, Col, Row, Card } from "react-bootstrap";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./homepage.styles.scss";

const HomePage = () => (
  <div className="homepage">
    {/* <div class="container">
      <div class="row">
        <div class="col">
          <div className="titles">
            <h1>will harris media</h1>
            <h3>portfolio</h3>
          </div>
          <div className="image">
            <h1>picture</h1>
            <h3>profile</h3>
          </div>
        </div>
      </div>
    </div> */}
    <Header />
    <Container className="titles">
      <Container>
        <Row>
          <Col>
            <Row>Hello,</Row>
            <Row>I'm Will Harris</Row>
          </Col>

          <Col>
            <Card style={{ width: "18rem" }} text="dark">
              <Card.Img
                variant="top"
                src="../assets/profilepicsquare-300x300.jpeg"
              />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                {/* <Button variant="primary">Go somewhere</Button> */}
                <FontAwesomeIcon icon={["fab", "linkedin"]} size="5x" />
                |
                <FontAwesomeIcon icon={["fab", "github"]} size="5x" />
              </Card.Body>
            </Card>
            <Row>Photo</Row>
            <Row>
              <FontAwesomeIcon icon={["fab", "linkedin"]} size="5x" />
              |
              <FontAwesomeIcon icon={["fab", "github"]} size="5x" />
            </Row>
          </Col>
        </Row>
      </Container>
    </Container>
  </div>
);

export default HomePage;
