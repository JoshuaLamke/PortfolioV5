import React from 'react';
import {StyledLogo} from './Logo.styled';
interface Props {
    link: string;
    setOpened: (val:boolean) => void;
}

const Logo: React.FC<Props> = ({children, link, setOpened}) => {

    return (
        <StyledLogo href={link} onClick={() => setOpened(false)}>
            {children}
        </StyledLogo>
    )
}

export default Logo;