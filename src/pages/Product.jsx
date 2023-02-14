import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

import { ReactComponent as CheckBird } from "../assets/icons/checkbird.svg";
import { ReactComponent as HeartIcon } from "../assets/icons/heart.svg";
import Button from "../components/core-ui/button/Button";
import Rating from "../components/core-ui/rating/Rating";
import CountBlock from "../components/count-block/CountBlock";
import ProductSlider from "../components/product-slider/ProductSlider";
import { addItemToCart, fetchDevice } from "../http/index";

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${({ theme }) => theme.ratio.smallPhone(10, 40)};
  margin: 20px 0 ${({ theme }) => theme.ratio.smallPhone(10, 25)};

  @media screen and (${({ theme }) => theme.media.MaxTablet}) {
    grid-template-columns: 1fr;
  }
`;

const InfoContainer = styled.div`
  margin-bottom: 40px;
  padding-bottom: 20px;
  border-bottom: 1px solid #bdbdbd;
`;

const ItemTitle = styled.h5`
  font-weight: 500;
  font-size: 30px;
  line-height: 1.5;

  color: #003f62;
`;

const Price = styled.p`
  font-weight: 600;
  font-size: 30px;
  line-height: 1.5;

  color: #4a4a4a;
`;
const Indicator = styled.div`
  font-weight: 500;
  font-size: 18px;
  line-height: 1.5;

  display: flex;
  gap: 20px;
  align-items: center;

  margin: 16px 0;

  span {
    color: #30bd57;
  }
`;

const CountWrapper = styled.div`
  margin-bottom: ${({ theme }) => theme.ratio.smallPhone(10, 30)};

  label {
    margin-right: 20px;
  }
`;

const ButtonsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.ratio.smallPhone(10, 20)};

  font-size: ${({ theme }) => theme.ratio.smallPhone(16, 6)};

  @media screen and (${({ theme }) => theme.media.MaxNotebook}) {
    flex-wrap: wrap-reverse;
  }
  button {
    flex: 0 0 auto;
  }
`;

const FavButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 74px;
  height: 73px;
  border-radius: 50%;

  background: #eeeeee;

  svg {
    height: 27px;
  }
  &:hover {
    background: #cccccc;
  }
`;

const DescriptionWrapper = styled.div`
  padding: ${({ theme }) => `${theme.ratio.smallPhone(10, 32)} ${theme.ratio.smallPhone(10, 40)}`};
  border: 1px solid #b8b8b8;
  border-radius: 20px;

  line-height: 1.5;

  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-bottom: ${({ theme }) => theme.ratio.smallPhone(10, 90)};

  h5 {
    font-weight: 600;
    font-size: 22px;

    color: #003f62;
  }
  div {
    font-size: ${({ theme }) => theme.ratio.smallPhone(16, 4)};

    color: #4f4f4f;
  }
`;

const Product = () => {
  const { id } = useParams();
  const [item, setItem] = useState({});
  const [count, setCount] = useState(1);

  useEffect(() => {
    fetchDevice(id).then((json) => setItem(json));
  }, [id]);

  const clickHandler = () => {
    addItemToCart(item, count);
  };

  return (
    <>
      <Container>
        <div>
          <ProductSlider images={item.images} />
        </div>
        <div>
          <InfoContainer>
            <ItemTitle>{item.title}</ItemTitle>
            <Price>${item.price}</Price>
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
                setCount={setCount}
                maxCount={item.count}
              />
            </CountWrapper>

            <ButtonsContainer>
              <Button
                large
                onClick={clickHandler}>
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
