import React, { memo } from "react";
import { useHover } from "hooks";

import { ProductImage, ProductInfo, CardButtons } from "./children";

import * as Styled from "./styled";

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
