import styled from "styled-components";

const VerticalSpace = styled.span<{spacing?: number | string}>`
display: flex;
height: ${({ spacing }) =>
  typeof spacing === "string" ? spacing : `${spacing}px`};
`;

export default VerticalSpace;