import React, { ChangeEvent, FC } from "react";

import { selectCategories, useAppSelector } from "~/store";

import * as Styled from "./styled";

type CategoriesProps = {
  currentCategories: string[];
  changeHandler: (e: ChangeEvent<HTMLInputElement>) => void;
};

const Categories: FC<CategoriesProps> = ({
  currentCategories,
  changeHandler,
}) => {
  const categories = useAppSelector(selectCategories);

  return (
    <Styled.Container>
      {categories.map(category => (
        <div key={category}>
          <Styled.Input
            type="checkbox"
            value={category}
            id={category}
            checked={currentCategories.includes(category)}
            onChange={changeHandler}
          />
          <Styled.Label htmlFor={category}>{category}</Styled.Label>
        </div>
      ))}
    </Styled.Container>
  );
};

export { Categories };
