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
                <div className="footer-creds">
                  <a
                    href="https://github.com/willdharris/willharrismedia"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Designed & Built by Will Harris {year}.
                  </a>
                </div>
              </div>
            </Col>
            <Col>
              <div className="footer-right">
                <div className="footer-socials">
                  <a
                    href="https://www.linkedin.com/in/willdharris/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FontAwesomeIcon icon={["fab", "linkedin"]} />
                  </a>
                  <a
                    href="https://github.com/willdharris"
                    target="_blank"
                    rel="noreferrer"
                  >
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
