//libraries
import Image from "next/image";
import Link from "next/link";
//style
import style from "@/components/HomePage/CategoryBackdrop.module.css";
//props
interface Props {
  image: string;
  path: string;
}
const CategoryBackdrop: React.FC<Props> = ({ image, path }) => {
  return (
    <>
      <Link href={path} className={style.link}>
        <Image
          src={image}
          alt={`${image} Image`}
          height={50}
          width={50}
          unoptimized
          priority
        />
      </Link>
    </>
  );
};

export default CategoryBackdrop;
