import React, { FC } from "react";

import { selectCategories, useAppSelector } from "~/store";
import { Dropdown } from "~/components";

const CategoriesMenu: FC = () => {
  const categories = useAppSelector(selectCategories);

  return (
    <Dropdown defaultTitle={"Browse categories"} options={categories} primary />
  );
};

export { CategoriesMenu };
