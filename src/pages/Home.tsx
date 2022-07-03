import { useNavigate } from "react-router-dom";
import { AiFillPlusCircle } from "react-icons/ai";

/*COMPONENTS*/
import ProductList from "../components/homePage/ProductList";
import CategorySelect from "../components/homePage/search-filter/CategorySelect";
import ProductSearch from "../components/homePage/search-filter/ProductSearch";

/* CSS-TAILWIND CLASSNAMES */
import { home } from "../utils/styling/styleNames";

const Home = () => {
  const navigate = useNavigate();
  return (
    <div className="pageDiv">
      <div className={home.filterDiv}>
        <ProductSearch />
        <CategorySelect />
      </div>
      <ProductList />
      <AiFillPlusCircle className={home.addNewProductIcon} onClick={() => navigate("/create")} />
    </div>
  );
};

export default Home;
