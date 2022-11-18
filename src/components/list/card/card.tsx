import React, { FC, memo, useState } from "react";

import { Product } from "~/store";

import { CardButtons, ProductImage, ProductInfo } from "./children";

import * as Styled from "./styled";

type CardProps = {
  item: Product;
};

const Card: FC<CardProps> = ({ item }) => {
  const [hover, setHover] = useState(false);

  const toggleEnter = () => setHover(true);
  const toggleLeave = () => setHover(false);

  return (
    <Styled.Container onMouseEnter={toggleEnter} onMouseLeave={toggleLeave}>
      <ProductImage product={item} />

      {hover ? <CardButtons item={item} /> : <ProductInfo product={item} />}
    </Styled.Container>
  );
};

export default memo(Card);
