import React, { memo } from "react";

import Card from "components/card";

import * as Styled from "./styled";

const List = ({ products, title }) => {
  return (
    <>
      {title && <Styled.Heading>{title}</Styled.Heading>}
      <Styled.ProductList>
        {products.map((elem) => (
          <Card
            item={elem}
            key={elem.id}
          />
        ))}
      </Styled.ProductList>
    </>
  );
};

export default memo(List);
