import React, { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { emptyCart, selectCart } from "store";
import { HOME_PAGE } from "helpers";
import { deleteAllCartItems } from "api";

import { CartItem, TableHead } from "./children";
import { Button } from "../../core-ui";

import * as Styled from "./styled";

const Table = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const cart = useSelector(selectCart);

  const navigateHandler = useCallback(() => {
    navigate(HOME_PAGE);
  }, [navigate]);

  const emptyCartHandler = useCallback(async () => {
    deleteAllCartItems(cart).then((json) => {
      console.log(json);
      dispatch(emptyCart());
    });
  }, [dispatch, cart]);

  return (
    <div>
      <Styled.Table>
        <TableHead />
        <tbody>
          {cart.map(({ product, count, id }, index) => (
            <CartItem
              key={id}
              item={product}
              count={count}
              id={id}
              index={index}
            />
          ))}
        </tbody>
      </Styled.Table>
      <Styled.ButtonsContainer>
        <Button
          onClick={navigateHandler}
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
