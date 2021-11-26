import React from 'react';
import { StyledHamburger } from './Hamburger.styled';
import { Sling } from 'hamburger-react'

interface Props {
    setOpened: (value: boolean) => void;
    opened: boolean;
}

const Hamburger: React.FC<Props> = ({setOpened, opened}) => {
    return (
        <StyledHamburger onClick={() => setOpened(!opened)}>
            <Sling toggled={opened} color="white"/>
        </StyledHamburger>
    )
}

export default Hamburger;