"use client";
//libraries
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

//styles
import style from "@/components/Navbar/Navbar.module.css";

//components
import NavbarLink from "./NavbarLink";
import DynamicLink from "./DynamicLink";
import Modal from "./Modal";
import FooterMenu from "./FooterMenu";

const Navbar: React.FC = () => {
  const [navbar, setNavbar] = useState<boolean>(false);
  const navbarHandler = () => {
    setNavbar(!navbar);
  };
  return (
    <>
      <header>
        <nav className={style.navbar}>
          <div className={style.logo}>7eventzz</div>
          <div className={style.dynamicLinks}>
            <DynamicLink path="/" text="Kids" />
            <DynamicLink path="/" text="Coupels" />
            <DynamicLink path="/" text="Occasion" />
            <DynamicLink path="/" text="Welcome" />
            <DynamicLink path="/" text="Birthday" />
          </div>
          <div className={style.navbarLinks}>
            <button className={style.locationBtn}>
              Select Location
              <Image
                src="/icons/navigation.svg"
                alt="navigation icon"
                height={25}
                width={25}
              />
            </button>
            <NavbarLink path="/" img="/icons/cart.svg" />
            <NavbarLink path="/" img="/icons/user.svg" />
            <button onClick={navbarHandler} className={style.menuBtn}>
              {/* Menu */}
              <Image
                src="/icons/menu.svg"
                alt="menu icon"
                height={25}
                width={25}
              />
            </button>
          </div>
        </nav>
      </header>
      <FooterMenu />
      {navbar && (
        <Modal offModal={navbarHandler}>
          <div className={style.mobileDynamicLinks}>
            <div className={style.heading}>
              <Image
                src="/icons/user.webp"
                alt="user icon"
                height={50}
                width={50}
              />
              <span className={style.cancleBtn} onClick={navbarHandler}>
                &#x2715;
              </span>
              <div className={style.userDetails}>
                <p>Tom Holland</p>
                <span>User</span>
                <Link href="/">Sign In</Link>
                <Link href="/">Support</Link>
              </div>
            </div>
            <div className={style.content}>
              <DynamicLink path="/" text="Kids" />
              <DynamicLink path="/" text="Coupels" />
              <DynamicLink path="/" text="Occasion" />
              <DynamicLink path="/" text="Welcome" />
              <DynamicLink path="/" text="Birthday" />
            </div>
          </div>
        </Modal>
      )}
    </>
  );
};

export default Navbar;
