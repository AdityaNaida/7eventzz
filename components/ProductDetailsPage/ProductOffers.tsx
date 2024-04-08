"use client";
//libraries
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
//style
import style from "@/components/ProductDetailsPage/ProductOffers.module.css";
//components
import ModalContainer2 from "./ModalContainer2";
import DiscountOffers from "./DiscountOffers";
export default function ProductOffers({
  heading,
  subText,
  codeText,
  offersText,
}: {
  heading: string;
  subText: string;
  codeText: string;
  offersText: string;
}) {
  const [offers, setOffers] = useState<boolean>(false);
  const offersHandler = () => {
    setOffers(!offers);
  };
  return (
    <>
      <div className={style.container}>
        <div>
          <p className={style.heading}>
            <Image
              src="/icons/percentage.svg"
              alt="Percentage icon"
              height={20}
              width={20}
            />
            {heading}
          </p>
          <p className={style.subText}>{subText}</p>
        </div>

        <div className={style.coupenBox}>
          <p className={style.coupenCode}>Use Code {codeText}</p>
          <Link href="/" className={style.termsConditions}>
            View T&amp;C
          </Link>
        </div>
      </div>
      <div className={style.moreOffers}>
        <button className={style.moreOffersBtn} onClick={offersHandler}>
          {offersText}
        </button>
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
              isApplyable={!false}
            />
            <DiscountOffers
              heading="Get it for ₹650"
              subText="10% off on your first Purchase"
              coupenCode="Eventzz10"
              isApplyable={!false}
            />
            <DiscountOffers
              heading="Get it for ₹650"
              subText="10% off on your first Purchase"
              coupenCode="Eventzz10"
              isApplyable={!false}
            />
            <DiscountOffers
              heading="Get it for ₹650"
              subText="10% off on your first Purchase"
              coupenCode="Eventzz10"
              isApplyable={!false}
            />
            <DiscountOffers
              heading="Get it for ₹650"
              subText="10% off on your first Purchase"
              coupenCode="Eventzz10"
              isApplyable={!false}
            />
          </div>
        </ModalContainer2>
      )}
    </>
  );
}
