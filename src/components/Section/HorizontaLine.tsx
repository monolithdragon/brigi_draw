import styled from 'styled-components';

const HorizontalLine = styled.hr`
  height: 1px;
  border: none;
  background: rgb(255, 255, 255);
  background: -moz-linear-gradient(
    90deg,
    rgba(255, 255, 255, 0) 0%,
    rgba(255, 255, 255, 1) 48%,
    rgba(255, 255, 255, 0) 100%
  );
  background: -webkit-linear-gradient(
    90deg,
    rgba(255, 255, 255, 0) 0%,
    rgba(255, 255, 255, 1) 48%,
    rgba(255, 255, 255, 0) 100%
  );
  background: linear-gradient(
    90deg,
    rgba(255, 255, 255, 0) 0%,
    rgba(255, 255, 255, 1) 48%,
    rgba(255, 255, 255, 0) 100%
  );
`;

export default HorizontalLine;
