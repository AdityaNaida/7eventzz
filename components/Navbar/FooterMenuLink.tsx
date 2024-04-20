//libraries
import Image from "next/image";
import Link from "next/link";
//style
import style from "@/components/Navbar/FooterMenuLink.module.css";
//props
interface Props {
  img: string;
  path: string;
  isLink: boolean;
  controller: any;
}
const FooterMenuLink: React.FC<Props> = ({ img, path, isLink, controller }) => {
  return (
    <>
      {isLink ? (
        <Link href={path} className={style.link}>
          <Image
            src={img}
            alt={`${img} Image`}
            height={25}
            width={25}
            unoptimized
          />
        </Link>
      ) : (
        <button className={style.link} onClick={controller}>
          <Image
            src={img}
            alt={`${img} Image`}
            height={25}
            width={25}
            unoptimized
          />
        </button>
      )}
    </>
  );
};

export default FooterMenuLink;
