import styled from "styled-components";

const HorizontalSpace = styled.span<{spacing?: number | string}>`
  display: flex;
  width: ${({ spacing }) =>
    typeof spacing === "string" ? spacing : `${spacing}px`};
`;

export default HorizontalSpace;