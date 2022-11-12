import styled from 'styled-components';

const Box = styled.div`
  width: 280px;
  min-height: 550px;
  display: flex;
  flex-direction: column;
  border-radius: 20px;
  background-color: ${(props) => props.theme.palette.common.white};
  box-shadow: 0 0 10px 0 rgba(15, 15, 15, 0.28);
  position: relative;
  overflow: hidden;
`;

export default Box;