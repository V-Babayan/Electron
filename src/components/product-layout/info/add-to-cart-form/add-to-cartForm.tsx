import React, { FC, FormEvent, useCallback, useState } from "react";
import { useDispatch } from "react-redux";

import { HeartIcon } from "~/assets/icons";
import { Button, CountBlock } from "~/components";
import { Product, addProduct } from "~/store";

import * as Styled from "./styled";

const formReset = (e: FormEvent) => e.preventDefault();

const AddToCartForm: FC<{ product: Product }> = ({ product }) => {
  const dispatch = useDispatch();
  const [count, setCount] = useState(1);

  const addToCartHandler = () => {
    dispatch(addProduct({ product, quantity: count }));
  };

  const incrementHandler = useCallback(() => setCount(prev => prev + 1), []);
  const decrementHandler = useCallback(() => setCount(prev => prev - 1), []);

  return (
    <form onSubmit={formReset}>
      <Styled.CountWrapper>
        <label>Quantity :</label>
        <CountBlock
          count={count}
          maxCount={product.count}
          increment={incrementHandler}
          decrement={decrementHandler}
        />
      </Styled.CountWrapper>

      <Styled.ButtonsContainer>
        <Button large color="orange" onClick={addToCartHandler}>
          Add to cart
        </Button>
        <Button large color="orange">
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
