import { useNavigate } from "react-router-dom";
import { AiFillPlusCircle } from "react-icons/ai";

/*COMPONENTS*/
import ProductList from "../components/homePage/ProductList";
import CategorySelect from "../components/homePage/search-filter/CategorySelect";
import ProductSearch from "../components/homePage/search-filter/ProductSearch";

/* CSS-TAILWIND CLASSNAMES */
import { home } from "../utils/styling/styleNames";
import { FilterContext } from "../context/QuerySearchContext";
import { useState } from "react";

const Home = () => {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState<string>();
  const [searchValue, setSearchValue] = useState<string>();
  return (
    <div className="pageDiv">
      <FilterContext.Provider
        value={{ selectedCategory, setSelectedCategory, searchValue, setSearchValue }}
      >
        <div className={home.filterDiv}>
          <ProductSearch />
          <CategorySelect />
        </div>
        <ProductList />
      </FilterContext.Provider>
      <AiFillPlusCircle className={home.addNewProductIcon} onClick={() => navigate("/create")} />
    </div>
  );
};

export default Home;
