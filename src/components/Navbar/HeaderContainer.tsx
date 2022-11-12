import styled from 'styled-components';

const HeaderContainer = styled.div`
    display: block;
    padding-left: 1.5rem;
    padding-block: 0.5rem;
    color: ${props => props.theme.palette.accent.contrastText};    
    line-height: 1;

    @media (min-width: ${props => props.theme.breakpoints.lg}) {
        padding-block: 0;
    }
`;

export default HeaderContainer;