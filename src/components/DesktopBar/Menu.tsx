import styled from 'styled-components';

const Menu = styled.ul`
    display: none;      
    list-style: none; 
    
    @media (min-width: ${props => props.theme.breakpoints.lg}) {
        display: flex;               
        gap: 1rem;      
    }

    @media (min-width: ${props => props.theme.breakpoints.xl}) {
        gap: 3rem;      
    }

    @media (min-width: ${props => props.theme.breakpoints.xxl}) {
        gap: 6rem;      
    }
`;

export default Menu;