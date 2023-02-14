export const getFilter = (products, query) => {
  const categories = {};
  const res = [];

  for (let product of products)
    categories[product[query]] ? categories[product[query]]++ : (categories[product[query]] = 1);

  for (let [key, value] of Object.entries(categories)) res.push({ name: key, count: value });

  return res;
};
