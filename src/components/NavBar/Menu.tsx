import React from 'react';
import {StyledMenu} from './Menu.styled';
interface Props {
    isOpen: boolean;
}

const Menu: React.FC<Props> = ({children, isOpen}) => {

    return (
        <StyledMenu isOpen={isOpen}>
            {children}
        </StyledMenu>
    )
}

export default Menu;