import { Categories } from "../categories";

import * as Styled from "./styled";

const submitReset = (e) => e.preventDefault();

const SearchForm = ({ filter, searchHandler, changeFilterCategories }) => {
  return (
    <Styled.SearchForm onSubmit={submitReset}>
      <Styled.SearchInput
        type='text'
        placeholder='Search...'
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

export { SearchForm };
