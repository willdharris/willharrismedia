import { useState, React, useRef } from "react";
import "./customForm.styles.scss";
import emailjs from "emailjs-com";
import { Container, Col, Row, Form, Button, InputGroup } from "react-bootstrap";
// import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";
//
const CustomForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_h6e7kwy",
        "template_d074r28",
        form.current,
        "user_XNPIb0CpbMEr90RloW9wm"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    // <form ref={form} onSubmit={sendEmail}>
    //   <label>Name</label>
    //   <input type="text" name="user_name" />
    //   <label>Email</label>
    //   <input type="email" name="user_email" />
    //   <label>Message</label>
    //   <textarea name="message" />
    //   <input type="submit" value="Send" />
    // </form>
    <Form ref={form} onSubmit={sendEmail}>
      <Row className="g-2">
        <Col md>
          <Form.Group className="mb-3" controlId="formBasicName">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              name="user_name"
              placeholder="Enter your name"
            />
          </Form.Group>
        </Col>
        <Col md>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email Address</Form.Label>
            <Form.Control
              type="email"
              name="user_email"
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
          name="message"
          rows={3}
          placeholder="Enter your message"
        />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
};

export default CustomForm;
