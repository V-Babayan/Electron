import { Link } from "react-router-dom";

import { PRODUCTS_PAGE } from "helpers";

import * as Styled from "./styled";

const Category = ({ category }) => {
  return (
    <Styled.DropItem>
      <Link
        to={PRODUCTS_PAGE}
        state={{ categories: [category] }}>
        {category}
      </Link>
    </Styled.DropItem>
  );
};

export { Category };
