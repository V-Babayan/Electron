import React from "react";
import { useSelector } from "react-redux";

import * as Styled from "./styled";

import CartTable from "components/cart-table/CartTable";
import CartTotal from "components/cart-total/CartTotal";
import { HOME_PAGE } from "helpers";
import { selectCart } from "store";

const Cart = () => {
  const cart = useSelector(selectCart);

  return cart.length ? (
    <Styled.Container>
      <CartTable />

      <CartTotal />
    </Styled.Container>
  ) : (
    <Styled.CartEmptyBlock>
      Your cart is empty. <Styled.HomeLink to={HOME_PAGE}>Go home form shoping</Styled.HomeLink>
    </Styled.CartEmptyBlock>
  );
};

export default Cart;
