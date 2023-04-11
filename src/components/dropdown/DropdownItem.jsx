import React, { useMemo } from "react";
import { Link } from "react-router-dom";

import { PRODUCTS_PAGE } from "helpers";

const DropdownItem = ({ primary, option }) => {
  const navigationState = useMemo(() => ({ categories: [option] }), [option]);

  return (
    <li>
      <Link
        to={primary && PRODUCTS_PAGE}
        state={navigationState}>
        {option}
      </Link>
    </li>
  );
};

export default DropdownItem;
