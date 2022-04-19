import React, { memo } from "react";

import { ReactComponent as HeartIcon } from "assets/icons/heart.svg";

import * as Styled from "./styled";

const ProductImage = ({ product }) => {
  return (
    <Styled.ImageBlock>
      <Styled.Image
        src={product.imageUrl}
        alt={product.title}
        loading='lazy'
      />
      <Styled.FavButton aria-label='add to favorites'>
        <HeartIcon />
      </Styled.FavButton>
    </Styled.ImageBlock>
  );
};

export default memo(ProductImage);
