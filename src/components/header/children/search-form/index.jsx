import React, { useState } from "react";
import { useLocation } from "react-router-dom";

import { PRODUCTS_PAGE } from "helpers";

import * as Styled from "./styled";

const submitReset = (e) => e.preventDevalut();

const HeaderSearchForm = () => {
  const [query, setQuery] = useState("");
  const location = useLocation();

  const changeHandler = (e) => setQuery(e.target.value);

  return location.pathname !== PRODUCTS_PAGE ? (
    <Styled.Form onSubmit={submitReset}>
      <Styled.SearchInput
        type='text'
        placeholder='Search...'
        value={query}
        onChange={changeHandler}
      />
      <Styled.SearchButton
        to={PRODUCTS_PAGE}
        state={{ query }}>
        Search
      </Styled.SearchButton>
    </Styled.Form>
  ) : null;
};

export { HeaderSearchForm };
