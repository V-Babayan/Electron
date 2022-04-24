import React from "react";
import { useSelector } from "react-redux";

import { selectCategories } from "store";

import * as Styled from "./styled";

const Categories = ({ currentCategories, changeHandler }) => {
  const categories = useSelector(selectCategories);

  return (
    <Styled.Container>
      {categories.map((category) => (
        <div key={category}>
          <Styled.Input
            type='checkbox'
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
