import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useMedia } from "hooks";

import { CART_PAGE, HOME_PAGE, PRODUCTS_PAGE } from "helpers";

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
          <Dropdown defaultTitle='Pages'>
            <Styled.DropItem>
              <Link to={HOME_PAGE}>Home</Link>
            </Styled.DropItem>
            {/* <li>
              <Link to={}>About</Link>
            </li> */}
            <Styled.DropItem>
              <Link to={CART_PAGE}>Cart</Link>
            </Styled.DropItem>
          </Dropdown>
          <Link>About us</Link>
        </Styled.Nav>
      )}
    </>
  );
};

export { Menu };
