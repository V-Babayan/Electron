import { useState } from "react";
import { useDispatch } from "react-redux";

import { ReactComponent as HeartIcon } from "assets/icons/heart.svg";

import { addProduct } from "store";

import CountBlock from "components/count-block";
import { Button } from "components/core-ui";

import * as Styled from "./styled";

const formReset = (e) => e.preventDefault();

const AddToCartForm = ({ product }) => {
  const dispatch = useDispatch();
  const [count, setCount] = useState(1);

  const addToCartHandler = () => {
    dispatch(addProduct({ product, quanity: count }));
  };

  return (
    <form onSubmit={formReset}>
      <Styled.CountWrapper>
        <label>Quantity :</label>
        <CountBlock
          count={count}
          setCount={setCount}
          maxCount={product.count}
        />
      </Styled.CountWrapper>

      <Styled.ButtonsContainer>
        <Button
          large
          color='orange'
          onClick={addToCartHandler}>
          Add to cart
        </Button>
        <Button
          large
          color='orange'>
          Buy it now
        </Button>
        <Styled.FavButton>
          <HeartIcon />
        </Styled.FavButton>
      </Styled.ButtonsContainer>
    </form>
  );
};

export { AddToCartForm };
