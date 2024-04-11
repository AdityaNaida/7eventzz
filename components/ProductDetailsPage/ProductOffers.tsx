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
      <DiscountOffers
        heading="Get it for ₹700"
        subText="10% off on your first Purchase"
        coupenCode="newuser"
        isApplyable={false}
        isOffers={true}
        offersFnc={offersHandler}
        numberOffers={5}
      />
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
              isApplyable={false}
              isOffers={false}
              offersFnc=""
              numberOffers={0}
            />
            <DiscountOffers
              heading="Get it for ₹650"
              subText="10% off on your first Purchase"
              coupenCode="Eventzz10"
              isApplyable={false}
              isOffers={false}
              offersFnc=""
              numberOffers={0}
            />
            <DiscountOffers
              heading="Get it for ₹650"
              subText="10% off on your first Purchase"
              coupenCode="Eventzz10"
              isApplyable={false}
              isOffers={false}
              offersFnc=""
              numberOffers={0}
            />
            <DiscountOffers
              heading="Get it for ₹650"
              subText="10% off on your first Purchase"
              coupenCode="Eventzz10"
              isApplyable={false}
              isOffers={false}
              offersFnc=""
              numberOffers={0}
            />
            <DiscountOffers
              heading="Get it for ₹650"
              subText="10% off on your first Purchase"
              coupenCode="Eventzz10"
              isApplyable={false}
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
