import styled from 'styled-components';

const Wrapper = styled.div`
    position: sticky;
    top: 0;
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding: 0.25rem 0.5rem;
    background-color: ${props => props.theme.palette.common.white};
`;

export default Wrapper;