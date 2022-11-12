import styled from 'styled-components';

const Input = styled.input`
  width: 100%;
  height: 42px;
  outline: none;
  border: 1px solid rgba(200, 200, 200, 0.3);
  border-bottom: 1.4px solid transparent;
  padding-inline: 10px;
  transition: all 200ms ease-in-out;
  font-size: 12px;

  &::placeholder {
    color: rgb(200, 200, 200);
  }

  &:not(:last-of-type) {
    border-bottom: 1.5px solid rgba(200, 200, 200, 0.4);
  }

  &:focus,
  &:hover {
    outline: none;
    border-bottom: 2px solid ${props => props.theme.palette.primary.main};
  }
`;

export default Input;
