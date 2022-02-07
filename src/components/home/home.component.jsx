import { useState, React } from "react";
import { Container, Row, Nav } from "react-bootstrap";
import useInterval from "../../hooks/useInterval";
import Header from "../header/header.component";
import "./home.styles.scss";

function Home() {
  const descriptions = [
    "Design Thinker",
    "Detail Stickler",
    "Pro Troubleshooter",
    "Experience Creator",
    "Logic Designer",
    "Cloud Navigator",
    "Dot Connector",
    "User Advocate",
    "Problem Solver",
  ];
  const numDescriptions = descriptions.length;
  const [count, setCount] = useState(0);
  const [description, setDescription] = useState("Problem Solver");

  useInterval(() => {
    // setCount
    if (count === numDescriptions - 1) {
      setCount(0);
    } else {
      setCount(count + 1);
    }
    setDescription(descriptions[count]);
  }, 3000);

  return (
    <section className="home" id="home">
      <Header />

      <Container className="home-landing">
        <Row>
          <div className="home-body">
            <div>
              <div className="greeting ">Hi, my name is</div>
              <div className="big-heading" id="name">
                <span>Will Harris</span>
              </div>
              <div className="sub-heading">
                <span>Frontend Developer</span> <span>and</span>{" "}
                <br className="mobile-line-break"></br>
                <span className="curly">{"{"}</span>
                <span className="description">{description}</span>
                <span className="curly">{"}"}</span>
              </div>
              <nav
                className="side-nav"
                aria-label="Main Navigation."
                id="section-nav"
              >
                <ul>
                  <li>
                    <Nav.Link
                      className="side-link"
                      href="#home"
                      aria-label="Go to first section. Home."
                    >
                      00
                    </Nav.Link>
                  </li>
                  <li>
                    <Nav.Link
                      className="side-link"
                      href="#about"
                      aria-label="Go to second section. About."
                    >
                      01
                    </Nav.Link>
                  </li>
                  <li>
                    <Nav.Link
                      className="side-link"
                      href="#work"
                      aria-label="Go to second section. Work."
                    >
                      02
                    </Nav.Link>
                  </li>
                  <li>
                    <Nav.Link
                      className="side-link"
                      href="#skills"
                      aria-label="Go to third section. Skills."
                    >
                      03
                    </Nav.Link>
                  </li>
                  <li>
                    <Nav.Link
                      className="side-link"
                      href="#contact"
                      aria-label="Go to fourth section. Contact."
                    >
                      04
                    </Nav.Link>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </Row>
      </Container>
    </section>
  );
}

export default Home;
