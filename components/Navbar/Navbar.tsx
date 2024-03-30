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
import NormalSearch from "./NormalSearch";

const Navbar: React.FC = () => {
  const [navbar, setNavbar] = useState<boolean>(false);
  const navbarHandler = () => {
    setNavbar(!navbar);
  };
  return (
    <>
      <header className={style.header}>
        <nav className={style.navbar}>
          <div className={style.logo}>
            <button onClick={navbarHandler} className={style.menuBtn}>
              {/* Menu */}
              <Image
                src="/icons/menu.svg"
                alt="menu icon"
                height={25}
                width={25}
              />
            </button>
            7eventzz
          </div>
          <button className={style.locationBtn}>
            <Image
              src="/icons/navigation.svg"
              alt=" navigation icon"
              height={25}
              width={25}
            />
            Select Location
          </button>
          <div className={style.searchHolder}>
            <NormalSearch />
          </div>
          <div className={style.flex1}></div>
          <div className={style.navbarLinks}>
            <NavbarLink path="/" img="/icons/user.svg" text="Hello, Log in" />
            <NavbarLink path="/" img="/icons/cart.svg" text="Cart" />
          </div>
        </nav>
      </header>
      <div className={style.dynamicLinks}>
        <DynamicLink path="/" text="Kids" />
        <DynamicLink path="/" text="Coupels" />
        <DynamicLink path="/" text="Occasion" />
        <DynamicLink path="/" text="Welcome" />
        <DynamicLink path="/" text="Birthday" />
      </div>
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
