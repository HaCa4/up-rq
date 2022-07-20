/* CSS-TAILWIND CLASSNAMES */
import { useContext } from "react";
import { FilterContext } from "../../../context/QuerySearchContext";
import { home } from "../../../utils/styling/styleNames";

const ProductSearch = () => {
  const { searchValue, setSearchValue } = useContext(FilterContext);
  return (
    <div>
      <input
        type="search"
        name="search"
        className={home.productSearchInput}
        placeholder="Search"
        value={searchValue}
        onChange={(event) => setSearchValue(event.currentTarget.value)}
      />
    </div>
  );
};

export default ProductSearch;
