import React from "react";
import {
  ProjectCard,
  ProjectCardContainer,
  ProjectCardsContainer,
  ProjectsHeaderStyled,
  ProjectsStyled,
} from "./Projects.styled";
import Pokedex from "../../assets/Pikachu.png";
import { DiReact } from "react-icons/di";
import { SiMaterialui, SiServerless } from "react-icons/si";
import { BsFillBootstrapFill } from "react-icons/bs";
import { IoLogoNodejs, IoLogoGithub } from "react-icons/io";
import { FiExternalLink } from "react-icons/fi";
import "./Projects.css";

interface Props {}

const Projects: React.FC<Props> = () => {
  return (
    <ProjectsStyled>
      <ProjectsHeaderStyled>
        <h2>
          <span className="me-2">02</span>
          Projects
        </h2>
        <hr />
      </ProjectsHeaderStyled>
      <ProjectCardsContainer>
        <ProjectCardContainer backgroundImgBig={Pokedex}>
          <ProjectCard>
            <h2 className="me-5 mt-5">Pokedex</h2>
            <div className="project-description">
              <p className="me-5 text-end text-white">
                This web app allows you to find information on all pokemon as
                well as create and customize your own pokemon!
              </p>
            </div>
            <h4 className="me-5 mt-5">Made with:</h4>
            <ul className="me-5 mb-3">
              <div className="d-flex align-items-center justify-content-center">
                <a
                  href="https://reactjs.org/"
                  target="_blank"
                  rel="noreferrer"
                  className="d-flex align-items-center text-decoration-none project-link"
                >
                  <li>React.js</li>
                  <DiReact color="white" />
                </a>
              </div>
              <div className="d-flex align-items-center justify-content-center">
                <a
                  href="https://mui.com/material-ui/getting-started/overview/"
                  target="_blank"
                  rel="noreferrer"
                  className="d-flex align-items-center text-decoration-none project-link"
                >
                  <li>Material UI</li>
                  <SiMaterialui color="white" />
                </a>
              </div>
              <div className="d-flex align-items-center justify-content-center">
                <a
                  href="https://getbootstrap.com/docs/5.3/getting-started/introduction/"
                  target="_blank"
                  rel="noreferrer"
                  className="d-flex align-items-center text-decoration-none project-link"
                >
                  <li>Bootstrap</li>
                  <BsFillBootstrapFill color="white" />
                </a>
              </div>
              <div className="d-flex align-items-center justify-content-center">
                <a
                  href="https://www.serverless.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="d-flex align-items-center text-decoration-none project-link"
                >
                  <li>Serverless</li>
                  <SiServerless color="white" />
                </a>
              </div>
              <div className="d-flex align-items-center justify-content-center">
                <a
                  href="https://nodejs.org/en/docs/"
                  target="_blank"
                  rel="noreferrer"
                  className="d-flex align-items-center text-decoration-none project-link"
                >
                  <li>Node.js</li>
                  <IoLogoNodejs color="white" />
                </a>
              </div>
            </ul>
            <div className="d-flex">
              <div className="me-5 mb-3">
                <a
                  href="https://github.com/JoshuaLamke/Pokedex"
                  target="_blank"
                  rel="noreferrer"
                  className="project-link"
                >
                  <IoLogoGithub color="white" size="25px" />
                </a>
              </div>
              <div className="me-5 mb-3">
                <a
                  href="https://jl-pokedex.netlify.app/"
                  target="_blank"
                  rel="noreferrer"
                  className="project-link"
                >
                  <FiExternalLink color="white" size="25px" />
                </a>
              </div>
            </div>
          </ProjectCard>
        </ProjectCardContainer>
      </ProjectCardsContainer>
    </ProjectsStyled>
  );
};

export default Projects;
