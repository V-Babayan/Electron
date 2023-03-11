import React from "react";

import CartTable from "../../components/cart-table/CartTable";
import CartTotal from "../../components/cart-total/CartTotal";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { HOME_PAGE } from "../../helpers";
import { Container, EmptyBlock } from "./Cart.styled";

const Cart = () => {
  const cart = useSelector((state) => state.cart.cart);

  return cart.length ? (
    <Container>
      <CartTable />

      <CartTotal />
    </Container>
  ) : (
    <EmptyBlock>
      Your cart is empty. <Link to={HOME_PAGE}>Go home form shoping</Link>
    </EmptyBlock>
  );
};

export default Cart;
