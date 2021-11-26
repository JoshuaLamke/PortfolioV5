import styled from 'styled-components';

interface Props {
    isOpen: boolean;
}

export const StyledMenu = styled.div<Props>`
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
    padding-right: 1rem;
    @media (max-width: 768px) {
        overflow: hidden;
        padding-right: 0;
        flex-direction: column;
        justify-content: flex-start;
        height: ${({ isOpen }) => (isOpen ? "90vh" : "0")};
        transition: height 0.3s ease-in;
        backdrop-filter: blur(5px);
        width: 100%;
    }
`;

