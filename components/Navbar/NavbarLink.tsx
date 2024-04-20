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
  controller: any;
  isLink: boolean;
}

const NavbarLink: React.FC<Props> = ({
  path,
  img,
  text,
  controller,
  isLink,
}) => {
  return (
    <>
      {isLink ? (
        <Link href={path} className={style.link}>
          <Image src={img} alt={img + "Icon"} height={25} width={25} />
          <span>{text}</span>
        </Link>
      ) : (
        <button className={style.link} onClick={controller}>
          <Image src={img} alt={img + "Icon"} height={25} width={25} />
          <span>{text}</span>
        </button>
      )}
    </>
  );
};

export default NavbarLink;
