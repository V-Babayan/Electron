import React, { FC, useCallback } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { CartIcon, EyeIcon } from "~/assets/icons";
import { useMedia } from "~/hooks";
import { Product, addProduct } from "~/store";

import * as Styled from "./styled";

type CardButtonsProps = {
  item: Product;
};

const CardButtons: FC<CardButtonsProps> = ({ item }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isDesctop = useMedia("desctop");

  const clickHandler = useCallback(
    () => navigate(`${`/products/${item.id}`}`),
    [item.id]
  );

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
