/* CSS-TAILWIND CLASSNAMES */
import { detail } from "../../utils/styling/styleNames";

/* TYPES */
import { DetailChildProps } from "../../utils/types/inOthers";

const DetailDescription = ({ product }: DetailChildProps) => {
  return (
    <div className={detail.description}>
      <h1 className={detail.descriptionTitle}> {product?.name}</h1>
      <p>{product?.description}</p>
    </div>
  );
};

export default DetailDescription;
