import React, { FC, useCallback } from "react";
import { useNavigate } from "react-router-dom";

import { CartIcon, EyeIcon } from "~/assets/icons";
import { EDeviceNames } from "~/helpers";
import { useMedia } from "~/hooks";
import type { Product } from "~/store";
import { addProduct, useAppDispatch } from "~/store";

import * as Styled from "./styled";

type CardButtonsProps = {
  item: Product;
};

const CardButtons: FC<CardButtonsProps> = ({ item }) => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const isDesktop = useMedia(EDeviceNames.desktop);

  const clickHandler = useCallback(
    () => navigate(`/products/${item.id}`),
    [item.id]
  );

  const addToCartHandler = () => {
    dispatch(addProduct({ product: item, quantity: 1 }));
  };

  return (
    <Styled.ButtonsContainer>
      <Styled.Button onClick={addToCartHandler}>
        <span>Add to Cart</span>
        {isDesktop && (
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
