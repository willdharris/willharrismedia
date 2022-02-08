import { React, useState } from "react";
import emailjs from "emailjs-com";
import { useFormik } from "formik";
import { Col, Row, Form, Button, Spinner } from "react-bootstrap";
import * as Yup from "yup";

import "./customForm.styles.scss";

const CustomForm = () => {
  // state to hide/show form submission response from emailjs
  const [showSuccess, setShowSuccess] = useState(false);
  const [showError, setShowError] = useState(false);
  const [showSpin, setShowSpin] = useState(false);

  // form validation setup
  const formik = useFormik({
    initialValues: {
      user_name: "",
      user_email: "",
      message: "",
    },
    validationSchema: Yup.object({
      user_name: Yup.string().required("Name is required"),
      user_email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
      message: Yup.string().required("Please include a message"),
    }),
    onSubmit: () => {
      setShowSpin(true);
      emailjs
        .sendForm(
          "service_h6e7kwy",
          "template_d074r28",
          "#contactForm",
          "user_XNPIb0CpbMEr90RloW9wm"
        )
        .then(
          function (response) {
            console.log("SUCCESS!", response.status, response.text);
            setShowSpin(false);
            setShowSuccess(true);
          },
          function (error) {
            console.log("FAILED...", error);
            setShowSpin(false);
            setShowError(true);
          }
        );
    },
  });
  return (
    <Form noValidate id="contactForm" onSubmit={formik.handleSubmit}>
      <Row className="g-2">
        <Col md>
          <Form.Group className="mb-3" controlId="formBasicName">
            <Form.Label>NAME</Form.Label>
            <Form.Control
              type="text"
              name="user_name"
              placeholder="Enter your name"
              {...formik.getFieldProps("user_name")}
              isInvalid={formik.touched.user_name && formik.errors.user_name}
            />
            {formik.touched.user_name && formik.errors.user_name ? (
              <div className="form-error">{formik.errors.user_name}</div>
            ) : null}
          </Form.Group>
        </Col>
        <Col md>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>EMAIL ADDRESS</Form.Label>
            <Form.Control
              type="email"
              name="user_email"
              placeholder="Enter your email address"
              {...formik.getFieldProps("user_email")}
              isInvalid={formik.touched.user_email && formik.errors.user_email}
            />
            {/* <Form.Text className="text-muted">
              I'll never share your email with anyone else.
            </Form.Text> */}
            {formik.touched.user_email && formik.errors.user_email ? (
              <div className="form-error">{formik.errors.user_email}</div>
            ) : null}
          </Form.Group>
        </Col>
      </Row>
      <Form.Group className="mb-3" controlId="floatingTextarea">
        <Form.Label>YOUR MESSAGE</Form.Label>
        <Form.Control
          as="textarea"
          name="message"
          rows={3}
          placeholder="Enter your message"
          {...formik.getFieldProps("message")}
          isInvalid={formik.touched.message && formik.errors.message}
        />
        {formik.touched.message && formik.errors.message ? (
          <div className="form-error">{formik.errors.message}</div>
        ) : null}
      </Form.Group>
      <Button variant="outline-primary" type="submit">
        Send Message
      </Button>
      <div className="submission">
        <div className="submit-load">
          {showSpin ? <Spinner animation="border"></Spinner> : null}
        </div>

        <div className="submit-success">
          {showSuccess ? (
            <div>Thank You! I will reply to your message as soon as I can.</div>
          ) : null}
        </div>
        <div className="submit-error">
          {showError ? (
            <div>
              Oops! The message failed to send. Please try again, or message me
              on{" "}
              <a
                href="https://www.linkedin.com/in/willdharris/"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </a>
              .
            </div>
          ) : null}
        </div>
      </div>
    </Form>
  );
};

export default CustomForm;
