import React, { FC } from "react";

import { CheckBirdIcon } from "~/assets/icons";
import { Rating } from "~/components";
import { Product } from "~/store";

import { AddToCartForm } from "./add-to-cart-form/add-to-cartForm";

import * as Styled from "./styled";

const Info: FC<{ product: Product }> = ({ product }) => {
  return (
    <div>
      <Styled.InfoContainer>
        <Styled.ProductName>{product.title}</Styled.ProductName>
        <Styled.ProductPrice>${product.price}</Styled.ProductPrice>
        <Rating defRating={product.rating} big />
        <Styled.ProductHaveIndicator>
          Availability: <CheckBirdIcon />
          <span>In stock</span>
        </Styled.ProductHaveIndicator>
        <div>
          {product.count
            ? `Hurry up! only ${product.count} product left in stock!`
            : "Sorry this product isn't in stock"}
        </div>
      </Styled.InfoContainer>
      <AddToCartForm product={product} />
    </div>
  );
};

export { Info };
