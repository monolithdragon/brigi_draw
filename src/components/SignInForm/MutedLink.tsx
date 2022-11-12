import styled from 'styled-components';

const MutedLink = styled.a`
  font-size: 12px;
  font-weight: ${props => props.theme.fonts.weight.medium};
  color: rgba(200, 200, 200, 0.8);
  text-decoration: none;
  cursor: pointer;
`;

export default MutedLink;