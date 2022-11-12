import { useToggle } from 'hooks/useToggle';
import React from 'react';

import HeaderContainer from './HeaderContainer';
import NavbarContainer from './NavbarContainer';
import SubTitle from './SubTitle';
import Title from './Title';
import MenuIcon from 'components/MenuIcon';
import DesktopBar from 'components/DesktopBar';
import Sidebar from 'components/Sidebar';

const Navbar = () => {
  const [value, toggle] = useToggle(false);

  return (
    <>
    <NavbarContainer>
      <HeaderContainer>
        <Title>Rajzolj Bátran!</Title>
        <SubTitle>Könyvsorozat</SubTitle>
      </HeaderContainer>
      <MenuIcon toggle={toggle} value={value}/>
      <DesktopBar />
    </NavbarContainer>
    {value && <Sidebar />}
    </>
  );
};

export default Navbar;
