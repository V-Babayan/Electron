import React, { useCallback, useState } from "react";
import { Link } from "react-router-dom";

import Dropdown from "../dropdown/Dropdown";
import { Burger, SNav } from "./Menu.styled";

const Menu = () => {
  const [menuActive, setMenuActive] = useState(false);

  const burgerHandler = useCallback(() => setMenuActive((prev) => !prev), []);

  return (
    <>
      {window.matchMedia("(max-width: 767.98px)").matches ? (
        <>
          <Burger
            active={menuActive}
            onClick={burgerHandler}
          />
          {menuActive && (
            <SNav>
              <Link>Blog</Link>
              <Dropdown
                defaultTitle={"Pages"}
                options={["Home", "About", "Cart"]}
              />
              <Link>About us</Link>
            </SNav>
          )}
        </>
      ) : (
        <SNav>
          <Link>Blog</Link>
          <Dropdown
            defaultTitle={"Pages"}
            options={["Home", "About", "Cart"]}
          />
          <Link>About us</Link>
        </SNav>
      )}
    </>
  );
};

export default Menu;
