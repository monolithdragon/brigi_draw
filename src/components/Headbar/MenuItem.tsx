import styled from 'styled-components';

const MenuItem = styled.li`
  cursor: pointer;
  padding-inline: 0.5rem;

  &:hover {
    background-color: ${(props) => props.theme.palette.accent.main};

    & > a {
      color: ${(props) => props.theme.palette.accent.contrastText};
    }
  }
`;

export default MenuItem;
