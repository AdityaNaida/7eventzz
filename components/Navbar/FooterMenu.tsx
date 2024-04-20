//libraries
import Image from "next/image";
//styles
import style from "@/components/Navbar/FooterMenu.module.css";
//components
import FooterMenuLink from "./FooterMenuLink";
//props
interface Props {
  searchFnc: () => void;
  signupFnc: () => void;
}
const FooterMenu: React.FC<Props> = ({ searchFnc, signupFnc }) => {
  return (
    <>
      <div className={style.container}>
        <FooterMenuLink
          img="/icons/home.svg"
          path="/"
          isLink={true}
          controller=""
        />
        <FooterMenuLink
          img="/icons/category.svg"
          path="/category"
          isLink={true}
          controller=""
        />
        <button className={style.ai} onClick={searchFnc}>
          <Image
            src="/icons/white-search.svg"
            alt="plus icon"
            height={30}
            width={30}
            unoptimized
          />
        </button>
        <FooterMenuLink
          img="/icons/user.svg"
          path="/"
          isLink={false}
          controller={signupFnc}
        />
        <FooterMenuLink
          img="/icons/cart.svg"
          path="/cart"
          isLink={true}
          controller=""
        />
      </div>
    </>
  );
};

export default FooterMenu;
