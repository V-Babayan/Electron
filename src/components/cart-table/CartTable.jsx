import React, { useCallback } from "react";

import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { emptyCart } from "../../redux/cartClicer";

import { HOME_PAGE } from "../../helpers/consts";
import { deleteCartItem } from "../../http";

import { ButtonsContainer, STable, SThead } from "./CartTable.styled";
import CartItem from "../cart-item/CartItem";
import Button from "../core-ui/button/Button";

const CartTable = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.cart);

  const navigateHandler = useCallback(() => {
    navigate(HOME_PAGE);
  }, [navigate]);

  const emptyCartHandler = useCallback(async () => {
    for (let elem of cart) {
      await deleteCartItem(elem.id);
    }

    dispatch(emptyCart());
  }, [dispatch, cart]);

  return (
    <div>
      <STable>
        <SThead>
          <tr>
            <th>Product</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Subtotal</th>
            <th />
          </tr>
        </SThead>
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
      </STable>
      <ButtonsContainer>
        <Button onClick={navigateHandler}>Continue shopping</Button>
        <Button
          outlined
          color={"grey"}>
          Update cart
        </Button>
        <Button
          outlined
          color='red'
          onClick={emptyCartHandler}>
          Clear cart
        </Button>
      </ButtonsContainer>
    </div>
  );
};

export default CartTable;
