//Libraries
import Link from "next/link";
import Image from "next/image";

//styles
import style from "@/components/HomePage/CategoryImage.module.css";

//props
interface Props {
  path: string;
  image: string;
}

const CategoryImage: React.FC<Props> = ({ path, image }) => {
  return (
    <>
      <Link href={path} className={style.link}>
        <Image
          src={image}
          alt={image + " Image"}
          height={50}
          width={50}
          unoptimized
          priority
        />
      </Link>
    </>
  );
};

export default CategoryImage;
