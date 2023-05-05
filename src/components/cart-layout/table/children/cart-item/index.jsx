import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

import { addProduct, deleteElement } from "store";

import CountBlock from "components/count-block";
import deleteIcon from "assets/icons/delete.svg";

import * as Styled from "./styled";

const CartItem = ({ item = {}, count, id }) => {
  const dispatch = useDispatch();

  const deleteCartElement = () => {
    dispatch(deleteElement(id));
  };

  const productCountIncrementHandler = () => {
    dispatch(addProduct({ product: item, quanity: 1 }));
  };
  const productCountDecrementHandler = () => {
    dispatch(addProduct({ product: item, quanity: -1 }));
  };

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
          increment={productCountIncrementHandler}
          decrement={productCountDecrementHandler}
          responsive
        />
      </td>
      <td data-title='Subtotal'>${item.price * count}</td>
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

export default CartItem;
