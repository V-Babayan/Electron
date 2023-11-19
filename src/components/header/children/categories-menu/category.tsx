import React, { FC } from "react";
import { Link } from "react-router-dom";

import { PRODUCTS_PAGE } from "~/helpers";

import * as Styled from "./styled";

type CategoryProps = { category: string };

const Category: FC<CategoryProps> = ({ category }) => {
  return (
    <Styled.DropItem>
      <Link to={PRODUCTS_PAGE} state={{ categories: [category] }}>
        {category}
      </Link>
    </Styled.DropItem>
  );
};

export { Category };
