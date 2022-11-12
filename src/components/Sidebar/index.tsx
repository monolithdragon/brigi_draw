import React, { useState } from 'react';

import Backdrop from './Backdrop';
import Link, { navLinks } from './Link';
import Menu from './Menu';
import MenuItem from './MenuItem';

const Sidebar = () => {
  const [active, setActive] = useState<string | null>(null);

  return (
    <Backdrop>
      <Menu>
        {navLinks.map((nav, index) => (
          <MenuItem key={index}>
            <Link href={`#${nav.toLowerCase()}`}>{nav}</Link>
          </MenuItem>
        ))}
      </Menu>
    </Backdrop>
  );
};

export default Sidebar;
