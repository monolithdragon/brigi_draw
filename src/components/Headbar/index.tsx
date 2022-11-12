import Logo from 'assets/logo.png';
import React from 'react';

import Brand from './Brand';
import Link, { headLinks } from './Link';
import Menu from './Menu';
import MenuItem from './MenuItem';
import Wrapper from './Wrapper';

const Headbar = () => {
  return (
    <Wrapper>
      <Brand src={Logo} />
      <Menu>
        {headLinks.map((nav, index) => (
          <MenuItem key={index}>
            <Link href={`#${nav.toLowerCase()}`}>
              {nav}
            </Link>
          </MenuItem>
        ))}
      </Menu>
    </Wrapper>
  );
};

export default Headbar;
