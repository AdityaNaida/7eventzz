//libraries
import Link from "next/link";
import Image from "next/image";
//styles
import style from "@/components/HomePage/PcCard.module.css";
//props
interface Props {
  path: string;
  image: string;
  text: string;
}
const PcCard: React.FC<Props> = ({ path, image, text }) => {
  return (
    <>
      <Link href={path} className={style.link}>
        <div className={style.imageHolder}>
          <Image
            src={image}
            alt={image + " Icon"}
            height={30}
            width={30}
            unoptimized
            priority
          />
        </div>
        <span>{text}</span>
      </Link>
    </>
  );
};

export default PcCard;
