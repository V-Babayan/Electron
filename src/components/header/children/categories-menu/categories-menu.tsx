import React, { FC } from "react";

import { MoreIcon } from "~/assets/icons";
import { Dropdown } from "~/components";
import { selectCategories, useAppSelector } from "~/store";

import { Category } from "./category";

import * as Styled from "./styled";

const CategoriesMenu: FC = () => {
  const categories = useAppSelector(selectCategories);

  return (
    <Dropdown
      overlay={
        <Styled.CategoriesList>
          {categories.map(category => (
            <Category key={category} category={category} />
          ))}
        </Styled.CategoriesList>
      }
    >
      <Styled.CategoriesButton>
        Browse categories
        <MoreIcon />
      </Styled.CategoriesButton>
    </Dropdown>
  );
};

export { CategoriesMenu };
