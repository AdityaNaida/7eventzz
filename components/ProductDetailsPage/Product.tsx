"use client";
//libraries
import { useState } from "react";
import Image from "next/image";
//style
import style from "@/components/ProductDetailsPage/Product.module.css";
//components
import ImgSlider from "./ImgSlider";
import Details from "./Details";
import ProductDetailsCard from "./ProductDetailsCard";
import ProductController from "./ProductController";
import ProductOffers from "./ProductOffers";
import Modal from "../Navbar/Modal";
import AddOnContainer from "./AddOnContainer";

const Product: React.FC = () => {
  const images = ["/pr1.webp", "/pr2.webp", "/pr3.webp"];
  const [addOns, setAddOns] = useState<boolean>(false);

  const addOnHandler = () => {
    setAddOns(!addOns);
  };
  return (
    <>
      <div className={style.container}>
        <div className={style.productImages}>
          <ImgSlider images={images} />
        </div>
        <div className={style.details}>
          <ProductDetailsCard>
            <Details />
          </ProductDetailsCard>

          <ProductDetailsCard>
            <ProductController />
          </ProductDetailsCard>

          <div className={style.actionsContainer}>
            <button className={style.chatBtn}>
              <Image
                src="/icons/whatsapp-icon.svg"
                alt="whatsapp icon"
                height={25}
                width={25}
              />
              Whatsapp
            </button>
            <button className={style.buyNowBtn} onClick={addOnHandler}>
              <Image
                src="/icons/white-cart-icon.svg"
                alt="cart icon"
                height={25}
                width={25}
              />
              Book Now
            </button>
          </div>

          <ProductDetailsCard>
            <ProductOffers
              heading="Get it for ₹700"
              subText="10% off on first time booking"
              codeText="eventzz"
              offersText="+ 2 More Offers"
            />
          </ProductDetailsCard>
        </div>
      </div>
      {addOns && (
        <Modal offModal={addOnHandler}>
          <AddOnContainer closeFnc={addOnHandler} />
        </Modal>
      )}
    </>
  );
};

export default Product;
