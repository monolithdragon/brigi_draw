import styled from 'styled-components';

const SmallText = styled.h5`
  font-size: ${props => props.theme.fonts.size.small};
  font-weight: ${props => props.theme.fonts.weight.normal};
  color: ${props => props.theme.palette.primary.contrastText};
  z-index: 1;
  margin-top: 7px;
`;

export default SmallText;