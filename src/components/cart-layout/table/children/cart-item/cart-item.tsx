import React, { FC, memo } from "react";
import { Link } from "react-router-dom";

import { DeleteIcon } from "~/assets/icons";
import { CountBlock } from "~/components";
import {
  addProduct,
  CartProduct,
  deleteElement,
  useAppDispatch,
} from "~/store";

import * as Styled from "./styled";

type CartItemProps = {
  cartItem: CartProduct;
};

const CartItem: FC<CartItemProps> = ({ cartItem }) => {
  const { id, product, count } = cartItem;
  const dispatch = useAppDispatch();

  const deleteCartElement = () => {
    dispatch(deleteElement({ id }));
  };

  const productCountIncrementHandler = () => {
    dispatch(addProduct({ product, quantity: 1 }));
  };
  const productCountDecrementHandler = () => {
    dispatch(addProduct({ product, quantity: -1 }));
  };

  return (
    <Styled.CartItem>
      <td>
        <Styled.Figure>
          <div>
            <img src={`${product.imageUrl}`} alt={product.title} />
          </div>
          <figcaption>
            <Link to={`/products/${product.id}`}>{product.title}</Link>
          </figcaption>
        </Styled.Figure>
      </td>
      <td data-title="Price">${product.price}</td>
      <td data-title="Count">
        <CountBlock
          count={count}
          increment={productCountIncrementHandler}
          decrement={productCountDecrementHandler}
          responsive
        />
      </td>
      <td data-title="Subtotal">${product.price * count}</td>
      <td>
        <button onClick={deleteCartElement}>
          <DeleteIcon width="24" height="25" />
        </button>
      </td>
    </Styled.CartItem>
  );
};

export default memo(CartItem);
