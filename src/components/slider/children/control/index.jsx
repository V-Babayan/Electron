import React, { memo } from "react";

import * as Styled from "./styled";

const Control = ({ pageNumber, containerRef, active }) => {
  const clickHandler = () =>
    containerRef.current.scroll(pageNumber * containerRef.current.clientWidth, 0);

  return (
    <Styled.Control
      aria-label='Scroll to page with number'
      active={active}
      onClick={clickHandler}
    />
  );
};

export default memo(Control);
