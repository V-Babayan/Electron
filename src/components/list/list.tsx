import React, { FC } from "react";

import { Product } from "~/store";

import Card from "./card";

import * as Styled from "./styled";

type ListProps = {
  products: Product[];
};

export const List: FC<ListProps> = ({ products }) => {
  return (
    <Styled.ProductList>
      {products.map(elem => (
        <Card item={elem} key={elem.id} />
      ))}
    </Styled.ProductList>
  );
};
