import React from "react";
import { useHover } from "hooks";

import { ReactComponent as MoreIcon } from "assets/icons/more.svg";

import * as Styled from "./styled";

const Dropdown = ({ defaultTitle, children, primary }) => {
  const { hover, ref } = useHover();

  return (
    <Styled.DropContainer
      ref={ref}
      primary={primary}>
      <Styled.DropButton primary={primary}>
        {defaultTitle}
        <MoreIcon />
      </Styled.DropButton>

      {hover && <Styled.DropList primary={primary}>{children}</Styled.DropList>}
    </Styled.DropContainer>
  );
};

export { Dropdown };
