import React from "react";
import { Container } from "react-bootstrap";
import CustomForm from "../customForm/customForm.component";

import "./contact.styles.scss";

const Contact = () => (
  <section className="contact" id="contact">
    <Container>
      <div className="contact-inner">
        <h1>
          <span className="sec-num">04.</span>Contact
        </h1>
        <div className="contact-body">
          <h5>
            Have a question or proposal, or just want to say hello? You can
            message me on{" "}
            <a
              className="hyper"
              href="https://www.linkedin.com/in/willdharris/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>{" "}
            or send a message below.
          </h5>
        </div>

        <CustomForm />
      </div>
    </Container>
  </section>
);

export default Contact;
