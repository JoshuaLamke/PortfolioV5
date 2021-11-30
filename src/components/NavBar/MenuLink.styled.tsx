import styled from 'styled-components';

export const StyledMenuLink = styled.a`
    padding: 1.5rem 1.75rem;
    cursor: pointer;
    text-align: center;
    text-decoration: none;
    color: #67bc98;
    transition: all 0.1s ease-in;
    font-size: 1rem;
    &:hover {  
        color: #67bc98;
        opacity: 0.5;
    }
    span {
        color: #6f6ffc;
        font-size: 12px;
    }
    @media Screen and (max-width: 950px) {
        width: 100vw;
        height: 15vh;
        display: flex;
        flex-direction: column;
    }
`;