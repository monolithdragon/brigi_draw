import React, { useCallback, useState } from 'react';

import Link, { navLinks } from './Link';
import Menu from './Menu';
import MenuItem from './MenuItem';

const DesktopBar = () => {
  const [active, setActive] = useState<string | null>(null);

  return (
    <Menu>
      {navLinks.map((nav, index) => (
        <MenuItem key={index} className={`${active === nav ? 'active' : ''}`} onClick={() => setActive(nav)}>
          <Link href={`#${nav.toLowerCase()}`}>{nav}</Link>
        </MenuItem>
      ))}
    </Menu>
  );
};

export default DesktopBar;
