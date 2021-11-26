import styled from 'styled-components';

interface Props {
    onClick: () => void;
}

export const StyledHamburger = styled.div<Props>`
    display: none;
    flex-direction: column;
    cursor: pointer;
    padding-right: 1rem;

    @media (max-width: 768px) {
        display: flex;
    }
`;