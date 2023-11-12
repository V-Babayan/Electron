import React, { FC } from "react";

import { Dropdown } from "~/components";
import { selectCategories, useAppSelector } from "~/store";

const CategoriesMenu: FC = () => {
  const categories = useAppSelector(selectCategories);

  return (
    <Dropdown defaultTitle={"Browse categories"} options={categories} primary />
  );
};

export { CategoriesMenu };
