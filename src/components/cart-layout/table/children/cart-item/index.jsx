import React, { useCallback } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

import {
  //  changeElementCount,
  deleteElement,
} from "store";
import { changeCountInCart, deleteCartItem } from "api";

import CountBlock from "components/count-block";
import deleteIcon from "assets/icons/delete.svg";

import * as Styled from "./styled";

const CartItem = ({ item = {}, count, id, index }) => {
  const dispatch = useDispatch();

  const clickHandler = () => {
    deleteCartItem(id);
    dispatch(deleteElement(id));
  };

  // const incrementHandler = useCallback(() => {
  //   changeCountInCart(id, item, count + 1);
  //   dispatch(changeElementCount({ index, count: count + 1 }));
  // }, [count, id, item, index, dispatch]);

  // const decrementHandler = useCallback(() => {
  //   changeCountInCart(id, item, count - 1);
  //   dispatch(changeElementCount({ index, count: count - 1 }));
  // }, [count, id, item, index, dispatch]);

  return (
    <Styled.Row>
      <td>
        <Styled.Figure>
          <div>
            <img
              src={`${item.imageUrl}`}
              alt={item.title}
            />
          </div>
          <figcaption>
            <Link to={`/products/${item.id}`}>{item.title}</Link>
          </figcaption>
        </Styled.Figure>
      </td>
      <td data-title='Price'>${item.price}</td>
      <td data-title='Count'>
        <CountBlock
          count={count}
          // increment={incrementHandler}
          // decrement={decrementHandler}
          responsive
        />
      </td>
      <td data-title='Subtotal'>${item.price * count}</td>
      <td>
        <button onClick={clickHandler}>
          <img
            src={deleteIcon}
            width='24'
            height='25'
            alt='Delete icon'
          />
        </button>
      </td>
    </Styled.Row>
  );
};

export default CartItem;
