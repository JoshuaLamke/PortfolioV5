import styled from "styled-components";

export const ProjectsStyled = styled.div`
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

export const ProjectsHeaderStyled = styled.div`
    margin-top: 4rem;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const ProjectCardsContainer = styled.div`
    display: flex;
    width: 90vw;
    flex-direction: column;
    align-items: center;
    h2 {
        color: #6f6ffc;
        font-size: 2rem;
    }

`;

interface Props {
    backgroundImgBig: any;
}

export const ProjectCardContainer = styled.div<Props>`
    margin: 2rem 0;
    display: flex;
    flex-wrap: wrap;
    width: 60vw;
    flex-direction: column;
    align-items: center;
    align-items: flex-end;
    background: url(${props => props.backgroundImgBig}) no-repeat center;
    @media Screen and (max-width: 768px) {
        width: 75vw;
    }
    @media Screen and (max-width: 520px) {
        width: 90vw;
    }
`;

export const ProjectCard = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,0.7);
    flex-direction: column;
    align-items: center;
    align-items: flex-end;
    border-radius: 10px;
    .project-description {
        width: 50%;
    }

    ul {
        display: grid;
        grid-template-columns: repeat(5, 1fr);
        list-style: none;
        column-gap: 1rem;
    }

    li {
        margin: 1rem 0.5rem;
        color: white;
    }

    h4 {
        color: #6f6ffc;
    }

    @media Screen and (max-width: 1200px) {
        .project-description {
            width: 75%;
        }
        ul {
            grid-template-columns: repeat(4, 1fr);
        }
    }

    @media Screen and (max-width: 1000px) {
        ul {
            grid-template-columns: repeat(3, 1fr);
        }
    }

    @media Screen and (max-width: 600px) {
        .project-description {
            width: 90%;
        }
        ul {
            grid-template-columns: repeat(2, 1fr);
        }
    }

    @media Screen and (max-width: 350px) {
        ul {
            grid-template-columns: repeat(1, 1fr);
        }
    }
`;