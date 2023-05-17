import { useSelector } from "react-redux";

import { selectCategories } from "store";

import { Dropdown } from "components/core-ui";
import { Category } from "./Category";

import { ReactComponent as MoreIcon } from "assets/icons/more.svg";

import * as Styled from "./styled";

const CategoriesMenu = () => {
  const categories = useSelector(selectCategories);

  return (
    <Dropdown
      overlay={
        <Styled.CategoriesList>
          {categories.map((category) => (
            <Category
              key={category}
              category={category}
            />
          ))}
        </Styled.CategoriesList>
      }>
      <Styled.CategoriesButton>
        Browse categories
        <MoreIcon />
      </Styled.CategoriesButton>
    </Dropdown>
  );
};

export { CategoriesMenu };
