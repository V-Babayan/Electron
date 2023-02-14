import React, { useCallback, useMemo, useState } from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";

import List from "../components/list/List";
import Categories from "../components/categories/Categories";
import { getFilter } from "../helpers/filters";
import styled from "styled-components";

const Container = styled.div`
  @media screen and (${({ theme }) => theme.media.MinMobile}) {
    display: flex;
    align-items: flex-start;

    gap: 20px;
    & > div:first-child {
      flex: 0 2 315px;
    }
    & > div:last-child {
      flex: 1 1 auto;

      grid-template-columns: 1fr 1fr;

      @media screen and (${({ theme }) => theme.media.MinNotebook}) {
        grid-template-columns: repeat(3, 1fr);
      }
    }
  }
`;

const Filter = styled.div``;

const Products = () => {
  const products = useSelector((state) => state.products.products);
  const location = useLocation();
  const [filter, setFilter] = useState({ query: location.state || "", brands: [] });

  const changeFilterBrands = useCallback(
    (e) => {
      const currentIndex = filter.brands.indexOf(e.target.value);

      if (currentIndex >= 0) {
        setFilter((prev) => ({
          ...prev,
          brands: [...prev.brands].filter((_, index) => index !== currentIndex),
        }));
      } else {
        const newBrands = [...filter.brands];
        newBrands.push(e.target.value);

        setFilter((prev) => ({ ...prev, brands: newBrands }));
      }
    },
    [filter]
  );
  const resetHandler = useCallback(() => setFilter((prev) => ({ ...prev, brands: [] })), []);

  const searchedProducts = useMemo(
    () =>
      filter.query
        ? products.filter((elem) => elem.title.toLowerCase().includes(filter.query.toLowerCase()))
        : products,
    [products, filter]
  );

  const searchedAndFilteredPorducts = useMemo(() => {
    if (filter.brands.length)
      return searchedProducts.filter((elem) => filter.brands.includes(elem.brand));

    return searchedProducts;
  }, [searchedProducts, filter]);

  const searchHandler = useCallback(
    (e) => setFilter((prev) => ({ ...prev, query: e.target.value })),
    []
  );

  const brands = useMemo(() => getFilter(searchedProducts, "brand"), [searchedProducts]);
  // const categories = useMemo(() => getFilter(products, "category"), [products]);

  return (
    <>
      <Filter>
        <input
          type='text'
          value={filter.query}
          onChange={searchHandler}
        />
      </Filter>
      <Container>
        {!!brands.length && (
          <Categories
            filter={brands}
            filterTitle={"Categories"}
            changeHandler={changeFilterBrands}
            resetHandler={resetHandler}
            brands={filter.brands}
          />
        )}

        <List products={searchedAndFilteredPorducts} />
      </Container>
    </>
  );
};

export default Products;
