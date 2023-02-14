import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

import { deleteElement } from "../../redux/cartClicer";
import { deleteCartItem } from "../../http";

import CountBlock from "../count-block/CountBlock";
import { Row, SButton, SFigure } from "./CartItem.styled";
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
      <td>${item.price}</td>
      <td>
        <CountBlock count={count} />
      </td>
      <td>${item.price * count}</td>
      <td>
        <SButton onClick={clickHandler}>
          <img
            src={deleteIcon}
            width='24'
            height='25'
            alt='Delete icon'
          />
        </SButton>
      </td>
    </Row>
  );
};

export default CartItem;
