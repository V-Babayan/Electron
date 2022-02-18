import React from "react";
import { Category, HeadingBlock } from "./Categories.styled";

const Categories = ({ filter = [], filterTitle, changeHandler, resetHandler, brands }) => {
  return (
    <div>
      <HeadingBlock>
        <h5>{filterTitle}</h5>
        <button onClick={resetHandler}>reset</button>
      </HeadingBlock>
      <ul>
        {filter.map(({ name, count }) => (
          <Category key={name}>
            <input
              type='checkbox'
              value={name}
              onChange={changeHandler}
              checked={brands.includes(name)}
              id={name}
            />
            <div>
              <label htmlFor={name}>{name}</label>
              <span>{count}</span>
            </div>
          </Category>
        ))}
      </ul>
    </div>
  );
};

export default Categories;
