//style
import style from "@/components/ProductDetailsPage/RatingReviews.module.css";
//props
interface Props {
  rating: string;
  reviews: number;
  //   reviewsFnc: () => void;
}
const RatingReviews: React.FC<Props> = ({ rating, reviews }) => {
  return (
    <>
      <p className={style.text}>
        <span className={style.rating}>&#9733;{rating}</span>
        <span className={style.reviews}>{reviews} Reviews</span>
      </p>
    </>
  );
};

export default RatingReviews;
