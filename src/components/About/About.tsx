import React from "react";
import { AboutHeaderStyled, AboutSkillsStyledGrid } from "./About.styled";
import Me from "../../assets/Me.png";
import { Col, Container, Row } from "react-bootstrap";
import "./About.css";

interface Props {}

const About: React.FC<Props> = () => {
  return (
    <Container className="mt-5" style={{ width: "90%" }}>
      <AboutHeaderStyled>
        <span>01 </span>
        <h2>About Me</h2>
        <hr />
      </AboutHeaderStyled>
      <div>
        <Row className="d-flex flex-lg-row flex-column align-items-center justify-content-lg-between">
          <Col
            xs={{
              order: 2,
              span: 12,
            }}
            lg={{
              order: 1,
              span: 8,
            }}
          >
            <p>
              I am very passionate about the making beautiful, modular, mobile
              friendly web applications. I love learning about and experimenting
              with <span>cutting edge</span> web development technologies to
              create a better user experience.
            </p>
            <p>
              I graduated with a B.S in Computer Science from{" "}
              <span>George Mason University</span> I currently work as a full
              stack web developer. Here are a few technologies I enjoy using:
            </p>
            <AboutSkillsStyledGrid>
              <li>
                <a
                  href="https://reactjs.org/docs/getting-started.html"
                  rel="noreferrer"
                  target="_blank"
                >
                  React
                </a>
              </li>
              <li>
                <a
                  href="https://www.typescriptlang.org/docs/"
                  rel="noreferrer"
                  target="_blank"
                >
                  TypeScript
                </a>
              </li>
              <li>
                <a
                  href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
                  rel="noreferrer"
                  target="_blank"
                >
                  JavaScript(ES6+)
                </a>
              </li>
              <li>
                <a
                  href="https://nodejs.org/en/docs/"
                  rel="noreferrer"
                  target="_blank"
                >
                  Node.js
                </a>
              </li>
              <li>
                <a
                  href="https://styled-components.com/"
                  rel="noreferrer"
                  target="_blank"
                >
                  Styled Components
                </a>
              </li>
              <li>
                <a
                  href="https://getbootstrap.com/docs/5.1/getting-started/introduction/"
                  rel="noreferrer"
                  target="_blank"
                >
                  Bootstrap
                </a>
              </li>
            </AboutSkillsStyledGrid>
          </Col>
          <Col
            xs={{
              order: 1,
            }}
            lg={{
              order: 2,
            }}
            className="d-flex justify-content-center"
          >
            <img src={Me} className="rounded portfolio-img" alt="me" />
          </Col>
        </Row>
      </div>
    </Container>
  );
};

export default About;
