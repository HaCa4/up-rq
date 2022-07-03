import { useEffect } from "react";

/* REDUX */
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../../redux";

/* COMPONENTS */
import ProductCard from "./ProductCard";

/* CSS-TAILWIND CLASSNAMES */
import { home } from "../../utils/styling/styleNames";

/* TYPES */
import { InitialState } from "../../utils/types/inRedux";

const ProductList = () => {
  const dispatch = useDispatch();
  const { getProductList } = bindActionCreators(actionCreators, dispatch);
  const productList = useSelector((state: InitialState) => state.reducer.productList);
  const searchValue = useSelector((state: InitialState) => state.reducer.searchValue);
  const selectedCategory = useSelector((state: InitialState) => state.reducer.selectedCategory);

  useEffect(() => {
    getProductList();
  }, [searchValue, selectedCategory]);

  return (
    <div className={home.productList}>
      {productList?.length === 0 ? (
        <div>No products found..</div>
      ) : (
        productList?.map((product) => <ProductCard product={product} key={product.id} />)
      )}
    </div>
  );
};

export default ProductList;
