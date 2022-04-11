import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useMedia } from "hooks";

import { PRODUCTS_PAGE } from "helpers";

import { Dropdown } from "components/dropdown";

import * as Styled from "./styled";

const Menu = () => {
  const [menuActive, setMenuActive] = useState(false);
  const isTablet = useMedia("tablet");

  const burgerHandler = () => setMenuActive((prev) => !prev);

  return (
    <>
      {!isTablet && (
        <Styled.Burger
          active={menuActive}
          onClick={burgerHandler}
        />
      )}

      {(menuActive || isTablet) && (
        <Styled.Nav>
          <Link to={PRODUCTS_PAGE}>Products</Link>
          <Dropdown
            defaultTitle={"Pages"}
            options={["Home", "About", "Cart"]}
          />
          <Link>About us</Link>
        </Styled.Nav>
      )}
    </>
  );
};

export { Menu };
