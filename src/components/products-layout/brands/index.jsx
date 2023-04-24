import React from "react";

import * as Styled from "./styled";

const Brands = ({ filter = [], filterTitle, changeHandler, resetHandler, brands }) => {
  return (
    <aside>
      <Styled.HeadingBlock>
        <Styled.Title>{filterTitle}</Styled.Title>
        <Styled.ResetButton onClick={resetHandler}>reset</Styled.ResetButton>
      </Styled.HeadingBlock>
      <Styled.BrandList>
        {filter.map(({ name, count }) => (
          <Styled.Brand key={name}>
            <Styled.BrandCheckbox
              type='checkbox'
              value={name}
              onChange={changeHandler}
              checked={brands.includes(name)}
              id={name}
            />
            <Styled.BrandInfo>
              <label htmlFor={name}>{name}</label>
              <span>{count}</span>
            </Styled.BrandInfo>
          </Styled.Brand>
        ))}
      </Styled.BrandList>
    </aside>
  );
};

export { Brands };
