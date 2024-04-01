//libraries
import Image from "next/image";
import Link from "next/link";
//style
import style from "@/components/CategoryPage/CategoryCont1.module.css";
//Props
interface Props {
  path: string;
  image: string;
  text: string;
}
const CategoryCont1: React.FC<Props> = ({ path, image, text }) => {
  return (
    <>
      <Link href={path} className={style.container}>
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

export default CategoryCont1;
