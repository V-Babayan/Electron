import React, { useCallback, useState } from "react";

import { ReactComponent as MoreIcon } from "assets/icons/more.svg";
import DropdownItem from "./DropdownItem";

import * as Styled from "./styled";

const Dropdown = ({ defaultTitle, options = [], primary }) => {
  const [show, setShow] = useState(false);

  const toggleShow = useCallback(() => {
    setShow((prev) => !prev);
  }, []);

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

      {show && (
        <Styled.DropList primary={primary}>
          {options.map((option) => (
            <DropdownItem
              key={option}
              primary={primary}
              option={option}
            />
          ))}
        </Styled.DropList>
      )}
    </Styled.DropContainer>
  );
};

export { Dropdown };
