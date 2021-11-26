import React from 'react';
import {StyledMenuLink} from './MenuLink.styled';

interface Props {
    link: string;
}

const MenuLink: React.FC<Props> = ({children, link}) => {

    return (
        <StyledMenuLink href={link}>
            {children}
        </StyledMenuLink>
    )
}

export default MenuLink;