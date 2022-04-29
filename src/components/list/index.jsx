import React from "react";

import Card from "./card";

import * as Styled from "./styled";

function List({ products }) {
  return (
    <Styled.ProductList>
      {products.map((elem) => (
        <Card
          item={elem}
          key={elem.id}
        />
      ))}
    </Styled.ProductList>
  );
}

export default List;
