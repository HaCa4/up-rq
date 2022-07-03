import axios, { endPoints } from "../../api/axios";
import { ActionNames, Category, Product, InitialState } from "./../../utils/types/inRedux";
import { Dispatch } from "redux";
import qs from "qs";

/* FETCHING PRODUCT LIST */
export const getProductList = () => async (dispatch: Dispatch, getState: () => InitialState) => {
  const selectedCategory = getState().reducer.selectedCategory;
  const searchValue = getState().reducer.searchValue;
  const query = qs.stringify({
    name: searchValue === "" ? undefined : searchValue,
    category: selectedCategory === "Categories" ? undefined : selectedCategory,
  });
  dispatch({ type: ActionNames.GET_PRODUCT_LIST });
  try {
    const { data } = await axios.get<Product[]>(endPoints.getProductList(query));
    dispatch({ type: ActionNames.SET_PRODUCT_LIST, payload: data });
  } catch (error) {
    const errorMessage = "Error occur while get Products" + error;
    dispatch({ type: ActionNames.SET_ERROR, payload: errorMessage });
  }
};

/* FETCHING SINGLE PRODUCT FOR DETAIL PAGE */
export const getProductById = (id?: string) => async (dispatch: Dispatch) => {
  dispatch({ type: ActionNames.GET_PRODUCT_BY_ID });
  try {
    const { data } = await axios.get<Product>(endPoints.getProductById(id));
    dispatch({ type: ActionNames.SELECT_PRODUCT, payload: data });
  } catch (error) {
    const errorMessage = "Error occur while get Product" + error;
    dispatch({ type: ActionNames.SET_ERROR, payload: errorMessage });
  }
};

/* ADDING NEW PRODUCT INTO PRODUCT LIST */
export const addNewProduct =
  (newProduct: Product, navigate: (path: string) => void) => async (dispatch: Dispatch) => {
    try {
      await axios.post(endPoints.addNewProduct(), newProduct);
      dispatch({ type: ActionNames.ADD_NEW_PRODUCT });
      setTimeout(() => navigate("/"), 1000);
    } catch (error) {
      const errorMessage = "Error occur while add Product" + error;
      dispatch({ type: ActionNames.SET_ERROR, payload: errorMessage });
    }
  };

/* DELETING PRODUCT FROM PRODUCT LIST */
export const deleteProduct =
  (id: string | undefined) => async (dispatch: Dispatch, getState: () => InitialState) => {
    dispatch({ type: ActionNames.DELETE_PRODUCT });
    const selectedCategory = getState().reducer.selectedCategory;
    const searchValue = getState().reducer.searchValue;
    const query = qs.stringify({
      name: searchValue === "" ? undefined : searchValue,
      category: selectedCategory === "Categories" ? undefined : selectedCategory,
    });
    try {
      await axios.delete(endPoints.deleteProduct(id));
      dispatch({ type: ActionNames.GET_PRODUCT_LIST });
      const { data } = await axios.get<Product[]>(endPoints.getProductList(query));
      dispatch({ type: ActionNames.SET_PRODUCT_LIST, payload: data });
    } catch (error) {
      const errorMessage = "Error occur while delete Product" + error;
      dispatch({ type: ActionNames.SET_ERROR, payload: errorMessage });
    }
  };

/* FETCHING CATEGORY LIST */
export const getCategoryList = () => async (dispatch: Dispatch) => {
  dispatch({ type: ActionNames.GET_CATEGORY_LIST });
  try {
    const { data } = await axios.get<Category[]>(endPoints.getCategoryList());
    dispatch({ type: ActionNames.SET_CATEGORY_LIST, payload: data });
  } catch (error) {
    const errorMessage = "Error occur while get Categories" + error;
    dispatch({ type: ActionNames.SET_ERROR, payload: errorMessage });
  }
};

/* SELECTING CATEGORY FOR FILTERING PRODUCTS */
export const selectCategory = (value: string) => {
  return { type: ActionNames.SELECT_CATEGORY, payload: value };
};

/* SEARCHING FOR SPECIFIC PRODUCTS */
export const setSearchValue = (value: string) => {
  return { type: ActionNames.SET_SEARCH_VALUE, payload: value };
};
