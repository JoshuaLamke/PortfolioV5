import React from 'react';
import {StyledLogo} from './Logo.styled';
interface Props {
    link: string;
}

const Logo: React.FC<Props> = ({children, link}) => {

    return (
        <StyledLogo href={link}>
            {children}
        </StyledLogo>
    )
}

export default Logo;