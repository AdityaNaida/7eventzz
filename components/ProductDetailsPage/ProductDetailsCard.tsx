//libraries
import { ReactNode } from "react";
//style
import style from "@/components/ProductDetailsPage/ProductDetailsCard.module.css";
//props
interface Props {
  children: ReactNode;
}
const ProductDetailsCard: React.FC<Props> = ({ children }) => {
  return (
    <>
      <div className={style.container}>{children}</div>
    </>
  );
};

export default ProductDetailsCard;
