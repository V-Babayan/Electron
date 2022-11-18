import React, { FC } from "react";

import { Rating } from "~/components";
import { Product } from "~/store";

import * as Styled from "./styled";

type ProductInfoProps = {
  product: Product;
};

const ProductInfo: FC<ProductInfoProps> = ({ product }) => {
  return (
    <Styled.InfoContainer>
      <Styled.Title>{product.title}</Styled.Title>
      <Styled.Price>${product.price}</Styled.Price>
      <Rating defRating={product.rating} />
    </Styled.InfoContainer>
  );
};

export { ProductInfo };
