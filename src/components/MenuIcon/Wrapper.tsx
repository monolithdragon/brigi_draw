import styled from 'styled-components';

const Wrapper = styled.div`
    display: block;
    cursor: pointer;
    padding-right: 1.5rem;

    @media (min-width: ${props => props.theme.breakpoints.lg}) {
        display: none;
    }

    &:hover > div {
        background-color: ${props => props.theme.palette.common.white};
    }
`;

export default Wrapper;