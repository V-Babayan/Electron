import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { CART_PAGE, LOGIN_PAGE } from "helpers";
import { selectCartQuanity } from "store";

import { ReactComponent as CartIcon } from "assets/icons/cart.svg";
import { ReactComponent as ProfileIcon } from "assets/icons/profile.svg";

import * as Styled from "./styled";

const HeaderTopButtons = () => {
  const quantity = useSelector(selectCartQuanity);

  return (
    <Styled.ButtonsContainer>
      <Link to={LOGIN_PAGE}>
        <Styled.HeaderLink>
          <ProfileIcon />
          Sign in
        </Styled.HeaderLink>
      </Link>

      <Link to={CART_PAGE}>
        <Styled.HeaderLink cartSize={quantity}>
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
