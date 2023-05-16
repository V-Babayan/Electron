import React from "react";

import { useSelector } from "react-redux";

import { selectCategories } from "store";

import { Dropdown } from "components/dropdown";
import { Category } from "./Category";

const CategoriesMenu = () => {
  const categories = useSelector(selectCategories);

  return (
    <Dropdown
      defaultTitle={"Browse categories"}
      primary>
      {categories.map((category) => (
        <Category
          key={category}
          category={category}
        />
      ))}
    </Dropdown>
  );
};

export { CategoriesMenu };
