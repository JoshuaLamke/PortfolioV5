import React from "react";
import { Container } from "react-bootstrap";
import { StyledHome, StyledHomeContainer } from "./Home.styled";
import "./Home.css";

interface Props {}

const Home: React.FC<Props> = () => {
  return (
    <Container
      fluid
      style={{ background: "#121212" }}
      className="d-flex justify-content-center"
    >
      <div className="home-container d-flex justify-content-center">
        <StyledHome className="d-flex flex-column justify-content-center align-items-center">
          <StyledHomeContainer>
            <h6>Hello, My name is</h6>
            <h1>Joshua Lamke</h1>
            <h3>I like to build beautiful applications for the web.</h3>
            <p>
              I am a web app developer based in <span>Centreville, VA.</span>
            </p>
          </StyledHomeContainer>
        </StyledHome>
      </div>
    </Container>
  );
};

export default Home;
