import React from 'react';
import {StyledMenuLink} from './MenuLink.styled';
import resume from '../../assets/Lamke_Joshua_Resume.pdf';

interface Props {
    link: string;
    setIsOpen: (val: boolean) => void;
}

const MenuLink: React.FC<Props> = ({children, link, setIsOpen}) => {

    return (
        <StyledMenuLink href={link === "pdf" ? resume : link} target={link === "pdf" ? "_blank" : "_self"} rel="noreferrer" onClick={() => setIsOpen(false)}>
            {children}
        </StyledMenuLink>
    )
}

export default MenuLink;