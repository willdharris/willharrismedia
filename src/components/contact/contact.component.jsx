import React from "react";
import { Container, Button } from "react-bootstrap";
import "./contact.styles.scss";

const Contact = () => (
  <div className="contact">
    <h1>contact</h1>
    <h3>get in touch</h3>
    <p>
      I'm always open for new work opportunities. If you would like to get in
      touch you can message me on{" "}
      <a href="https://www.linkedin.com/in/willdharris/" target="_blank">
        LinkedIn
      </a>{" "}
      or shoot me an email. I'd love to here from you!
    </p>
    <>
      {" "}
      <Button
        variant="outline-primary"
        href="mailto:willharrismedia@gmail.com"
        target="_blank"
      >
        Say Hello
      </Button>{" "}
    </>
  </div>
);

export default Contact;
