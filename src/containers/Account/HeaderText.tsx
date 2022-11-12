import styled from 'styled-components';

const HeaderText = styled.h2`
  font-size: ${props => props.theme.fonts.size.medium};
  font-weight: ${props => props.theme.fonts.weight.medium};
  line-height: 1.24;
  color: ${props => props.theme.palette.primary.contrastText};
  z-index: 1;
`;

export default HeaderText;