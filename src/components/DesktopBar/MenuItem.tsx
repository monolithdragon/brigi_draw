import styled from 'styled-components';

const MenuItem = styled.li`
  padding: 1rem;

  &:last-child {
    background-color: ${(props) => props.theme.palette.common.dark};

    & > a {
      color: ${(props) => props.theme.palette.common.white};
    }
  }

  &:hover,
  &.active {
    background-color: ${(props) => props.theme.palette.accent.main};

    & > a {
      color: ${(props) => props.theme.palette.accent.contrastText};
    }
  }
`;

export default MenuItem;
