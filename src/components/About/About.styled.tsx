import styled from "styled-components";

export const StyledAbout = styled.div`
    height: 90vh;
    width: 100vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    span {
        color: #6f6ffc;
        font-size: 1.5rem;
    }
    h2 {
        font-size: 2rem;
        color: black;
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

export const AboutHeaderStyled = styled.div`
    margin-top: 4rem;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const AboutBodyStyledContainer = styled.div`
    margin-top: 4rem;
    display: flex;
    flex-direction: column;
    flex: 1;
    align-items: center;
`

export const AboutBodyStyled = styled.div`
    width: 75vw;
    display: flex;
    align-items: center;
    span {
        color: #67bc98;
        font-size: 1.25rem;
    }

    p, li {
        font-size: 1.25rem;
    }

    @media Screen and (max-width: 1200px) {
        p, span, li {
            font-size: 1.12rem;
        }
        img {
            width: 200px;
        }
        width: 75vw;
    }

    @media Screen and (max-width: 768px) {
        p, span, li {
            font-size: 1rem;
        }
        width: 75vw;
        img {
            display: none;
        }
    }

    @media Screen and (max-width: 425px) {
        width: 90vw;
        p, span, li {
            font-size: 0.8rem;
        }
    }
`

export const AboutSkillsStyledGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 0.25rem;
    a, a:hover, a:active, a:link {
        color: inherit;
        text-decoration: none;
    }   

    li {
        display: list-item;
        list-style-type: "‣ ";
    }

    li:nth-child(2n + 1) {
        color: #67bc98;
    }

    li:nth-child(2n + 2) {
        color: black;
    }

    li:nth-child(2n + 1):hover {
        color: #67bc98;
        opacity: 0.5;
        cursor: pointer;
    }

    li:nth-child(2n + 2):hover {
        cursor: pointer;
        color: black;
        opacity: 0.5;
    }
`