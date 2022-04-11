import React, { memo, useCallback, useState } from "react";
import { useChangeElementCount, useMedia } from "hooks";
import { useNavigate } from "react-router-dom";

import { ReactComponent as HeartIcon } from "assets/icons/heart.svg";
import { ReactComponent as EyeIcon } from "assets/icons/eye.svg";
import { ReactComponent as CartIcon } from "assets/icons/cart.svg";

import { Rating } from "components/core-ui/";

import * as Styled from "./styled";

const Card = ({ item }) => {
  const navigate = useNavigate();
  const [hover, setHover] = useState(false);

  const clickHandler = useCallback(() => navigate(`${`/products/${item.id}`}`), []);

  const [addToCart] = useChangeElementCount(item);
  const isDesctop = useMedia("desctop");

  return (
    <Styled.Container
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}>
      <Styled.ImageBlock hover={hover}>
        <img
          src={item.imageUrl}
          alt={item.title}
          loading='lazy'
        />
        <button aria-label='add to favorites'>
          <HeartIcon />
        </button>
      </Styled.ImageBlock>

      <>
        {hover ? (
          <Styled.ButtonsContainer>
            <Styled.Button onClick={addToCart}>
              <span>Add to Cart</span>
              {isDesctop && (
                <div>
                  <CartIcon />
                </div>
              )}
            </Styled.Button>
            <Styled.Button onClick={clickHandler}>
              <EyeIcon />
            </Styled.Button>
          </Styled.ButtonsContainer>
        ) : (
          <Styled.InfoContainer>
            <h5>{item.title}</h5>
            <Styled.Price>${item.price}</Styled.Price>
            <Rating defRating={item.rating} />
          </Styled.InfoContainer>
        )}
      </>
    </Styled.Container>
  );
};

export default memo(Card);
