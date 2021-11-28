import React from 'react';
import {StyledMenuLink} from './MenuLink.styled';

interface Props {
    link: string;
    setIsOpen: (val: boolean) => void;
}

const MenuLink: React.FC<Props> = ({children, link, setIsOpen}) => {

    return (
        <StyledMenuLink href={link} onClick={() => setIsOpen(false)}>
            {children}
        </StyledMenuLink>
    )
}

export default MenuLink;