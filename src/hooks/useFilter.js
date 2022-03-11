import { useMemo } from "react";
import { getFilter } from "../helpers";

export const useFilter = (products, { query, brands, categories }) => {
  const filteredProducts = useMemo(() => {
    const filterByQuery =
      query.length > 0
        ? products.filter(({ title }) => title.toLowerCase().includes(query.toLowerCase()))
        : products;

    const filterByCategories =
      categories.length > 0
        ? filterByQuery.filter(({ category }) => categories.includes(category))
        : filterByQuery;

    const brandsFilters = getFilter(filterByCategories, "brand");

    const filterByBrands =
      brands.length > 0
        ? filterByCategories.filter(({ brand }) => brands.includes(brand))
        : filterByCategories;

    return [filterByBrands, brandsFilters];
  }, [query, brands, categories, products]);

  return filteredProducts;
};
