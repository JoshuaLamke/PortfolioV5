import React from 'react';
import { StyledHome, StyledHomeContainer } from './Home.styled';

interface Props {

}

const Home: React.FC<Props> = () => {
  return (
    <StyledHome className="d-flex flex-column justify-content-center align-items-center">
        <StyledHomeContainer>
            <h6>
                Hello, My name is
            </h6>
            <h1>
                Joshua Lamke
            </h1>
            <h3>
                I like to build beautiful applications for the web.
            </h3>
            <p>
                I am a web app developer based in <span>Centreville, VA.</span>
            </p>
        </StyledHomeContainer>
    </StyledHome>
  );
}

export default Home;
