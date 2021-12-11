import React from "react";
import { Container, Col, Row, Form, Button } from "react-bootstrap";
import CustomForm from "../customForm/customForm.component";
import { send } from "emailjs-com";

import "./contact.styles.scss";

const Contact = () => (
  <section className="contact" id="contact">
    <Container>
      <div className="contact-inner">
        <h1>Contact</h1>
        <div className="contact-body">
          <h5>
            Have a question or proposal, or just want to say hello? You can
            message me on{" "}
            <a
              href="https://www.linkedin.com/in/willdharris/"
              target="_blank"
              className="hero-link"
            >
              LinkedIn
            </a>{" "}
            or send a message below.
          </h5>
        </div>
        <CustomForm />
      </div>
      {/* <Form>
        <Row className="g-2">
          <Col md>
            <Form.Group className="mb-3" controlId="formBasicName">
              <Form.Label>Name</Form.Label>
              <Form.Control type="name" placeholder="Enter your name" />
            </Form.Group>
          </Col>
          <Col md>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email Address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter your email address"
              />
              <Form.Text className="text-muted">
                I'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>
          </Col>
        </Row>
        <Form.Group className="mb-3" controlId="floatingTextarea">
          <Form.Label>Your Message</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            placeholder="Enter your message"
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form> */}
    </Container>
  </section>
);

export default Contact;
