import axios from "axios";

export default axios.create({
  baseURL: "https://62286b649fd6174ca82321f1.mockapi.io/case-study",
});

export const endPoints = {
  getProductList: (data: string) => `/products?${data}`,
  getProductById: (id?: string) => `/products/${id}`,
  getCategoryList: () => "/categories",
  addNewProduct: (): string => "/products",
  deleteProduct: (id?: string | undefined) => `/products/${id}`,
};
