import styled from 'styled-components';

const AvatarContainer = styled.div`
   display: flex;
   justify-content: center;
   align-items: center;
   padding: 1rem; 
   background-color: ${props => props.theme.palette.primary.main};

   @media (min-width: ${props => props.theme.breakpoints.md}) {
        padding: 5rem;
    }
`;

export default AvatarContainer;