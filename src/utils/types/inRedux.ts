export type Category = {
  name: string;
  id: string;
};

export type Product = {
  name?: string;
  avatar?: string;
  id?: string;
  price?: string;
  category?: string;
  description?: string;
  developerEmail?: string;
};

export type InitialState = {
  reducer: {
    categoryList?: Category[];
    selectedCategory?: string;
    productList?: Product[];
    selectedProduct?: Product;
    searchValue: string;
    error?: string;
    isLoading?: boolean;
  };
};
export enum ActionNames {
  SELECT_CATEGORY = "SELECT_CATEGORY",
  GET_CATEGORY_LIST = "GET_CATEGORY_LIST",
  SET_CATEGORY_LIST = "SET_CATEGORY_LIST",
  GET_PRODUCT_LIST = "GET_PRODUCT_LIST",
  SET_PRODUCT_LIST = "SET_PRODUCT_LIST",
  SET_SEARCH_VALUE = "SET_SEARCH_VALUE",
  SELECT_PRODUCT = "SELECT_PRODUCT",
  GET_PRODUCT_BY_ID = "GET_PRODUCT_BY_ID",
  ADD_NEW_PRODUCT = "ADD_NEW_PRODUCT",
  DELETE_PRODUCT = "DELETE_PRODUCT",
  SET_ERROR = "SET_ERROR",
}

type GetProductList = {
  type: ActionNames.GET_PRODUCT_LIST;
};
type SetProductList = {
  type: ActionNames.SET_PRODUCT_LIST;
  payload: Product[];
};
type GetProductById = {
  type: ActionNames.GET_PRODUCT_BY_ID;
};
type SelectProduct = {
  type: ActionNames.SELECT_PRODUCT;
  payload: Product;
};
type AddNewProduct = {
  type: ActionNames.ADD_NEW_PRODUCT;
};
type DeleteProduct = {
  type: ActionNames.DELETE_PRODUCT;
};

type GetCategoryList = {
  type: ActionNames.GET_CATEGORY_LIST;
};
type SetCategoryList = {
  type: ActionNames.SET_CATEGORY_LIST;
  payload: Category[];
};
type SelectCategory = {
  type: ActionNames.SELECT_CATEGORY;
  payload: string;
};
type SetSearchValue = {
  type: ActionNames.SET_SEARCH_VALUE;
  payload: string;
};
type SetError = {
  type: ActionNames.SET_ERROR;
  payload: string;
};
export type Actions =
  | GetCategoryList
  | SetCategoryList
  | SelectCategory
  | GetProductList
  | SetProductList
  | SetSearchValue
  | SelectProduct
  | GetProductById
  | AddNewProduct
  | DeleteProduct
  | SetError;
