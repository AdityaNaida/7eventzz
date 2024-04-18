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
        <p className={style.heading}>Coupen</p>
        <form>
          <input
            type="text"
            placeholder="Enter Coupen Code"
            required
            className={style.inputField}
          />
          <button className={style.submitBtn}>Submit</button>
        </form>
      </div>

      <div className={style.offersContainer}>
        <Image
          src="/icons/gift.webp"
          alt="gift image"
          width={30}
          height={30}
          unoptimized
        />

        <div>
          <span>Offers for you!</span>
          <p>Choose and apply voucher in 2 simple steps</p>

          <button className={style.selectBtn} onClick={offersHandler}>
            Select
          </button>
        </div>
      </div>

      {offers && (
        <ModalContainer2
          heading="All Offers"
          headingIcon="/icons/discount.svg"
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
