import React, { useState } from "react";
import { Link } from "react-router-dom";

import { DropButton, DropContainer, DropItem, DropList } from "./Dropdown.styled";
import { ReactComponent as MoreIcon } from "../../assets/icons/more.svg";
import { PRODUCTS_PAGE } from "../../helpers/consts";

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
            <Link
              key={option}
              to={primary && PRODUCTS_PAGE}
              state={{ categories: [option] }}>
              <DropItem primary={primary}>{option}</DropItem>
            </Link>
          ))}
        </DropList>
      )}
    </DropContainer>
  );
};

export default Dropdown;
