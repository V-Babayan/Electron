import { memo } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

import { addProduct, deleteElement } from "store";

import CountBlock from "components/count-block";
import deleteIcon from "assets/icons/delete.svg";

import * as Styled from "./styled";

const CartItem = ({ cartItem }) => {
  const { id, product, count } = cartItem;
  const dispatch = useDispatch();

  const deleteCartElement = () => {
    dispatch(deleteElement(id));
  };

  const productCountIncrementHandler = () => {
    dispatch(addProduct({ product, quanity: 1 }));
  };
  const productCountDecrementHandler = () => {
    dispatch(addProduct({ product, quanity: -1 }));
  };

  return (
    <Styled.Row>
      <td>
        <Styled.Figure>
          <div>
            <img
              src={`${product.imageUrl}`}
              alt={product.title}
            />
          </div>
          <figcaption>
            <Link to={`/products/${product.id}`}>{product.title}</Link>
          </figcaption>
        </Styled.Figure>
      </td>
      <td data-title='Price'>${product.price}</td>
      <td data-title='Count'>
        <CountBlock
          count={count}
          increment={productCountIncrementHandler}
          decrement={productCountDecrementHandler}
          responsive
        />
      </td>
      <td data-title='Subtotal'>${product.price * count}</td>
      <td>
        <button onClick={deleteCartElement}>
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

export default memo(CartItem);
