import React, { memo, useState } from "react";

import { ProductImage, ProductInfo, CardButtons } from "./children";

import * as Styled from "./styled";
import { useHover } from "hooks";

const Card = ({ item }) => {
  const { hover, ref } = useHover();

  return (
    <Styled.Container ref={ref}>
      <ProductImage product={item} />

      {hover ? <CardButtons item={item} /> : <ProductInfo product={item} />}
    </Styled.Container>
  );
};

export default memo(Card);
