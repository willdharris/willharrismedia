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
            <Row>I'm Will Harris.</Row>
            <Row>Front End Developer and Problem Solver. </Row>
          </Col>

          <Col>
            <Card style={{ width: "18rem" }} text="dark">
              <Card.Img
                style={{ padding: "1rem" }}
                rounded
                variant="top"
                src="https://supercelebjacket.com/wp-content/uploads/2019/10/Starsky-And-Hutch-Ben-Stiller-Jacket-2.jpg/supercelebjacket.com/wp-content/uploads/2019/10/Starsky-And-Hutch-Ben-Stiller-Jacket-2.jpg"
              />
              <Card.Body>
                <Card.Title>
                  <FontAwesomeIcon icon={["fab", "linkedin"]} size="2x" />

                  <FontAwesomeIcon icon={["fab", "github"]} size="2x" />
                </Card.Title>
                <Card.Text></Card.Text>
                {/* <Button variant="primary">Go somewhere</Button> */}
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </Container>
  </div>
);

export default HomePage;
