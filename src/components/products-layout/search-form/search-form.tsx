import React, { ChangeEvent, FC, FormEvent } from "react";

import { FilterState } from "~/pages/products/products";

import { Categories } from "../categories/categories";

import * as Styled from "./styled";

const submitReset = (e: FormEvent) => e.preventDefault();

type SearchFormProps = {
  // need to change filter divide categories and query
  filter: FilterState;
  searchHandler: (e: ChangeEvent<HTMLInputElement>) => void;
  changeFilterCategories: (e: ChangeEvent<HTMLInputElement>) => void;
};

export const SearchForm: FC<SearchFormProps> = ({
  filter,
  searchHandler,
  changeFilterCategories,
}) => {
  return (
    <Styled.SearchForm onSubmit={submitReset}>
      <Styled.SearchInput
        type="text"
        placeholder="Search..."
        value={filter.query}
        onChange={searchHandler}
      />
      <Categories
        currentCategories={filter.categories}
        changeHandler={changeFilterCategories}
      />
    </Styled.SearchForm>
  );
};
