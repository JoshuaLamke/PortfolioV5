import styled from "styled-components";

export const StyledContact = styled.div`
    background: hsl(0,0%,0%);
    color: #6f6ffc;
    width: 100vw;
    height: 90vh;
`
export const StyledContactContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 90vw;
    padding: 0 1.5rem;
    margin-bottom: 5vh;
    h6 {
        font-size: 1rem;
    }
    h1 {
        font-size: 4rem;
        color: white;
    }
    h3 {
        font-size: 3rem;
    }
    span {
        color: white;
    }
    p {
        color: #67bc98;
        font-size: 1.2rem;
    }
    @media Screen and (max-width: 768px) {
        h6 {
            font-size: 1rem;
        }
        h1 {
            font-size: 3rem;
            color: white;
        }
        h3 {
            font-size: 2.25rem;
        }
        p {
            font-size: 1rem;
        }
    }
    @media Screen and (max-width: 600px) {
        h6 {
            font-size: 1rem;
        }
        h1 {
            font-size: 2rem;
            color: white;
        }
        h3 {
            font-size: 1.5rem;
        }
    }
    @media Screen and (max-width: 400px) {
        h6 {
            font-size: 0.75rem;
        }
        h1 {
            font-size: 1.5rem;
            color: white;
        }
        h3 {
            font-size: 1rem;
        }
    }
`