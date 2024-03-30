//libraries
import Link from "next/link";
import Image from "next/image";

//styles
import style from "@/components/Navbar/NavbarLink.module.css";

//props
interface Props {
  path: string;
  img: string;
  text: string;
}

const NavbarLink: React.FC<Props> = ({ path, img, text }) => {
  return (
    <>
      <Link href={path} className={style.link}>
        <Image src={img} alt={img + "Icon"} height={25} width={25} />
        <span>{text}</span>
      </Link>
    </>
  );
};

export default NavbarLink;
