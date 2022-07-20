import axios from "../../axios";
/* COMPONENTS */
import ProductCard from "./ProductCard";

/* CSS-TAILWIND CLASSNAMES */
import { home } from "../../utils/styling/styleNames";
import { useQuery } from "react-query";
import { Product } from "../../utils/types/types";
import { useContext } from "react";
import { FilterContext } from "../../context/QuerySearchContext";
import qs from "qs";

const ProductList = () => {
  const { searchValue, selectedCategory } = useContext(FilterContext);
  const query = qs.stringify({
    name: searchValue === "" ? undefined : searchValue,
    category: selectedCategory === "Categories" ? undefined : selectedCategory,
  });

  const { data, status } = useQuery(
    ["products", query],
    () => axios.get(`/products?${query}`).then((res) => res.data),
    { staleTime: 30000, refetchIntervalInBackground: true }
  );
  return (
    <div className={home.productList}>
      {status === "error" && <p>Error</p>}
      {status === "loading" && <p>loading</p>}
      {status === "success" && data.length > 0 ? (
        data.map((product: Product) => <ProductCard product={product} key={product.id} />)
      ) : (
        <p>No Products Found</p>
      )}
    </div>
  );
};

export default ProductList;
