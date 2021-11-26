import React from 'react';
import { StyledNav } from './Nav.styled';

interface Props {
    
}

const Nav: React.FC<Props> = ({children}) => {
    return (
        <StyledNav id="#home">
            {children}
        </StyledNav>
    )
}

export default Nav;