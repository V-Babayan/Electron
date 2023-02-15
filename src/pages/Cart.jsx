import React from "react";
import styled from "styled-components";

import CartTable from "../components/cart-table/CartTable";
import CartTotal from "../components/cart-total/CartTotal";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { HOME_PAGE } from "../helpers/consts";

const Container = styled.div`
  display: flex;
  flex-direction: column-reverse;
  gap: 20px;

  @media screen and (${({ theme }) => theme.media.MinNotebook}) {
    flex-direction: row;

    & > div {
      flex: 1 1 70%;
    }
    & > section {
      flex: 1 1 auto;
    }
  }
`;

const EmptyBlock = styled.div`
  width: 100%;
  height: 20vh;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 15px;

  font-size: ${({ theme }) => theme.ratio.smallPhone(16, 16)};

  a {
    color: #008cff;
    font-weight: 700;

    :hover {
      color: #008cff85;
    }
  }
`;

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
