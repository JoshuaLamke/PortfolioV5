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
    @media (max-width: 950px) {
        overflow: hidden;
        padding-right: 0;
        padding-top: ${({ isOpen }) => (isOpen ? "5vh" : "0")};
        flex-direction: column;
        justify-content: flex-start;
        height: ${({ isOpen }) => (isOpen ? "95vh" : "0")};
        transition: height 0.3s ease-in;
        -webkit-backdrop-filter: blur(10px);
        backdrop-filter: blur(10px);
        background: rgba(0,0,0,0.8);
        width: 100vw;
    }
`;

