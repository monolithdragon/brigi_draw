import React from 'react';

import Bar from './Bar';
import Wrapper from './Wrapper';

interface MenuIconProps {
  toggle: () => void;
  value: boolean;
}

const MenuIcon = ({ toggle, value }: MenuIconProps) => {
  return (
    <Wrapper onClick={toggle}>
      <Bar className={`bar1 ${value ? 'change' : ''}`} />
      <Bar className={`bar2 ${value ? 'change' : ''}`} />
      <Bar className={`bar3 ${value ? 'change' : ''}`} />
    </Wrapper>
  );
};

export default MenuIcon;
