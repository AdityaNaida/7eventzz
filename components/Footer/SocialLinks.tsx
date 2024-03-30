//libraries
import Image from "next/image";
import Link from "next/link";
//style
import style from "@/components/Footer/SocialLinks.module.css";
//props
interface Props {
  path: string;
  img: string;
}
const SocialLinks: React.FC<Props> = ({ path, img }) => {
  return (
    <>
      <Link href={path} className={style.link}>
        <Image
          src={img}
          alt={`${img} Image`}
          height={30}
          width={30}
          unoptimized
        />
      </Link>
    </>
  );
};

export default SocialLinks;
