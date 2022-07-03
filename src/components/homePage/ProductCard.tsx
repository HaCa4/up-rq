import { useNavigate } from "react-router-dom";
import { AiFillDelete } from "react-icons/ai";

/* REDUX */
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../../redux";

/* CSS-TAILWIND CLASSNAMES */
import { home } from "../../utils/styling/styleNames";

/* TYPES */
import { ProductCardProps } from "../../utils/types/inOthers";

const ProductCard = ({ product }: ProductCardProps) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { deleteProduct } = bindActionCreators(actionCreators, dispatch);

  return (
    <div className={home.productCard.containerDiv}>
      <AiFillDelete
        onClick={() => deleteProduct(product.id)}
        className={home.productCard.deleteIcon}
      />
      <div className={home.productCard.upperDiv}>
        <img
          alt={product.name}
          src={product.avatar}
          className={home.productCard.image}
          onClick={() => navigate(`/product/${product.id}`)}
        />
      </div>
      <div className={home.productCard.lowerDiv}>
        <h4 className={home.productCard.name}>{product.name}</h4>
        <h4 className={home.productCard.price}>${product.price} </h4>
      </div>
    </div>
  );
};

export default ProductCard;
