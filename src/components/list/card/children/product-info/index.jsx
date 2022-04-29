import React from "react";

import Rating from "components/core-ui/rating";

import * as Styled from "./styled";

const ProductInfo = ({ product }) => {
  return (
    <Styled.InfoContainer>
      <Styled.Title>{product.title}</Styled.Title>
      <Styled.Price>${product.price}</Styled.Price>
      <Rating defRating={product.rating} />
    </Styled.InfoContainer>
  );
};

export { ProductInfo };
