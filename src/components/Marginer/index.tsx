import React from "react";
import HorizontalSpace from './HorizontalSpace';
import VerticalSpace from './VerticalSpace';

interface MarginerProps {
    direction?: string;
    spacing?: string | number;
}

const Marginer = ({direction, spacing}: MarginerProps) => {
  
  if (direction === "horizontal") {
     return <HorizontalSpace spacing={spacing} />;
  }
  else {
    return <VerticalSpace spacing={spacing} />;
  }
}

Marginer.defaultProps = {
  direction: "horizontal",
};

export default Marginer;