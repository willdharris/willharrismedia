import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./footer.styles.scss";
function Footer() {
  var today = new Date();
  var year = today.getFullYear();

  return (
    <section>
      <div className="footer">
        <Container>
          <Row>
            <Col>
              <div className="footer-left">
                <div>© Will Harris {year}.</div>
              </div>
            </Col>
            <Col>
              <div className="footer-right">
                <div className="footer-socials">
                  <a
                    href="https://www.linkedin.com/in/willdharris/"
                    target="_blank"
                  >
                    <FontAwesomeIcon icon={["fab", "linkedin"]} />
                  </a>
                  <a href="https://github.com/willdharris" target="_blank">
                    <FontAwesomeIcon icon={["fab", "github"]} />
                  </a>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </section>
  );
}

export default Footer;
