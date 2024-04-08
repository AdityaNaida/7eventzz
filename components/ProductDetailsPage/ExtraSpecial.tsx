//libraries
import Link from "next/link";
import Image from "next/image";
//style
import style from "@/components/ProductDetailsPage/ExtraSpecial.module.css";

export default function ExtraSpecial({
  path,
  productName,
  productPrice,
  img,
  isActive,
}: {
  path: string;
  productName: string;
  productPrice: number;
  img: string;
  isActive: boolean;
}) {
  return (
    <>
      <Link
        href={path}
        className={`${style.container} ${isActive ? style.active : ""}`}
      >
        <div className={style.imgHolder}>
          <Image
            src={img}
            alt={`${img} Image`}
            height={50}
            width={50}
            unoptimized
          />
        </div>
        <p className={style.name}>{productName}</p>
        <p className={style.price}>&#8377;{productPrice}</p>
      </Link>
    </>
  );
}
