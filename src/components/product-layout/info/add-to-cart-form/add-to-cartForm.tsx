import React, { FC, FormEvent, useState } from "react";
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
