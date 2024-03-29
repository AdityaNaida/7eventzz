//libraries
import Link from "next/link";
import Image from "next/image";
//styles
import style from "@/components/HomePage/RoundCategory.module.css";

//props
interface Props {
  path: string;
  img: string;
  text: string;
}

const RoundCategory: React.FC<Props> = ({ path, img, text }) => {
  return (
    <>
      <Link href={path} className={style.link}>
        <Image
          src={img}
          alt={`${img} image`}
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

export default RoundCategory;
