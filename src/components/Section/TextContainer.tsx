import styled from 'styled-components';

const TextContainer = styled.div<{backgroundColor?: string}>`
  display: flex;
  flex-direction: column;
  padding: 2rem;
  background-color: ${props => props.backgroundColor};
  text-align: start;
`;

export default TextContainer;
