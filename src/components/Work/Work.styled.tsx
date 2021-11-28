import styled from "styled-components";

export const StyledWork = styled.div`
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

export const WorkHeaderStyled = styled.div`
    margin-top: 4rem;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const WorkLinkStyled = styled.ul`
    display: flex;
    padding: 3rem 0 0 0;
    margin: 0;
    overflow-x: auto;
`

interface Props {
    clicked: boolean;
}

export const WorkButtonStyled = styled.button<Props>`
    text-align: center;
    color: #6f6ffc;
    border-bottom: 1px solid black;
    list-style: none;
    border: none;
    background: none;
    cursor: pointer;
    height: 4rem;
    width: 5.25rem;

    &:hover {
        background-color: rgba(0,0,0,0.8);
        color: #6f6ffc;
        opacity: ${props => props.clicked ? "1" : "0.8"};
        border-top: ${props => props.clicked ? "2px solid #6f6ffc" : "none"};
        border-bottom: ${props => props.clicked ? "2px solid #6f6ffc" : "none"};
    }

    background-color: ${props => props.clicked ? "rgba(0,0,0,0.8)" : "none"};
    border-top: ${props => props.clicked ? "2px solid #6f6ffc" : "none"};
    border-bottom: ${props => props.clicked ? "2px solid #6f6ffc" : "none"};
`

export const WorkContainer = styled.div`
    background: rgba(0,0,0);
    width: 50vw;
    color: #6f6ffc;
    margin-bottom: 3rem;
    li {
        display: list-item;
        list-style-type: "‣ ";
        margin-right: 1rem;
    }
    @media Screen and (max-width: 1200px) {
        width: 75vw;
    }
    @media Screen and (max-width: 450px) {
        width: 90vw;
    }
`