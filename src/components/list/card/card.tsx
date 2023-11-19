import React, { FC, memo } from "react";

import { useHover } from "~/hooks";
import { Product } from "~/store";

import { CardButtons, ProductImage, ProductInfo } from "./children";

import * as Styled from "./styled";

type CardProps = {
  item: Product;
};

const Card: FC<CardProps> = ({ item }) => {
  const { hover, ref } = useHover<HTMLLIElement>();

  return (
    <Styled.Container ref={ref}>
      <ProductImage product={item} />

      {hover ? <CardButtons item={item} /> : <ProductInfo product={item} />}
    </Styled.Container>
  );
};

export default memo(Card);
