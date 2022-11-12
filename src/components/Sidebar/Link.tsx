import styled from 'styled-components';

const Link = styled.a`
    text-decoration: none;
    font-size: ${props => props.theme.fonts.size.medium};
    color: ${(props) => props.theme.palette.common.white};
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