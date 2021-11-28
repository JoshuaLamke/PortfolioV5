import React, { useState, useEffect } from 'react';
import { StyledWork, WorkButtonStyled, WorkContainer, WorkHeaderStyled, WorkLinkStyled } from './Work.styled';

interface Props {

}

const Work: React.FC<Props> = () => {
    const [dClicked, setDClicked] = useState<boolean>(true);
    const [cClicked, setCClicked] = useState<boolean>(false);
    const [gClicked, setGClicked] = useState<boolean>(false);
    const [recentClick, setRecentClick] = useState<number>(0);

    useEffect(() => {
        if(recentClick === 0) {
            setCClicked(false);
            setGClicked(false);
        } else if(recentClick === 1) {
            setDClicked(false);
            setGClicked(false);
        } else if(recentClick === 2) {
            setDClicked(false);
            setCClicked(false);
        }
    }, [dClicked, cClicked, gClicked, recentClick])

    return (
        <StyledWork>
            <WorkHeaderStyled>
                <span>03 </span>
                <h2>Experience</h2>
                <hr />
            </WorkHeaderStyled>
            <WorkLinkStyled>
                <WorkButtonStyled clicked={dClicked} onClick={() => {setDClicked(true); setRecentClick(0);}}>Dev Tech</WorkButtonStyled>
                <WorkButtonStyled clicked={cClicked} onClick={() => {setCClicked(true); setRecentClick(1);}}>Colvin Run</WorkButtonStyled>
                <WorkButtonStyled clicked={gClicked} onClick={() => {setGClicked(true); setRecentClick(2);}}>GMU</WorkButtonStyled>
            </WorkLinkStyled>
            <WorkContainer>
                {dClicked && 
                <>
                    <h3 className="pt-3 ps-3 text-light">Software Developer @ Dev Technology</h3>
                    <h6 className="pt-3 ps-3">June 2021 - Present</h6>
                    <ul>
                        <li>
                            Worked in a small agile team to create a web application using React, DynamoDB, and the 
                            Serverless framework for the DHS.
                        </li>
                        <li>
                            Created custom react components and wrote unit tests using react-testing-library.
                        </li>
                        <li>
                            Engaged in agile software development on both projects through use of Jira/SubTask and 
                            participation in ceremonies (Daily SCRUM, Retrospectives, Sprint Reviews, Sprint Planning).
                        </li>
                        <li>
                            Obtained Public Trust clearance.
                        </li>
                    </ul>
                </>}
                {cClicked && 
                <>
                    <h3 className="pt-3 ps-3 text-light">Intern @ Colvin Run</h3>
                    <h6 className="pt-3 ps-3">February 2021 - June 2021</h6>
                    <ul>
                        <li>
                            Created a proof-of-concept web application using React, Redux, HTML/CSS for the department of 
                            defense.
                        </li>
                        <li>
                            Hosted the static build of the react application using Netlify.
                        </li>
                        <li>
                            Created a REST API that returns data about electronic vulnurabilities using Node.js and Express. 
                        </li>
                        <li>
                            Hosted the API on Heroku.
                        </li>
                    </ul>
                </>}
                {gClicked && 
                <>
                    <h3 className="pt-3 ps-3 text-light">ComSci Student @ George Mason University</h3>
                    <h6 className="pt-3 ps-3">August 2019 - Present</h6>
                    <ul>
                        <li>
                            In my last semester working towards a Bachelor's Degree in Computer Science.
                        </li>
                        <li>
                            Learned Java and the fundamental concepts of Object Oriented Programming.
                        </li>
                        <p className="text-white mt-2">Some Courses I Have Taken:</p>
                        <li>CS211: Object Oriented Programming. Language: Java</li>
                        <li>CS310: Data Structures. Language: Java</li>
                        <li>CS321: Software Engineering. Language: JavaScript</li>
                        <li>CS450: Database Concepts. Language: Java, SQL, MQL(MongoDB Query Language)</li>
                        <li>CS471: Operating Systems. Language: C</li>
                        <li>CS483: Analysis Of Algorithms. Language: N/A</li>
                    </ul>
                </>}
            </WorkContainer>
        </StyledWork>
    );
}

export default Work;