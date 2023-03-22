export const getBrandsAndCounts = (products) => {
  const brands = {};
  const resBrands = [];

  for (let product of products)
    brands[product.brand] ? brands[product.brand]++ : (brands[product.brand] = 1);

  for (let [key, value] of Object.entries(brands)) resBrands.push({ name: key, count: value });

  return resBrands;
};
