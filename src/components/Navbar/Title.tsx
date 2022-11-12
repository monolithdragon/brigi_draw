import styled from 'styled-components';

const Title = styled.h1`
    margin: 0;
    font-size: ${props => props.theme.fonts.size.medium};
    font-weight: ${props => props.theme.fonts.weight.bold};
    text-transform: uppercase;
    letter-spacing: 2px;
`;

export default Title;