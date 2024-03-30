//libraries
import Image from "next/image";
import Link from "next/link";
//style
import style from "@/components/Navbar/FooterMenuLink.module.css";
//props
interface Props {
  img: string;
  path: string;
  text: string;
}
const FooterMenuLink: React.FC<Props> = ({ img, path, text }) => {
  return (
    <>
      <Link href={path} className={style.link}>
        <Image
          src={img}
          alt={`${img} Image`}
          height={25}
          width={25}
          unoptimized
        />
        <p>{text}</p>
      </Link>
    </>
  );
};

export default FooterMenuLink;
