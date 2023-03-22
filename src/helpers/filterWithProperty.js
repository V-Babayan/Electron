export const filterWithProperty = (prevFilter, filterBy, newProperty) => {
  const filter = new Set(prevFilter[filterBy]);

  !filter.delete(newProperty) && filter.add(newProperty);

  return { ...prevFilter, [filterBy]: [...filter] };
};
