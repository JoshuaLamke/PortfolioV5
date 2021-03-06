import styled from 'styled-components';

interface Props {
    
}

export const StyledHamburger = styled.div<Props>`
    display: none;
    flex-direction: column;
    cursor: pointer;
    padding-right: 1rem;

    @media (max-width: 950px) {
        display: flex;
    }
`;