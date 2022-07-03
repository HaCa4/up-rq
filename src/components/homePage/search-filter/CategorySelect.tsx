import { useEffect } from "react";
import { HiChevronDown } from "react-icons/hi";

/* REDUX */
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../../../redux";
import { InitialState } from "../../../utils/types/inRedux";

/* CSS-TAILWIND CLASSNAMES */
import { home } from "../../../utils/styling/styleNames";

const CategorySelect = () => {
  const dispatch = useDispatch();
  const { selectCategory, getCategoryList } = bindActionCreators(actionCreators, dispatch);
  const categoryList = useSelector((state: InitialState) => state.reducer.categoryList);

  useEffect(() => {
    getCategoryList();
  }, []);

  return (
    <div className={home.categorySelect.div}>
      <select
        className={home.categorySelect.select}
        onChange={(e) => selectCategory(e.target.value)}
      >
        <option defaultValue="Categories"> Categories</option>
        {categoryList?.map((category) => (
          <option key={category.id} value={category.name}>
            {category.name}
          </option>
        ))}
      </select>
      <HiChevronDown className={home.categorySelect.icon} />
    </div>
  );
};

export default CategorySelect;
