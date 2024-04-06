//style
import style from "@/components/ProductDetailsPage/ProductHeading.module.css";
//components
import RatingReviews from "./RatingReviews";
//props
interface Props {
  heading: string;
}
const ProductHeading: React.FC<Props> = ({ heading }) => {
  return (
    <>
      <div className={style.container}>
        <h1>{heading}</h1>
      </div>
    </>
  );
};

export default ProductHeading;
