export const indexOfCart = (cart, id) => {
  for (let [index, element] of cart.entries()) {
    if (element.product.id === id) return index;
  }

  return false;
};
