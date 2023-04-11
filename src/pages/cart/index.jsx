import React from "react";
import { useSelector } from "react-redux";

import * as Styled from "./styled";

import { Table, Total } from "components/cart-layout/";
import { HOME_PAGE } from "helpers";
import { selectCart } from "store";

const Cart = () => {
  const cart = useSelector(selectCart);

  return cart.length ? (
    <Styled.Container>
      <Table />

      <Total />
    </Styled.Container>
  ) : (
    <Styled.CartEmptyBlock>
      Your cart is empty. <Styled.HomeLink to={HOME_PAGE}>Go home form shoping</Styled.HomeLink>
    </Styled.CartEmptyBlock>
  );
};

export default Cart;
