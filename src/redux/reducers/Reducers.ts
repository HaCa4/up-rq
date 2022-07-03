import { ActionNames, Actions } from "./../../utils/types/inRedux";

const initialState = {
  reducer: {
    categoryList: undefined,
    selectedCategory: undefined,
    productList: undefined,
    selectedProduct: undefined,
    searchValue: "",
    error: undefined,
    isLoading: false,
  },
};

const Reducers = (state = initialState, action: Actions) => {
  switch (action.type) {
    case ActionNames.GET_CATEGORY_LIST:
      return {
        ...state,
        isLoading: true,
        error: undefined,
      };
    case ActionNames.SET_CATEGORY_LIST:
      return {
        ...state,
        isLoading: false,
        categoryList: action.payload,
      };
    case ActionNames.SELECT_CATEGORY:
      return {
        ...state,
        selectedCategory: action.payload,
      };
    case ActionNames.GET_PRODUCT_LIST:
      return {
        ...state,
        isLoading: true,
        error: undefined,
      };
    case ActionNames.SET_PRODUCT_LIST:
      return {
        ...state,
        productList: action.payload,
        isLoading: false,
      };
    case ActionNames.SET_SEARCH_VALUE:
      return {
        ...state,
        searchValue: action.payload,
      };
    case ActionNames.ADD_NEW_PRODUCT:
      return {
        ...state,
        error: undefined,
      };
    case ActionNames.SELECT_PRODUCT:
      return {
        ...state,
        selectedProduct: action.payload,
      };
    case ActionNames.DELETE_PRODUCT:
      return {
        ...state,
        error: undefined,
      };
    case ActionNames.SET_ERROR:
      return {
        ...state,
        error: action.payload,
        isLoading: false,
      };
    default:
      return state;
  }
};

export default Reducers;
