import React, { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { useChangeElementCount, useMedia } from "hooks";

import { ReactComponent as EyeIcon } from "assets/icons/eye.svg";
import { ReactComponent as CartIcon } from "assets/icons/cart.svg";

import * as Styled from "./styled";

const CardButtons = ({ item }) => {
  const navigate = useNavigate();
  const isDesctop = useMedia("desctop");

  const clickHandler = useCallback(() => navigate(`${`/products/${item.id}`}`), [item.id]);

  const [addToCart] = useChangeElementCount(item);

  return (
    <Styled.ButtonsContainer>
      <Styled.Button onClick={addToCart}>
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
