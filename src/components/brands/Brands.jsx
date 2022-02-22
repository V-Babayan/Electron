import React from "react";
import { Brand, HeadingBlock, StyledUl } from "./Brands.styled";

const Brands = ({ filter = [], filterTitle, changeHandler, resetHandler, brands }) => {
  return (
    <aside>
      <HeadingBlock>
        <h5>{filterTitle}</h5>
        <button onClick={resetHandler}>reset</button>
      </HeadingBlock>
      <StyledUl>
        {filter.map(({ name, count }) => (
          <Brand key={name}>
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
          </Brand>
        ))}
      </StyledUl>
    </aside>
  );
};

export default Brands;
