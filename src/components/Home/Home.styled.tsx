import styled from "styled-components";

export const StyledHome = styled.div`
  color: #6f6ffc;
  width: 90%;
  height: 90vh;
`;
export const StyledHomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 5vh;
  h6 {
    font-size: 1rem;
  }
  h1 {
    font-size: clamp(1.25em, 1.25em + 4vw, 4em);
    color: white;
  }
  h3 {
    font-size: clamp(1em, 1.25em + 1vw, 3em);
  }
  span {
    color: white;
  }
  p {
    color: #67bc98;
    font-size: clamp(1em, 1em + 1vw, 1.25em);
  }
`;
