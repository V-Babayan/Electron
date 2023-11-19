import React from "react";

import { Table, Total } from "~/components/cart-layout/";
import { HOME_PAGE } from "~/helpers";
import { selectCartQuantity, useAppSelector } from "~/store";

import * as Styled from "./styled";

const Cart = () => {
  const cart = useAppSelector(selectCartQuantity);

  return cart ? (
    <Styled.Container>
      <Table />

      <Total />
    </Styled.Container>
  ) : (
    <Styled.CartEmptyBlock>
      Your cart is empty.
      <Styled.HomeLink to={HOME_PAGE}>Go home form shoping</Styled.HomeLink>
    </Styled.CartEmptyBlock>
  );
};

export default Cart;
