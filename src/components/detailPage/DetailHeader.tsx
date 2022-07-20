/* CSS-TAILWIND CLASSNAMES */
import { detail } from "../../utils/styling/styleNames";
import { ComponentProps } from "../../utils/types/types";

const DetailHeader = ({ product }: ComponentProps) => {
  return (
    <div className={detail.detailHeader.mainDiv}>
      <div className={detail.detailHeader.imageDiv}>
        <img className={detail.detailHeader.image} src={product.avatar} alt="iphone" />
      </div>
      <div className={detail.detailHeader.contentDiv}>
        <h1 className={detail.detailHeader.name}>{product.name}</h1>
        <h1 className={detail.detailHeader.price}>$ {product.price} </h1>
      </div>
    </div>
  );
};

export default DetailHeader;
