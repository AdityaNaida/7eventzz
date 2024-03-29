//libraries
import Image from "next/image";
import Link from "next/link";
//style
import style from "@/components/HomePage/CategoryBackdrop.module.css";
//props
interface Props {
  image: string;
  path: string;
  text: string;
}
const CategoryBackdrop: React.FC<Props> = ({ image, path, text }) => {
  return (
    <>
      <Link href={path} className={style.link}>
        <div className={style.backdrop}></div>
        <Image
          src={image}
          alt={`${image} Image`}
          height={50}
          width={50}
          unoptimized
          priority
        />
        <p>{text}</p>
      </Link>
    </>
  );
};

export default CategoryBackdrop;
