import styled from 'styled-components';

const BoldLink = styled.a`
  font-size: 12px;
  font-weight: ${props => props.theme.fonts.weight.medium};
  color: ${props => props.theme.palette.primary.main};
  text-decoration: none;
  cursor: pointer;
  margin-inline: 4px;
`;

export default BoldLink;