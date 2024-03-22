"use client";
//libraries
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

//styles
import style from "@/components/Navbar/Navbar.module.css";

//components
import Search from "./Search";
import NavbarLink from "./NavbarLink";
import DynamicLink from "./DynamicLink";
import Modal from "./Modal";

const Navbar: React.FC = () => {
  const [navbar, setNavbar] = useState<boolean>(false);
  const navbarHandler = () => {
    setNavbar(!navbar);
  };
  return (
    <>
      <nav className={style.navbar}>
        <div className={style.navbarHolder}>
          <div className={style.menuBtn} onClick={navbarHandler}>
            <span></span>
            <span></span>
          </div>

          <div className={style.logo}>
            <span>7</span>eventzz
          </div>
          <div className={style.locationDetect}>
            <button>
              Select location{" "}
              <Image
                src="/icons/Arrowdown.svg"
                alt="Arrow down Image"
                width={20}
                height={20}
              />
            </button>
          </div>
          <div className={style.search}>
            <Search />
          </div>
          <div className={style.flex1}></div>
          <div className={style.navbarLinks}>
            <NavbarLink path="/" text="" img="/icons/search-icon.svg" />
            <NavbarLink path="/" text="Hello, Sign in" img="/icons/user.svg" />
            <NavbarLink path="/" text="Cart" img="/icons/cart.svg" />
            <NavbarLink path="/" text="Support" img="/icons/contact.svg" />
          </div>
        </div>
      </nav>
      <div className={style.dynamicLinks}>
        <DynamicLink path="/" text="Kids" />
        <DynamicLink path="/" text="Coupels" />
        <DynamicLink path="/" text="Occasion" />
        <DynamicLink path="/" text="Welcome" />
        <DynamicLink path="/" text="Birthday" />
      </div>
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
