import React, { FC, useMemo } from "react";
import { Link } from "react-router-dom";

import { PRODUCTS_PAGE } from "~/helpers";

type DropdownItemProps = { primary?: boolean; option: string };

export const DropdownItem: FC<DropdownItemProps> = ({ primary, option }) => {
  const navigationState = useMemo(() => ({ categories: [option] }), [option]);

  return (
    <li>
      <Link to={primary && PRODUCTS_PAGE} state={navigationState}>
        {option}
      </Link>
    </li>
  );
};
