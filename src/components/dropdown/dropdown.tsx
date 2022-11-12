import React, { FC, useCallback, useState } from "react";

import { MoreIcon } from "~/assets/icons";

import { DropdownItem } from "./dropdown-item";
import * as Styled from "./styled";

type DropdownProps = {
  defaultTitle: string;
  options: string[];
  primary?: boolean;
};

const Dropdown: FC<DropdownProps> = ({
  defaultTitle,
  options = [],
  primary,
}) => {
  const [show, setShow] = useState(false);

  const toggleShow = useCallback(() => {
    setShow((prev) => !prev);
  }, []);

  return (
    <Styled.DropContainer onMouseEnter={toggleShow} onMouseLeave={toggleShow}>
      <Styled.DropButton show={show} primary={primary}>
        {defaultTitle}
        <MoreIcon />
      </Styled.DropButton>

      {show && (
        <Styled.DropList primary={primary}>
          {options.map((option) => (
            <DropdownItem key={option} primary={primary} option={option} />
          ))}
        </Styled.DropList>
      )}
    </Styled.DropContainer>
  );
};

export { Dropdown };
