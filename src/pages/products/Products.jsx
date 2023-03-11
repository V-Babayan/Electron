import React, { useCallback, useMemo, useState } from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";

import List from "../../components/list/List";
import Brands from "../../components/brands/Brands";
import Categories from "../../components/categories/Categories";

import { getCategories } from "../../helpers";
import { useFilter } from "../../hooks/useFilter";

import { Container, Filter } from "./Products.styled";

const Products = () => {
  const products = useSelector((state) => state.products.products);
  const location = useLocation();
  const [filter, setFilter] = useState({
    query: location.state.query || "",
    brands: [],
    categories: location.state.categories || [],
  });
  const [filteredProducts, brands] = useFilter(products, filter);

  const changeFilterBrands = useCallback((e) => {
    setFilter((prev) => {
      let newBrands = [...prev.brands];

      if (newBrands.includes(e.target.value))
        newBrands = newBrands.filter((current) => current !== e.target.value);
      else newBrands.push(e.target.value);

      return { ...prev, brands: newBrands };
    });
  }, []);

  const resetHandler = useCallback(() => setFilter((prev) => ({ ...prev, brands: [] })), []);

  const searchHandler = useCallback(
    (e) => setFilter((prev) => ({ ...prev, query: e.target.value })),
    []
  );

  const changeFilterCategories = useCallback((e) => {
    setFilter((prev) => {
      let newCategories = [...prev.categories];
      const currentIndex = newCategories.indexOf(e.target.id);

      if (currentIndex >= 0)
        newCategories = newCategories.filter((_, index) => index !== currentIndex);
      else newCategories.push(e.target.id);

      return { ...prev, categories: newCategories };
    });
  }, []);

  const categories = useMemo(() => getCategories(products), [products]);

  return (
    <Container>
      <Brands
        filter={brands}
        filterTitle={"Categories"}
        changeHandler={changeFilterBrands}
        resetHandler={resetHandler}
        brands={filter.brands}
      />

      <div>
        <Filter onSubmit={(e) => e.preventDefault()}>
          <input
            type='text'
            placeholder='Search...'
            value={filter.query}
            onChange={searchHandler}
          />
          <Categories
            categories={categories}
            currentCategories={filter.categories}
            changeHandler={changeFilterCategories}
          />
        </Filter>
        <List products={filteredProducts} />
      </div>
    </Container>
  );
};

export default Products;
