//libraries
import Image from "next/image";
//styles
import style from "@/components/Navbar/FooterMenu.module.css";
//components
import FooterMenuLink from "./FooterMenuLink";
const FooterMenu: React.FC = () => {
  return (
    <>
      <div className={style.container}>
        <FooterMenuLink img="/icons/home.svg" path="/" />
        <FooterMenuLink img="/icons/category.svg" path="/" />
        <button className={style.ai}>
          <Image
            src="/icons/white-search.svg"
            alt="plus icon"
            height={30}
            width={30}
            unoptimized
          />
        </button>
        <FooterMenuLink img="/icons/user.svg" path="/" />
        <FooterMenuLink img="/icons/cart.svg" path="/" />
      </div>
    </>
  );
};

export default FooterMenu;
