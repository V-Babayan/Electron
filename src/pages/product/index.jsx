import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useChangeElementCount } from "hooks";

import { getProduct } from "http";

import * as Styled from "./styled";

import { ReactComponent as CheckbirdIcon } from "assets/icons/checkbird.svg";
import { ReactComponent as HeartIcon } from "assets/icons/heart.svg";

import Button from "components/core-ui/button/Button";
import Rating from "components/core-ui/rating/Rating";
import CountBlock from "components/count-block/CountBlock";
import ProductSlider from "components/product-slider/ProductSlider";

const formReset = (e) => e.preventDefault();

const Product = () => {
  const { id } = useParams();
  const [item, setItem] = useState({});
  const [count, setCount] = useState(1);

  const [clickHandler, isDisabled] = useChangeElementCount(item, count);

  useEffect(() => {
    getProduct(id).then((data) => setItem(data));
  }, []);

  return (
    <>
      <Styled.Container>
        <div>
          <ProductSlider images={item.images} />
        </div>
        <div>
          <Styled.InfoContainer>
            <Styled.ProductName>{item.title}</Styled.ProductName>
            <Styled.ProductPrice>${item.price}</Styled.ProductPrice>
            <Rating
              defRating={item.rating}
              big
            />
            <Styled.ProductHaveIndicator>
              Availability: <CheckbirdIcon />
              <span>In stock</span>
            </Styled.ProductHaveIndicator>
            <div>
              {item.count
                ? `Hurry up! only ${item.count} product left in stock!`
                : "Sory this product isn't in stock"}
            </div>
          </Styled.InfoContainer>

          <form onSubmit={formReset}>
            <Styled.CountWrapper>
              <label>Quantity :</label>
              <CountBlock
                count={count}
                setCount={setCount}
                maxCount={item.count}
              />
            </Styled.CountWrapper>

            <Styled.ButtonsContainer>
              <Button
                large
                onClick={clickHandler}
                disabled={isDisabled}>
                Add to cart
              </Button>
              <Button large>Buy it now</Button>
              <Styled.FavButton>
                <HeartIcon />
              </Styled.FavButton>
            </Styled.ButtonsContainer>
          </form>
        </div>
      </Styled.Container>
      <Styled.DescriptionWrapper>
        <Styled.DescriptionTitle>Description</Styled.DescriptionTitle>
        <Styled.DescriptionText>{item.description}</Styled.DescriptionText>
      </Styled.DescriptionWrapper>
    </>
  );
};

export default Product;
