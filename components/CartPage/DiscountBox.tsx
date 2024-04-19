"use client";
import { useState } from "react";
import Image from "next/image";

import style from "@/components/CartPage/DiscountBox.module.css";

import ModalContainer2 from "../ProductDetailsPage/ModalContainer2";
import DiscountOffers from "../ProductDetailsPage/DiscountOffers";

export default function DiscountBox() {
  const [offers, setOffers] = useState<boolean>(false);
  const offersHandler = () => {
    setOffers(!offers);
  };
  return (
    <>
      <div className={style.container}>
        <p className={style.heading}>Coupon</p>
        <form>
          <input
            type="text"
            placeholder="Enter Coupon Code"
            required
            className={style.inputField}
          />
          <button className={style.submitBtn}>Submit</button>
        </form>
      </div>

      <div className={style.offersContainer}>
        <div>
          <Image
            src="/icons/hot-sale.webp"
            alt="discount-icon image"
            width={20}
            height={20}
            unoptimized
          />

          <span>Offers for you!</span>
        </div>
        <button className={style.selectBtn} onClick={offersHandler}>
          <Image
            src={`/icons/${offers ? "grey-minus" : "grey-plus"}.svg`}
            alt="rey-plus icon"
            height={20}
            width={20}
          />
        </button>
      </div>

      {offers && (
        <ModalContainer2
          heading="All Offers"
          headingIcon="/icons/hot-sale.webp"
          subText="Save more with our exiting offers!"
          closeFunction={offersHandler}
        >
          <div className={style.discountSlider}>
            <DiscountOffers
              heading="Get it for ₹650"
              subText="10% off on your first Purchase"
              coupenCode="Eventzz10"
              isApplyable={true}
              isOffers={false}
              offersFnc=""
              numberOffers={0}
            />
            <DiscountOffers
              heading="Get it for ₹650"
              subText="10% off on your first Purchase"
              coupenCode="Eventzz10"
              isApplyable={true}
              isOffers={false}
              offersFnc=""
              numberOffers={0}
            />
            <DiscountOffers
              heading="Get it for ₹650"
              subText="10% off on your first Purchase"
              coupenCode="Eventzz10"
              isApplyable={true}
              isOffers={false}
              offersFnc=""
              numberOffers={0}
            />
            <DiscountOffers
              heading="Get it for ₹650"
              subText="10% off on your first Purchase"
              coupenCode="Eventzz10"
              isApplyable={true}
              isOffers={false}
              offersFnc=""
              numberOffers={0}
            />
            <DiscountOffers
              heading="Get it for ₹650"
              subText="10% off on your first Purchase"
              coupenCode="Eventzz10"
              isApplyable={true}
              isOffers={false}
              offersFnc=""
              numberOffers={0}
            />
          </div>
        </ModalContainer2>
      )}
    </>
  );
}
