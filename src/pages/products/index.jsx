import React, { useCallback, useState } from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";

import List from "components/list";
import { Brands, Categories } from "components/products-layout";

import { useFilter } from "hooks";

import * as Styled from "./styled";
import { filterWithProperty } from "helpers";
import { selectProducts } from "store";

const submitReset = (e) => e.preventDefault();

const Products = () => {
  const products = useSelector(selectProducts);
  const location = useLocation();

  const [filter, setFilter] = useState({
    query: location.state?.query || "",
    brands: [],
    categories: location.state?.categories || [],
  });

  const [filteredProducts, brands] = useFilter(products, filter);

  const resetHandler = useCallback(() => setFilter((prev) => ({ ...prev, brands: [] })), []);

  const searchHandler = useCallback(
    (e) => setFilter((prev) => ({ ...prev, query: e.target.value })),
    []
  );

  const changeFilterBrands = useCallback((e) => {
    setFilter((prev) => filterWithProperty(prev, "brands", e.target.value));
  }, []);

  const changeFilterCategories = useCallback((e) => {
    setFilter((prev) => filterWithProperty(prev, "categories", e.target.value));
  }, []);

  return (
    <Styled.Container>
      <Brands
        filter={brands}
        filterTitle={"Brands"}
        changeHandler={changeFilterBrands}
        resetHandler={resetHandler}
        brands={filter.brands}
      />

      <div>
        <Styled.Filter onSubmit={submitReset}>
          <input
            type='text'
            placeholder='Search...'
            value={filter.query}
            onChange={searchHandler}
          />
          <Categories
            currentCategories={filter.categories}
            changeHandler={changeFilterCategories}
          />
        </Styled.Filter>
        <List products={filteredProducts} />
      </div>
    </Styled.Container>
  );
};

export default Products;
