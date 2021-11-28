import React from 'react';
import { AboutBodyStyled, AboutBodyStyledContainer, AboutHeaderStyled, StyledAbout, AboutSkillsStyledGrid } from './About.styled';
import Me from '../../assets/Me.png';

interface Props {

}

const About: React.FC<Props> = () => {
    return (
        <StyledAbout>
            <AboutHeaderStyled>
                <span>01 </span>
                <h2>About Me</h2>
                <hr />
            </AboutHeaderStyled>
            <AboutBodyStyledContainer>
                <AboutBodyStyled>
                    <div>
                        <p>
                            I am very passionate about the making beautiful, modular, mobile friendly web applications.
                            I love learning about and experimenting with <span>cutting edge</span> web development technologies to 
                            create a better user experience. 
                        </p>
                        <p>
                            I am currently a senior at <span>George Mason University</span> studying Computer Science. 
                            Along with school, I also work as a web developer.
                            Here are a few technologies I enjoy using:
                        </p>
                        <AboutSkillsStyledGrid>
                            <li>
                                <a href="https://reactjs.org/docs/getting-started.html" rel="noreferrer" target="_blank">
                                    React
                                </a>
                            </li>
                            <li>
                                <a href="https://www.typescriptlang.org/docs/" rel="noreferrer" target="_blank">
                                    TypeScript
                                </a>
                            </li>
                            <li>
                                <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" rel="noreferrer" target="_blank">
                                    JavaScript(ES6+)
                                </a>
                            </li>
                            <li>
                                <a href="https://nodejs.org/en/docs/" rel="noreferrer" target="_blank">
                                    Node.js
                                </a>
                            </li>
                            <li>
                                <a href="https://styled-components.com/" rel="noreferrer" target="_blank">
                                    Styled Components
                                </a>
                            </li>
                            <li>
                                <a href="https://getbootstrap.com/docs/5.1/getting-started/introduction/" rel="noreferrer" target="_blank">
                                    Bootstrap
                                </a>
                            </li>
                        </AboutSkillsStyledGrid>
                    </div>
                    <img src={Me} width="250px" height="auto" className="rounded ms-5" alt="me" />
                </AboutBodyStyled>
            </AboutBodyStyledContainer>
        </StyledAbout>
    )
}

export default About;