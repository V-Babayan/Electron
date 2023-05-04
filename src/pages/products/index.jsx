import React, { useCallback, useMemo, useState } from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";

import { List } from "components/list";
import { Brands, SearchForm } from "components/products-layout";

import { filterWithProperty } from "helpers";
import { selectProducts } from "store";

import * as Styled from "./styled";

const Products = () => {
  const products = useSelector(selectProducts);
  const location = useLocation();

  const [filter, setFilter] = useState({
    query: location.state?.query || "",
    brands: [],
    categories: location.state?.categories || [],
  });

  const [filteredProducts, brands] = useMemo(() => {
    const brands = {};
    const arrayBrands = [];

    const filteredProducts = !filter
      ? products
      : products.filter((product) => {
          if (filter.query && !product.title.toLowerCase().includes(filter.query.toLowerCase())) {
            return false;
          }

          if (filter.categories.length > 0 && !filter.categories.includes(product.category)) {
            return false;
          }

          brands[product.brand] ? brands[product.brand]++ : (brands[product.brand] = 1);

          if (filter.brands.length > 0 && !filter.brands.includes(product.brand)) {
            return false;
          }

          return true;
        });

    for (let [key, value] of Object.entries(brands)) arrayBrands.push({ name: key, count: value });

    return [filteredProducts, arrayBrands];
  }, [filter, products]);

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
      <Styled.Sidebar>
        <Brands
          filter={brands}
          filterTitle='Brands'
          changeHandler={changeFilterBrands}
          resetHandler={resetHandler}
          brands={filter.brands}
        />
      </Styled.Sidebar>

      <Styled.MainContent>
        <SearchForm
          filter={filter}
          searchHandler={searchHandler}
          changeFilterCategories={changeFilterCategories}
        />
        <List products={filteredProducts} />
      </Styled.MainContent>
    </Styled.Container>
  );
};

export default Products;
