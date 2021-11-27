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
        if(!dClicked && !cClicked && !gClicked) {
            setDClicked(true);
            setRecentClick(0);
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
                <WorkButtonStyled clicked={dClicked} onClick={() => {setDClicked(!dClicked); setRecentClick(0);}}>Dev Tech</WorkButtonStyled>
                <WorkButtonStyled clicked={cClicked} onClick={() => {setCClicked(!cClicked); setRecentClick(1);}}>Colvin Run</WorkButtonStyled>
                <WorkButtonStyled clicked={gClicked} onClick={() => {setGClicked(!gClicked); setRecentClick(2);}}>GMU</WorkButtonStyled>
            </WorkLinkStyled>
            <WorkContainer>
                {dClicked && 
                <>
                    <h3 className="pt-3 ps-3 text-light">Software Developer @ Dev Technology</h3>
                    <h6 className="pt-3 ps-3">June 2021 - Present</h6>
                    <ul>
                        <li>
                            Worked in a small agile team to create a web application using React, DynamoDB, and the 
                            Serverless framework for the DHS
                        </li>
                        <li>
                            Created custom react components and wrote unit tests using react-testing-library
                        </li>
                        <li>
                            Engaged in agile software development on both projects through use of Jira/SubTask and 
                            participation in ceremonies (Daily SCRUM, Retrospectives, Sprint Reviews, Sprint Planning)
                        </li>
                        <li>
                            Obtained Public Trust clearance
                        </li>
                    </ul>
                </>}
                {cClicked && 
                <>
                    <h3 className="pt-3 ps-3 text-light">Intern @ Colvin Run</h3>
                    <h6 className="pt-3 ps-3">February 2021 - June 2021</h6>
                    <ul>
                        <li>
                            Worked in a small agile team to create a web application using React, DynamoDB, and the 
                            Serverless framework for the DHS
                        </li>
                        <li>
                            Created custom react components and wrote unit tests using react-testing-library
                        </li>
                        <li>
                            Engaged in agile software development on both projects through use of Jira/SubTask and 
                            participation in ceremonies (Daily SCRUM, Retrospectives, Sprint Reviews, Sprint Planning)
                        </li>
                        <li>
                            Obtained Public Trust clearance
                        </li>
                    </ul>
                </>}
                {gClicked && 
                <>
                    <h3 className="pt-3 ps-3 text-light">ComSci Student @ George Mason University</h3>
                    <h6 className="pt-3 ps-3">August 2019 - Present</h6>
                    <ul>
                        <li>
                            Worked in a small agile team to create a web application using React, DynamoDB, and the 
                            Serverless framework for the DHS
                        </li>
                        <li>
                            Created custom react components and wrote unit tests using react-testing-library
                        </li>
                        <li>
                            Engaged in agile software development on both projects through use of Jira/SubTask and 
                            participation in ceremonies (Daily SCRUM, Retrospectives, Sprint Reviews, Sprint Planning)
                        </li>
                        <li>
                            Obtained Public Trust clearance
                        </li>
                    </ul>
                </>}
            </WorkContainer>
        </StyledWork>
    );
}

export default Work;