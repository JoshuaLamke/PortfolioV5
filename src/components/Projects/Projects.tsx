import React from 'react';
import {ProjectCard, ProjectCardContainer, ProjectCardsContainer, ProjectsHeaderStyled, ProjectsStyled} from './Projects.styled';
import Pokedex from "../../assets/Pikachu.png";
import Recipe from '../../assets/Recipe.png';
import {DiReact, DiJavascript} from 'react-icons/di';
import {SiMaterialui, SiHeroku, SiFastapi, SiNetlify} from 'react-icons/si';
import {BsFillBootstrapFill} from 'react-icons/bs';
import {IoLogoNodejs, IoLogoGithub} from 'react-icons/io';
import {FiExternalLink} from 'react-icons/fi';

interface Props {

}

const Projects: React.FC<Props> = () => {
    return (
        <ProjectsStyled>
            <ProjectsHeaderStyled>
                <h2>
                    <span className="me-2">02</span> 
                    Apps I've Made
                </h2>
                <hr />
            </ProjectsHeaderStyled>
            <ProjectCardsContainer>
                <ProjectCardContainer backgroundImgBig={Pokedex}>
                    <ProjectCard>
                        <h2 className="me-5 mt-5">Pokedex</h2>
                        <div className="project-description">
                            <p className="me-5 text-end text-white">
                                This web application allows you to find information on all 898 pokemon as well 
                                as create and customize your own pokemon!
                            </p>
                        </div>
                        <h4 className="me-5 mt-5">Made with:</h4>
                        <ul className="me-5 mb-3">
                            <div className="d-flex align-items-center justify-content-center">
                                <li>
                                    React.js
                                </li>
                                <DiReact color="white"/>
                            </div>
                            <div className="d-flex align-items-center justify-content-center">
                                <li>
                                    Material UI
                                </li>
                                <SiMaterialui color="white"/>
                            </div>
                            <div className="d-flex align-items-center justify-content-center">
                                <li>
                                    Bootstrap
                                </li>
                                <BsFillBootstrapFill color="white"/>
                            </div>
                            <div className="d-flex align-items-center justify-content-center">
                                <li>
                                    Heroku
                                </li>
                                <SiHeroku color="white"/>
                            </div>
                            <div className="d-flex align-items-center justify-content-center">
                                <li>
                                    Node.js
                                </li>
                                <IoLogoNodejs color="white"/>
                            </div>
                        </ul>
                        <div className="d-flex">
                            <div className="me-5 mb-3">
                                <a href="https://github.com/JoshuaLamke/Pokedex" target="_blank" rel="noreferrer" >
                                    <IoLogoGithub color="white" size="25px"/>
                                </a>
                            </div>
                            <div className="me-5 mb-3">
                                <a href="https://pokedex-jl.herokuapp.com/" target="_blank" rel="noreferrer" >
                                    <FiExternalLink color="white" size="25px"/>
                                </a>
                            </div>
                        </div>
                    </ProjectCard>
                </ProjectCardContainer>
                <ProjectCardContainer backgroundImgBig={Recipe}>
                    <ProjectCard>
                        <h2 className="me-5 mt-5">Recipe App</h2>
                        <div className="project-description">
                            <p className="me-5 text-end text-white">
                                This app allows you to create and store your recepies in one place. You can also search for recipes
                                fetched from a recipe API.
                            </p>
                        </div>
                        <h4 className="me-5 mt-5">Made with:</h4>
                        <ul className="me-5 mb-3">
                            <div className="d-flex align-items-center justify-content-center">
                                <li>
                                    JavaScript
                                </li>
                                <DiJavascript color="white"/>
                            </div>
                            <div className="d-flex align-items-center justify-content-center">
                                <li>
                                    Netlify
                                </li>
                                <SiNetlify color="white"/>
                            </div>
                            <div className="d-flex align-items-center justify-content-center">
                                <li>
                                    Heroku
                                </li>
                                <SiHeroku color="white"/>
                            </div>
                            <div className="d-flex align-items-center justify-content-center">
                                <li>
                                    Node.js
                                </li>
                                <IoLogoNodejs color="white"/>
                            </div>
                            <div className="d-flex align-items-center justify-content-center">
                                <li>
                                    REST API
                                </li>
                                <SiFastapi color="white"/>
                            </div>
                        </ul>
                        <div className="d-flex">
                            <div className="me-5 mb-3">
                                <a href="https://github.com/JoshuaLamke/RecipeApp" target="_blank" rel="noreferrer" >
                                    <IoLogoGithub color="white" size="25px"/>
                                </a>
                            </div>
                            <div className="me-5 mb-3">
                                <a href="https://recipe-app-jg.netlify.app/" target="_blank" rel="noreferrer" >
                                    <FiExternalLink color="white" size="25px"/>
                                </a>
                            </div>
                        </div>
                    </ProjectCard>
                </ProjectCardContainer>
            </ProjectCardsContainer>
        </ProjectsStyled>
    )
}

export default Projects;