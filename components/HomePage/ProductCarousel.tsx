//libraries
import Image from "next/image";
import Link from "next/link";

//styles
import style from "@/components/HomePage/ProductCarousel.module.css";

//props
interface Props {
  image: string;
  path: string;
  name: string;
  price: string;
  beforePrice: string;
  discount: string;
  rating: string;
  reviews: number;
}

const ProductCarousel: React.FC<Props> = ({
  image,
  path,
  name,
  price,
  beforePrice,
  discount,
  rating,
  reviews,
}) => {
  return (
    <>
      <Link href={path} className={style.link}>
        <div className={style.imageHolder}>
          <Image
            src={image}
            alt={`${image} Image`}
            height={50}
            width={50}
            unoptimized
            priority
          />
        </div>
        <p className={style.productName}>{name}</p>
        <div className={style.details}>
          <span className={style.price}>&#x20B9; {price}</span>
          {beforePrice.length > 0 && (
            <>
              <span className={style.beforePrice}>&#x20B9; {beforePrice}</span>
            </>
          )}
          {discount.length > 0 && (
            <>
              <span className={style.discount}>{discount}</span>
            </>
          )}
        </div>
      </Link>
    </>
  );
};

export default ProductCarousel;
