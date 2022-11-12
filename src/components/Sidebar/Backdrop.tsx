import styled from 'styled-components';

const Backdrop = styled.div`
  position: fixed;
  top: 85px;
  right: 0;
  width: 250px;
  height: 100%;
  background-color: ${(props) => props.theme.palette.common.dark};

  @media (min-width: ${(props) => props.theme.breakpoints.lg}) {
    display: none;
  }
`;

export default Backdrop;
