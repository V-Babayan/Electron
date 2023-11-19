import { FilterState } from "~/pages/products/products";

type FilterWithPropertyType = (
  prevFilter: FilterState,
  filterBy: keyof Omit<FilterState, "query">,
  newProperty: string
) => FilterState;

export const filterWithProperty: FilterWithPropertyType = (
  prevFilter,
  filterBy,
  newProperty
) => {
  const filter = new Set(prevFilter[filterBy]);

  !filter.delete(newProperty) && filter.add(newProperty);

  return { ...prevFilter, [filterBy]: [...filter] };
};
