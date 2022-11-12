import styled from 'styled-components';

const SubmitButton = styled.button`
  width: 100%;
  padding: 11px 40%;
  cursor: pointer;
  color: ${(props) => props.theme.palette.primary.contrastText};
  font-size: 15px;
  font-weight: ${(props) => props.theme.fonts.weight.medium};
  border: none;
  border-radius: 100px;
  transition: all 240ms ease-in-out;
  background: ${(props) => props.theme.palette.primary.main};
  background: linear-gradient(
    58deg,
    ${(props) => props.theme.palette.primary.main} 20%,
    ${(props) => props.theme.palette.accent.main} 100%
  );

  &:hover {
    filter: brightness(1.03);
  }
`;

export default SubmitButton;
