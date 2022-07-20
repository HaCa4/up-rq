/* CSS-TAILWIND CLASSNAMES */
import { detail } from "../../utils/styling/styleNames";
import { ComponentProps } from "../../utils/types/types";

const DetailDescription = ({ product }: ComponentProps) => {
  return (
    <div className={detail.description}>
      <h1 className={detail.descriptionTitle}> {product.name}</h1>
      <p> {product.description} </p>
    </div>
  );
};

export default DetailDescription;
