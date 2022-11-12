import React, { FC } from "react";
import { Link } from "react-router-dom";

import { CART_PAGE, LOGIN_PAGE } from "~/helpers";
import { selectCartQuanity, useAppSelector } from "~/store";
import { CartIcon, ProfileIcon } from "~/assets/icons";

import * as Styled from "./styled";

const HeaderTopButtons: FC = () => {
  const quantity = useAppSelector(selectCartQuanity);

  return (
    <Styled.ButtonsContainer>
      <Link to={LOGIN_PAGE}>
        <Styled.HeaderLink>
          <ProfileIcon />
          Sign in
        </Styled.HeaderLink>
      </Link>

      <Link to={CART_PAGE}>
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
