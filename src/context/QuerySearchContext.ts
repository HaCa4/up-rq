import React, { createContext } from "react";

type FilterContextPropsType = {
  selectedCategory: string | undefined;
  setSelectedCategory: React.Dispatch<React.SetStateAction<string | undefined>>;
  searchValue: string | undefined;
  setSearchValue: React.Dispatch<React.SetStateAction<string | undefined>>;
};

export const FilterContext = createContext({} as FilterContextPropsType);
