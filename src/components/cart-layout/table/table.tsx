import React, { FC } from "react";
import { useNavigate } from "react-router-dom";

import { HOME_PAGE } from "~/helpers";
import { emptyCart, selectCart, useAppDispatch, useAppSelector } from "~/store";

import { Button } from "../../core-ui";
import { CartItem, TableHead } from "./children";

import * as Styled from "./styled";

const Table: FC = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const cart = useAppSelector(selectCart);

  const goHomePageHandler = () => {
    navigate(HOME_PAGE);
  };

  const emptyCartHandler = () => {
    dispatch(emptyCart());
  };

  return (
    <div>
      <Styled.Table>
        <TableHead />
        <tbody>
          {cart.map(cartItem => (
            <CartItem key={cartItem.id} cartItem={cartItem} />
          ))}
        </tbody>
      </Styled.Table>
      <Styled.ButtonsContainer>
        <Button onClick={goHomePageHandler} color="orange">
          Continue shopping
        </Button>
        <Button outlined color="grey">
          Update cart
        </Button>
        <Button outlined color="red" onClick={emptyCartHandler}>
          Clear cart
        </Button>
      </Styled.ButtonsContainer>
    </div>
  );
};

export { Table };
