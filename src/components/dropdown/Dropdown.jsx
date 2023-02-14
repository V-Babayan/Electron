import React, { useState } from "react";
import { Link } from "react-router-dom";

import { DropButton, DropContainer, DropItem, DropList } from "./Dropdown.styled";
import { ReactComponent as MoreIcon } from "../../assets/icons/more.svg";

const Dropdown = ({ defaultTitle, options = [], primary }) => {
  const [show, setShow] = useState(false);

  const toggleShow = () => {
    setShow((prev) => !prev);
  };

  return (
    <DropContainer
      primary={primary}
      onMouseEnter={() => toggleShow()}
      onMouseLeave={() => toggleShow()}>
      <DropButton
        show={show}
        primary={primary}>
        {defaultTitle}
        <MoreIcon />
      </DropButton>

      {show && (
        <DropList primary={primary}>
          {options.map((option) => (
            <Link key={option}>
              <DropItem primary={primary}>{option}</DropItem>
            </Link>
          ))}
        </DropList>
      )}
    </DropContainer>
  );
};

export default Dropdown;
