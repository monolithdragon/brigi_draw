import styled from 'styled-components';

const Wrapper = styled.section`
    display: flex;
    flex-direction: column;
    border: 1px solid ${props => props.theme.palette.accent.main};

    @media (min-width: ${props => props.theme.breakpoints.sm}) {
        display: grid;
        grid-template-columns: 20rem auto;
    }
`;

export default Wrapper;