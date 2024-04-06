//components
import RatingReviews from "./RatingReviews";
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
        <div className={style.priceContainer}>
          <p className={style.price}>{price}</p>
          <div>
            <span className={style.prevPrice}>{previousPrice}</span>
            <span className={style.discount}>{discount}</span>
            <p>Inclusive of all taxes</p>
          </div>
        </div>

        <RatingReviews reviews={545} rating="4.8" />
      </div>
    </>
  );
};

export default ProductPrice;
