import React from "react";

import * as Styled from "./styled";

const Brands = ({ filter = [], filterTitle, changeHandler, resetHandler, brands }) => {
  return (
    <aside>
      <Styled.HeadingBlock>
        <h5>{filterTitle}</h5>
        <button onClick={resetHandler}>reset</button>
      </Styled.HeadingBlock>
      <Styled.Ul>
        {filter.map(({ name, count }) => (
          <Styled.Brand key={name}>
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
          </Styled.Brand>
        ))}
      </Styled.Ul>
    </aside>
  );
};

export { Brands };
