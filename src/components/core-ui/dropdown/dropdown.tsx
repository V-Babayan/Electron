import React, { FC, ReactNode } from "react";

import { useHover } from "~/hooks";

import * as Styled from "./styled";

type DropdownProps = { children: ReactNode; overlay: ReactNode };

const Dropdown: FC<DropdownProps> = ({ children, overlay }) => {
  const { hover, ref } = useHover<HTMLDivElement>();

  return (
    <Styled.DropContainer ref={ref}>
      {children} {hover && overlay}
    </Styled.DropContainer>
  );
};

export { Dropdown };
