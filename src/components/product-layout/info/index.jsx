import { useState } from "react";
import { useChangeElementCount } from "hooks";

import { ReactComponent as CheckbirdIcon } from "assets/icons/checkbird.svg";
import { ReactComponent as HeartIcon } from "assets/icons/heart.svg";

import { Button, Rating } from "components/core-ui/";
import CountBlock from "components/count-block";

import * as Styled from "./styled";

const formReset = (e) => e.preventDefault();

const Info = ({ product }) => {
  const [count, setCount] = useState(1);

  const [clickHandler, isDisabled] = useChangeElementCount(product, count);

  return (
    <div>
      <Styled.InfoContainer>
        <Styled.ProductName>{product.title}</Styled.ProductName>
        <Styled.ProductPrice>${product.price}</Styled.ProductPrice>
        <Rating
          defRating={product.rating}
          big
        />
        <Styled.ProductHaveIndicator>
          Availability: <CheckbirdIcon />
          <span>In stock</span>
        </Styled.ProductHaveIndicator>
        <div>
          {product.count
            ? `Hurry up! only ${product.count} product left in stock!`
            : "Sory this product isn't in stock"}
        </div>
      </Styled.InfoContainer>

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
    </div>
  );
};

export { Info };
