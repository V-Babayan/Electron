import { useChangeElementCount } from "hooks";
import { useState } from "react";

import { ReactComponent as HeartIcon } from "assets/icons/heart.svg";

import CountBlock from "components/count-block";
import { Button } from "components/core-ui";

import * as Styled from "./styled";

const formReset = (e) => e.preventDefault();

const AddToCartForm = ({ product }) => {
  const [count, setCount] = useState(1);

  const [clickHandler, isDisabled] = useChangeElementCount(product, count);

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
          onClick={clickHandler}
          disabled={isDisabled}>
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
