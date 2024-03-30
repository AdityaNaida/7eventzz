//styles
import style from "@/components/Navbar/FooterMenu.module.css";
//components
import FooterMenuLink from "./FooterMenuLink";
const FooterMenu: React.FC = () => {
  return (
    <>
      <div className={style.container}>
        <FooterMenuLink text="Home" img="/icons/home.svg" path="/" />
        <FooterMenuLink text="Category" img="/icons/category.svg" path="/" />
        <FooterMenuLink text="Support" img="/icons/contact.svg" path="/" />
        <FooterMenuLink text="Sign In" img="/icons/user.svg" path="/" />
        <FooterMenuLink text="Cart" img="/icons/cart.svg" path="/" />
      </div>
    </>
  );
};

export default FooterMenu;
