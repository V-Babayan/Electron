import React, { memo } from "react";

import { SControl } from "./Slider.styled";

const Control = ({ index, active, containerRef }) => {
  return (
    <SControl
      aria-label='scroll to page'
      active={active}
      onClick={() => containerRef.current.scroll(index * containerRef.current.clientWidth, 0)}
    />
  );
};

export default memo(Control);
