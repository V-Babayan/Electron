import React, { type FC } from "react";
import { Link } from "react-router-dom";

import { CartIcon, ProfileIcon } from "~/assets/icons";
import { ERoutePaths } from "~/helpers";
import { selectCartQuantity, useAppSelector } from "~/store";

import * as Styled from "./styled";

const HeaderTopButtons: FC = () => {
  const quantity = useAppSelector(selectCartQuantity);

  return (
    <Styled.ButtonsContainer>
      <Link to={ERoutePaths.LOGIN_PAGE}>
        <Styled.HeaderLink>
          <ProfileIcon />
          Sign in
        </Styled.HeaderLink>
      </Link>

      <Link to={ERoutePaths.CART_PAGE}>
        <Styled.HeaderLink $cartSize={quantity}>
          <div>
            <CartIcon />
          </div>
          Cart
        </Styled.HeaderLink>
      </Link>
    </Styled.ButtonsContainer>
  );
};

export { HeaderTopButtons };
