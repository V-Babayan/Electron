import React, { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useMedia } from "hooks";

import { addProduct } from "store";

import { ReactComponent as EyeIcon } from "assets/icons/eye.svg";
import { ReactComponent as CartIcon } from "assets/icons/cart.svg";

import * as Styled from "./styled";

const CardButtons = ({ item }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isDesctop = useMedia("desctop");

  const clickHandler = useCallback(() => navigate(`${`/products/${item.id}`}`), [item.id]);

  const addToCartHandler = () => {
    dispatch(addProduct({ product: item, quanity: 1 }));
  };

  return (
    <Styled.ButtonsContainer>
      <Styled.Button onClick={addToCartHandler}>
        <span>Add to Cart</span>
        {isDesctop && (
          <Styled.IconBlock>
            <CartIcon />
          </Styled.IconBlock>
        )}
      </Styled.Button>
      <Styled.Button onClick={clickHandler}>
        <EyeIcon />
      </Styled.Button>
    </Styled.ButtonsContainer>
  );
};

export { CardButtons };
