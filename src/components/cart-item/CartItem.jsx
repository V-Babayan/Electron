import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

import { deleteElement } from "../../redux/cartClicer";
import { deleteCartItem } from "../../http";

import CountBlock from "../count-block/CountBlock";
import { Row, SFigure } from "./CartItem.styled";
import deleteIcon from "../../assets/icons/delete.svg";

const CartItem = ({ item = {}, count, id }) => {
  const disaptch = useDispatch();

  const clickHandler = () => {
    deleteCartItem(id);
    disaptch(deleteElement(id));
  };

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
