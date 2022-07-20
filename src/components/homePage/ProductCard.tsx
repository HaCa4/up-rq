import { useNavigate } from "react-router-dom";
import { AiFillDelete } from "react-icons/ai";

/* CSS-TAILWIND CLASSNAMES */
import { home } from "../../utils/styling/styleNames";
import { ComponentProps } from "../../utils/types/types";
import axios from "../../axios";

/* TYPES */

const ProductCard = ({ product }: ComponentProps) => {
  const navigate = useNavigate();

  return (
    <div className={home.productCard.containerDiv}>
      <AiFillDelete
        className={home.productCard.deleteIcon}
        onClick={() => axios.delete(`products/${product.id}`)}
      />
      <div className={home.productCard.upperDiv}>
        <img
          alt="/iphone.jpg"
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
