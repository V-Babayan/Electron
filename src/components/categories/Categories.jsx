import React from "react";
import { Container, SInput, SLabel } from "./Categories.styled";

const Categories = ({ categories = [], currentCategories, changeHandler }) => {
  return (
    <Container>
      {categories.map((category) => (
        <div key={category}>
          <SInput
            type='checkbox'
            id={category}
            checked={currentCategories.includes(category)}
            onChange={changeHandler}
          />
          <SLabel htmlFor={category}>{category}</SLabel>
        </div>
      ))}
    </Container>
  );
};

export default Categories;
