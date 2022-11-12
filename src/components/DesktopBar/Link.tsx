import styled from 'styled-components';

const Link = styled.a` 
    text-decoration: none;    
    cursor: pointer;
    font-size: ${props => props.theme.fonts.size.normal};
    color: ${props => props.theme.palette.common.dark};    
    text-transform: uppercase;
    text-align: center;
`;

export const navLinks = [
    'Főoldal',
    'A Könyvről',
    'KönyvBolt',
    'Videók',
    'Új Megjelés',
    'Kosár'
];

export default Link;