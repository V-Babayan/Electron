import React, { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { ReactComponent as CheckBird } from "../../assets/icons/checkbird.svg";
import { ReactComponent as HeartIcon } from "../../assets/icons/heart.svg";
import Button from "../../components/core-ui/button/Button";
import Rating from "../../components/core-ui/rating/Rating";
import CountBlock from "../../components/count-block/CountBlock";
import ProductSlider from "../../components/product-slider/ProductSlider";

import { fetchDevice } from "../../http/index";
import { useChangeElementCount } from "../../hooks/useChangeElementCount";

import {
  Container,
  CountWrapper,
  DescriptionWrapper,
  FavButton,
  Indicator,
  InfoContainer,
  ButtonsContainer,
} from "./Product.styled";

const Product = () => {
  const { id } = useParams();
  const [item, setItem] = useState({});
  const [count, setCount] = useState(1);

  useEffect(() => {
    fetchDevice(id).then((json) => setItem(json));
  }, [id]);

  const [clickHandler, isDisabled] = useChangeElementCount(item, count);

  const incrementHandler = useCallback(() => setCount((prev) => prev + 1), []);
  const decrementHandler = useCallback(() => setCount((prev) => prev + 1), []);

  return (
    <>
      <Container>
        <div>
          <ProductSlider images={item.images} />
        </div>
        <div>
          <InfoContainer>
            <h5>{item.title}</h5>
            <p>${item.price}</p>
            <Rating
              defRating={item.rating}
              big
            />
            <Indicator>
              Availability: <CheckBird />
              <span>In stock</span>
            </Indicator>
            <div>
              {item.count
                ? `Hurry up! only ${item.count} product left in stock!`
                : "Sory this product isn't in stock"}
            </div>
          </InfoContainer>

          <form onSubmit={(e) => e.preventDefault()}>
            <CountWrapper>
              <label>Quantity :</label>
              <CountBlock
                count={count}
                increment={incrementHandler}
                decrement={decrementHandler}
                maxCount={item.count}
              />
            </CountWrapper>

            <ButtonsContainer>
              <Button
                large
                onClick={clickHandler}
                disabled={isDisabled}>
                Add to cart
              </Button>
              <Button large>Buy it now</Button>
              <FavButton>
                <HeartIcon />
              </FavButton>
            </ButtonsContainer>
          </form>
        </div>
      </Container>
      <DescriptionWrapper>
        <h5>Description</h5>
        <div>{item.description}</div>
      </DescriptionWrapper>
    </>
  );
};

export default Product;
