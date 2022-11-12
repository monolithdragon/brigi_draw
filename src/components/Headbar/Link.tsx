import styled from 'styled-components';

const Link = styled.a`
  text-decoration: none;
  font-size: ${(props) => props.theme.fonts.size.small};
  color: ${(props) => props.theme.palette.common.dark};
  text-align: center;
  text-transform: uppercase;
`;

export const headLinks = ['Belépés', 'Regisztráció'];

export default Link;
