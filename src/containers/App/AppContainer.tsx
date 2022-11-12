import styled from 'styled-components';

const Appcontainer = styled.div`
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    overflow: hidden; 
    position: relative;

    @media(min-width: ${props => props.theme.breakpoints.lg}) {
        max-width: 1536px;
    }

`;

export default Appcontainer;