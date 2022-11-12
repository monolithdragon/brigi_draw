import styled from 'styled-components';

const MenuItem = styled.li`
  cursor: pointer;
  padding: 1rem;

  &:hover,
  &.active {
    background-color: ${(props) => props.theme.palette.accent.main};
  }
`;

export default MenuItem;
