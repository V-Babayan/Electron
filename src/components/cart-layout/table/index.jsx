import React, { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { emptyCart, selectCart } from "store";
import { HOME_PAGE } from "helpers";

import { CartItem, TableHead } from "./children";
import { Button } from "../../core-ui";

import * as Styled from "./styled";

const Table = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const cart = useSelector(selectCart);

  const goHomePageHandler = useCallback(() => {
    navigate(HOME_PAGE);
  }, [navigate]);

  const emptyCartHandler = useCallback(() => {
    dispatch(emptyCart());
  }, [dispatch]);

  return (
    <div>
      <Styled.Table>
        <TableHead />
        <tbody>
          {cart.map(({ product, count, id }) => (
            <CartItem
              key={id}
              id={id}
              item={product}
              count={count}
            />
          ))}
        </tbody>
      </Styled.Table>
      <Styled.ButtonsContainer>
        <Button
          onClick={goHomePageHandler}
          color='orange'>
          Continue shopping
        </Button>
        <Button
          outlined
          color='grey'>
          Update cart
        </Button>
        <Button
          outlined
          color='red'
          onClick={emptyCartHandler}>
          Clear cart
        </Button>
      </Styled.ButtonsContainer>
    </div>
  );
};

export { Table };
