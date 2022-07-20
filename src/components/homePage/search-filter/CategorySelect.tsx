import { useContext } from "react";
import { HiChevronDown } from "react-icons/hi";
import { useQuery } from "react-query";
import axios from "../../../axios";
import { FilterContext } from "../../../context/QuerySearchContext";
import { CategoryType } from "../../../pages/Create";

/* CSS-TAILWIND CLASSNAMES */
import { home } from "../../../utils/styling/styleNames";

const CategorySelect = () => {
  const { setSelectedCategory } = useContext(FilterContext);
  const { data } = useQuery("categories", () => axios.get("/categories").then((res) => res.data));
  return (
    <div className={home.categorySelect.div}>
      <select
        className={home.categorySelect.select}
        onChange={(e) => setSelectedCategory(e.target.value)}
      >
        <option defaultValue="Categories"> Categories</option>
        {data?.map((category: CategoryType) => (
          <option value={category.name} key={category.id}>
            {category.name}{" "}
          </option>
        ))}
      </select>
      <HiChevronDown className={home.categorySelect.icon} />
    </div>
  );
};

export default CategorySelect;
