import styled from 'styled-components';

const NavbarContainer = styled.nav`
    position: sticky;
    top: 2rem;
    width: 100%;
    height: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;    
    background-color: ${props => props.theme.palette.primary.main};

`;

export default NavbarContainer;