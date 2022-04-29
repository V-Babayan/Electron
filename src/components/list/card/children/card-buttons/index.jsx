import React, { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { useChangeElementCount, useMedia } from "hooks";

import { ReactComponent as EyeIcon } from "assets/icons/eye.svg";
import { ReactComponent as CartIcon } from "assets/icons/cart.svg";

import * as Styled from "./styled";

const CardButtons = ({ item }) => {
  const navigate = useNavigate();

  const clickHandler = useCallback(() => navigate(`${`/products/${item.id}`}`), []);

  const [addToCart] = useChangeElementCount(item);
  const isDesctop = useMedia("desctop");

  return (
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
  );
};

export { CardButtons };
