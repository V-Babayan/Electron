import React from "react";
import { useSelector } from "react-redux";
import { selectCategories } from "store";

import { Dropdown } from "components/dropdown";

const CategoriesMenu = () => {
  const categories = useSelector(selectCategories);

  return (
    <Dropdown
      defaultTitle={"Browse categories"}
      options={categories}
      primary
    />
  );
};

export { CategoriesMenu };
