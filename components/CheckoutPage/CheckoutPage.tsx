"use client";
import { useRef } from "react";

import Steps from "../CartPage/Steps";
import CheckoutData from "./CheckoutData";
import CheckoutBill from "./CheckoutBill";
import CheckoutBillStatement from "./CheckoutBillStatement";

import style from "@/components/CheckoutPage/CheckoutPage.module.css";

export default function CheckoutPage() {
  const billStatement = useRef<HTMLDivElement>(null);

  function billFollower() {
    window.scrollTo({
      top: billStatement.current?.offsetHeight || 0,
      behavior: "smooth",
    });
  }
  return (
    <>
      <div className={style.container}>
        <div className={style.form}>
          <Steps isActive={true} />
          <CheckoutData />
        </div>
        <div className={style.bill}>
          <CheckoutBill followerBtn={billFollower} />
          <CheckoutBillStatement billRef={billStatement} />
        </div>
      </div>
    </>
  );
}
