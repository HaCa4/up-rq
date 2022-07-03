/* REDUX */
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../../../redux";
import { InitialState } from "../../../utils/types/inRedux";

/* CSS-TAILWIND CLASSNAMES */
import { home } from "../../../utils/styling/styleNames";

const ProductSearch = () => {
  const dispatch = useDispatch();
  const { setSearchValue } = bindActionCreators(actionCreators, dispatch);
  const searchValue = useSelector((state: InitialState) => state.reducer.searchValue);
  const productList = useSelector((state: InitialState) => state.reducer.productList);
  return (
    <div>
      <input
        type="search"
        name="search"
        className={home.productSearchInput}
        placeholder={productList?.map((product) => product.name).join(", ") + "..."}
        value={searchValue}
        onChange={(event) => setSearchValue(event.currentTarget.value)}
      />
    </div>
  );
};

export default ProductSearch;
