import React, { useCallback } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

import { changeElementCount, deleteElement } from "../../redux/cartClicer";
import { changeCountInCart, deleteCartItem } from "../../http";

import CountBlock from "../count-block/CountBlock";
import { Row, SFigure } from "./CartItem.styled";
import deleteIcon from "../../assets/icons/delete.svg";

const CartItem = ({ item = {}, count, id, index }) => {
  const disaptch = useDispatch();

  const clickHandler = () => {
    deleteCartItem(id);
    disaptch(deleteElement(id));
  };

  const incrementHandler = useCallback(() => {
    changeCountInCart(id, item, count + 1);
    disaptch(changeElementCount({ index, count: count + 1 }));
  }, [count]);

  const decrementHandler = useCallback(() => {
    changeCountInCart(id, item, count - 1);
    disaptch(changeElementCount({ index, count: count - 1 }));
  }, [count]);

  return (
    <Row>
      <td>
        <SFigure>
          <div>
            <img
              src={`${item.imageUrl}`}
              alt={item.title}
            />
          </div>
          <figcaption>
            <Link to={`/products/${item.id}`}>{item.title}</Link>
          </figcaption>
        </SFigure>
      </td>
      <td data-title='Price'>${item.price}</td>
      <td data-title='Count'>
        <CountBlock
          count={count}
          increment={incrementHandler}
          decrement={decrementHandler}
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
    </Row>
  );
};

export default CartItem;
