import React, { useState } from "react";

import { ReactComponent as MoreIcon } from "assets/icons/more.svg";

import * as Styled from "./styled";

const Dropdown = ({ defaultTitle, children, primary }) => {
  const [show, setShow] = useState(false);

  const toggleShow = () => {
    setShow((prev) => !prev);
  };

  return (
    <Styled.DropContainer
      primary={primary}
      onMouseEnter={toggleShow}
      onMouseLeave={toggleShow}>
      <Styled.DropButton
        show={show}
        primary={primary}>
        {defaultTitle}
        <MoreIcon />
      </Styled.DropButton>

      {show && <Styled.DropList primary={primary}>{children}</Styled.DropList>}
    </Styled.DropContainer>
  );
};

export { Dropdown };
