import React, { memo } from "react";

import { ProductList, SHeading } from "./List.styled";
import Card from "../card/Card";

const List = ({ products, title }) => {
  return (
    <>
      {title && <SHeading>{title}</SHeading>}
      <ProductList>
        {products.map((elem) => (
          <Card
            item={elem}
            key={elem.id}
          />
        ))}
      </ProductList>
    </>
  );
};

export default memo(List);
