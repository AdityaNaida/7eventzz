//style
import style from "@/components/ProductDetailsPage/ProductHeading.module.css";
//components
import RatingReviews from "./RatingReviews";
//props
interface Props {
  heading: string;
  rating: string;
  reviews: number;
  //   reviewFunction: () => void;
}
const ProductHeading: React.FC<Props> = ({
  heading,
  rating,
  reviews,
  //   reviewFunction,
}) => {
  return (
    <>
      <div className={style.container}>
        <h1>{heading}</h1>
        <RatingReviews
          rating={rating}
          reviews={reviews}
          //   reviewsFnc={reviewFunction}
        />
      </div>
    </>
  );
};

export default ProductHeading;
