import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import { PRODUCTS_PAGE } from "helpers";

import * as Styled from "./styled";

const HeaderSearchForm = () => {
  const [query, setQuery] = useState("");
  const location = useLocation();
  const navigate = useNavigate();

  const submitReset = (e) => {
    e.preventDefault();
    navigate(PRODUCTS_PAGE, { state: { query } });
  };

  const changeHandler = (e) => setQuery(e.target.value);

  return location.pathname !== PRODUCTS_PAGE ? (
    <Styled.Form onSubmit={submitReset}>
      <Styled.SearchInput
        type='text'
        placeholder='Search...'
        value={query}
        onChange={changeHandler}
      />
      <Styled.SearchButton>Search</Styled.SearchButton>
    </Styled.Form>
  ) : null;
};

export { HeaderSearchForm };
