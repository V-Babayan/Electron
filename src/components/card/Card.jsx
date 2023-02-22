import React, { memo, useCallback, useState } from "react";

import { ReactComponent as HeartIcon } from "../../assets/icons/heart.svg";
import { ReactComponent as EyeIcon } from "../../assets/icons/eye.svg";
import { ReactComponent as CartIcon } from "../../assets/icons/cart.svg";
import Rating from "../core-ui/rating/Rating";

import {
  ButtonsContainer,
  Container,
  ImageBlock,
  InfoContainer,
  Price,
  StyledButton,
} from "./Card.styled";

import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addElement } from "../../redux/cartClicer";
import { addItemToCart } from "../../http";

const Card = ({ item }) => {
  const cart = useSelector((state) => state.cart.cart);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [hover, setHover] = useState(false);

  const clickHandler = useCallback(() => navigate(`${`/products/${item.id}`}`), [item, navigate]);

  const addToCart = () => {
    addItemToCart({ product: item, count: 1 });
    dispatch(
      addElement({
        product: item,
        count: 1,
        id: `${cart.length > 0 ? Number(cart[cart.length - 1].id) + 1 : 1}`,
      })
    );
  };

  return (
    <Container
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}>
      <ImageBlock hover={hover}>
        <img
          src={item.imageUrl}
          alt={item.title}
          loading='lazy'
        />
        <button aria-label='add to favorites'>
          <HeartIcon />
        </button>
      </ImageBlock>

      <>
        {hover ? (
          <ButtonsContainer>
            <StyledButton onClick={addToCart}>
              <span>Add to Cart</span>
              {window.matchMedia("(min-width: 1200px)").matches && (
                <div>
                  <CartIcon />
                </div>
              )}
            </StyledButton>
            <StyledButton onClick={clickHandler}>
              <EyeIcon />
            </StyledButton>
          </ButtonsContainer>
        ) : (
          <InfoContainer>
            <h5>{item.title}</h5>
            <Price>${item.price}</Price>
            <Rating defRating={item.rating} />
          </InfoContainer>
        )}
      </>
    </Container>
  );
};

export default memo(Card);
