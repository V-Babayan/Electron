import React, { FC, useState } from "react";
import { Link } from "react-router-dom";

import { MoreIcon } from "~/assets/icons";
import { Dropdown } from "~/components";
import { EDeviceNames, ERoutePaths } from "~/helpers";
import { useMedia } from "~/hooks";

import * as Styled from "./styled";

const Menu: FC = () => {
  const [menuActive, setMenuActive] = useState(false);
  const isTablet = useMedia(EDeviceNames.tablet);

  const burgerHandler = () => setMenuActive(prev => !prev);

  return (
    <>
      {!isTablet && (
        <Styled.Burger active={menuActive} onClick={burgerHandler} />
      )}

      {(menuActive || isTablet) && (
        <Styled.Nav>
          <Link to={ERoutePaths.PRODUCTS_PAGE}>Products</Link>
          <Dropdown
            overlay={
              <Styled.DropList>
                <Styled.DropItem>
                  <Link to={ERoutePaths.HOME_PAGE}>Home</Link>
                </Styled.DropItem>
                {/* <li>
                  <Link to={}>About</Link>
                </li> */}
                <Styled.DropItem>
                  <Link to={ERoutePaths.CART_PAGE}>Cart</Link>
                </Styled.DropItem>
              </Styled.DropList>
            }
          >
            <Styled.DropButton>
              Pages <MoreIcon />
            </Styled.DropButton>
          </Dropdown>

          <Link to="">About us</Link>
        </Styled.Nav>
      )}
    </>
  );
};

export { Menu };
