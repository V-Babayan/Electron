import { useMedia } from "hooks";
import React, { useCallback } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { addProduct } from "store";

import { ReactComponent as CartIcon } from "assets/icons/cart.svg";
import { ReactComponent as EyeIcon } from "assets/icons/eye.svg";

import * as Styled from "./styled";

const CardButtons = ({ item }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isDesctop = useMedia("desctop");

  const clickHandler = useCallback(() => navigate(`${`/products/${item.id}`}`), [item.id]);

  const addToCartHandler = () => {
    dispatch(addProduct({ product: item, quantity: 1 }));
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
