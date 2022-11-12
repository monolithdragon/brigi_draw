import styled from 'styled-components';

const Avatar = styled.img`
    height: 8rem;

    @media (min-width: ${props => props.theme.breakpoints.sm}) {
        height: 10rem;
    }
`;

export default Avatar;