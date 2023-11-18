import React, { FC, memo, RefObject } from "react";

import * as Styled from "./styled";

type ControlProps = {
  pageNumber: number;
  containerRef: RefObject<HTMLUListElement>;
  active: boolean;
};

const Control: FC<ControlProps> = ({ pageNumber, containerRef, active }) => {
  const clickHandler = () =>
    containerRef.current.scroll(
      pageNumber * containerRef.current.clientWidth,
      0
    );

  return (
    <Styled.Control
      aria-label="Scroll to page with number"
      $active={active}
      onClick={clickHandler}
    />
  );
};

export default memo(Control);
