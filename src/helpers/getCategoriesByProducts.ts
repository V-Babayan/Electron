export const getCategoriesByProducts = (products) => {
  const categories = new Set<any>();

  for (let item of products) categories.add(item.category);

  return [...categories];
};
