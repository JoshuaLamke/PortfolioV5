import styled from "styled-components";

export const StyledContact = styled.div`
    width: 100vw;
    height: 90vh;
    display: flex;
    background: hsl(0,0%,0%);
    flex-direction: column;
    align-items: center;
    span {
        color: #6f6ffc;
        font-size: 1.5rem;
    }
    h2 {
        font-size: 2rem;
        color: #67bc98;
        margin-left: .5rem;
        padding: 0;
    }
    hr {
        display: inline;
        height: 2px;
        width: 5.5rem;
        margin-left: 0.5rem;
        color: #6f6ffc;
        opacity: 1;
    }
    @media Screen and (max-width: 350px) {
        hr {
            display: none;
        }
    } 
`

export const ContactHeaderStyled = styled.div`
    margin-top: 4rem;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const StyledContactContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 90vw;
    padding: 0 1.5rem;
    margin-bottom: 5vh;
    form {
        width: 75%;
    }
    label {
        color: #6f6ffc;
        font-size: 1.25rem;
    }
    @media Screen and (max-width: 768px) {
        form {
            width: 90%;
        }
    }
`