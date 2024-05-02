"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import style from "@/components/CheckoutPage/CheckoutBill.module.css";

export default function CheckoutBill() {
  const [totalPayment, setTotalPayment] = useState<number>(18000);
  const [paymentOption, setPaymentOption] = useState<string>("full");
  function halfPayment() {
    setTotalPayment((prev) => prev / 2);
    setPaymentOption("half");
  }
  function fullPayment() {
    setTotalPayment((prev) => prev * 2);
    setPaymentOption("full");
  }
  return (
    <>
      <div className={style.container}>
        <h2>
          Order Details{" "}
          <Image
            src="/icons/order-details-icon.svg"
            alt="price details"
            height={30}
            width={30}
            unoptimized
            priority
            className={style.pricedetails_image}
          />
        </h2>
        <div className={style.nested}>
          <div className={style.checkout_image_holder}>
            <Image
              src="/extra.webp"
              alt="checkout image"
              height={50}
              width={50}
              unoptimized
              priority
            />
          </div>
          <div className={style.checkout_details}>
            <h2>Surprise Room Decoration</h2>
            <p>
              {" "}
              <Image
                src="/icons/calendar-icon.svg"
                alt="calendar icon"
                height={20}
                width={20}
              />{" "}
              25 September 2024
            </p>
            <p>
              {" "}
              <Image
                src="/icons/clock-icon.svg"
                alt="clock icon"
                height={20}
                width={20}
              />{" "}
              06:00 PM - 08:00 PM
            </p>
            <p>
              {" "}
              <Image
                src="/icons/credit-card.svg"
                alt="credit-card"
                height={20}
                width={20}
              />{" "}
              Amonut to Pay: ₹18000
            </p>
          </div>
        </div>

        <div className={style.payments_container}>
          <div className={style.payment_options}>
            <p>Payment Options </p>

            <div>
              <input
                type="radio"
                id="half"
                name="payment_option"
                value="50%"
                onChange={halfPayment}
                checked={paymentOption === "half"}
              />
              <label htmlFor="half">50%</label>
            </div>
            <div>
              <input
                type="radio"
                id="full"
                name="payment_option"
                value="100%"
                checked={paymentOption === "full"}
                onChange={fullPayment}
              />
              <label htmlFor="full">100%</label>
            </div>
          </div>

          <Link href="/">Proceed to Pay | ₹{totalPayment}</Link>
          <span>
            100% Safe & Secure Payments{" "}
            <Image
              src="/icons/verified-payment.webp"
              alt="payment icon"
              height={20}
              width={20}
            />
          </span>
        </div>
      </div>
    </>
  );
}
