//style
import style from "@/components/ProductDetailsPage/ProductPrice.module.css";
//props
interface Props {
  price: string;
  previousPrice: string;
  discount: string;
}

const ProductPrice: React.FC<Props> = ({ price, previousPrice, discount }) => {
  return (
    <>
      <div className={style.container}>
        <p>{price}</p>
        <div>
          <span className={style.prevPrice}>{previousPrice}</span>
          <span className={style.discount}>{discount}</span>
          <p>Inclusive of all taxes</p>
        </div>
      </div>
    </>
  );
};

export default ProductPrice;
