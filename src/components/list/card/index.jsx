import React, { memo, useState } from "react";

import { ProductImage, ProductInfo, CardButtons } from "./children";

import * as Styled from "./styled";

const Card = ({ item }) => {
  const [hover, setHover] = useState(false);

  const toggleEnter = () => setHover(true);
  const toggleLeave = () => setHover(false);

  return (
    <Styled.Container
      onMouseEnter={toggleEnter}
      onMouseLeave={toggleLeave}>
      <ProductImage product={item} />

      {hover ? <CardButtons item={item} /> : <ProductInfo product={item} />}
    </Styled.Container>
  );
};

export default memo(Card);
