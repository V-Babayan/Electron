import React, { FC, memo } from "react";

import { HeartIcon } from "~/assets/icons";
import { Product } from "~/store";

import * as Styled from "./styled";

type ProductImageProps = {
  product: Product;
};

const ProductImage: FC<ProductImageProps> = ({ product }) => {
  return (
    <Styled.ImageBlock>
      <Styled.Image src={product.imageUrl} alt={product.title} loading="lazy" />
      <Styled.FavButton aria-label="add to favorites">
        <HeartIcon />
      </Styled.FavButton>
    </Styled.ImageBlock>
  );
};

export default memo(ProductImage);
