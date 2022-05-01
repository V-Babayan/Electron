export const sliceProductsToPages = (products, onePageCount) => {
  const resProducts = [];

  for (let i = 0; i < 3; i++)
    resProducts.push({
      id: i,
      products: products.slice(i * onePageCount + 4, (i + 1) * onePageCount + 4),
    });

  return resProducts;
};
