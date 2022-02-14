import React from "react";
import styled from "styled-components";

import CartTable from "../components/cart-table/CartTable";
import CartTotal from "../components/cart-total/CartTotal";

const Container = styled.div`
  display: flex;
  gap: 20px;

  & > div:first-child {
    flex: 1 0 70%;
  }
  & > div:last-child {
    flex: 1 1 auto;
    max-width: 325px;
  }
`;

const Cart = () => {
  return (
    <Container>
      <CartTable />

      <CartTotal />
    </Container>
  );
};

export default Cart;
