"use client";
import { useRef, useState } from "react";

import style from "@/components/CartPage/PaymentDetails.module.css";

import SignUp from "../Navbar/SignUp";

const PaymentDetails: React.FC = () => {
  const bill = useRef<HTMLDivElement>(null);
  const [signUp, setSignUp] = useState<boolean>(false);

  const billTrackerHandler = () => {
    window.scrollTo({
      top: bill.current?.offsetTop || 0,
      behavior: "smooth",
    });
  };

  const signUpController = () => {
    setSignUp(!signUp);
  };

  return (
    <>
      <div className={style.priceDetailsContainer} ref={bill}>
        <h4>Price Details </h4>
        <p>
          <span>Base Total</span>
          <span>
            <b>₹ 1800</b>
          </span>
        </p>
        <p>
          <span>Add On Total</span>
          <span>
            <b>₹ 600</b>
          </span>
        </p>
        <p>
          <span>
            Delivery
            <samp className={style.deliveryTag}>Evening</samp>
          </span>
          <span>
            <b>₹ 600</b>
          </span>
        </p>
        <p>
          <span>Total Amount</span>
          <span>
            <b>₹ 2400</b>
          </span>
        </p>

        <p>
          <span>Coupen Discount</span>
          <span>-</span>
        </p>
        <p>
          <span>
            <b>Amount To Pay</b>
          </span>
          <span>
            <b>₹ 2400</b>
          </span>
        </p>
      </div>
      <div className={style.proceedToBuyContainer}>
        <div className={style.priceBillHolder}>
          <p className={style.txt}>
            You Saved <span> ₹ 1000</span>
          </p>
          <p className={style.totalPrice}>₹ 2400</p>
          <button className={style.viewBillBtn} onClick={billTrackerHandler}>
            View Bill*
          </button>
        </div>

        <button onClick={signUpController}>Proceed To Buy </button>
      </div>
      {signUp && <SignUp controller={signUpController} />}
    </>
  );
};

export default PaymentDetails;
