"use client";
import { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";

import style from "@/components/CartPage/PaymentDetails.module.css";

import Modal from "../Navbar/Modal";

const PaymentDetails: React.FC = () => {
  const bill = useRef<HTMLDivElement>(null);
  const [signUp, setSignUp] = useState<boolean>(false);
  const [userName, setUserName] = useState<string>("");
  const [number, setNumber] = useState<string>("");
  const [wrongNumber, setWrongNumber] = useState<string>("");

  const billTrackerHandler = () => {
    window.scrollTo({
      top: bill.current?.offsetTop || 0,
      behavior: "smooth",
    });
  };

  const signUpController = () => {
    setSignUp(!signUp);
  };

  const onSubmitHandler: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    console.log("form submitted");
  };

  const nameHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserName(e.target.value);
  };

  const numberHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    let newValue = e.target.value;
    newValue = newValue.replace(/\D/g, "");

    newValue = newValue.slice(0, 10);
    setNumber(newValue);

    if (newValue.length === 10) {
      setWrongNumber("");
    }
  };

  const numberBlurHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setWrongNumber(e.target.value);
  };

  const cleanupNumber = () => {
    setNumber("");
    setWrongNumber("");
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

      {signUp && (
        <Modal offModal={signUpController}>
          <div className={style.signUpContaier}>
            <h2 className={style.signUpHeading}>Sign up / Sign in</h2>
            <p className={style.signUpText}>
              Enjoy the convenience of a single account across all participating
              brands
            </p>
            <button className={style.backBtn} onClick={signUpController}>
              <Image
                src="/icons/back-icon.svg"
                alt="back icon"
                height={20}
                width={20}
              />
              Back
            </button>
            <button className={style.closeBtn} onClick={signUpController}>
              <Image
                src="/icons/close.svg"
                alt="close image"
                height={25}
                width={25}
              />
            </button>
            <form onSubmit={onSubmitHandler} className={style.form}>
              <label htmlFor="name">Name</label>
              <div className={style.inputHolder}>
                <input
                  type="text"
                  placeholder="Enter your name"
                  required
                  id="name"
                  onChange={nameHandler}
                  value={userName}
                  className={`${style.input} ${
                    userName.length >= 3 && style.right
                  }`}
                />
                {userName.length >= 3 && (
                  <Image
                    src="/icons/green-check-icon.svg"
                    alt="green check icon"
                    height={20}
                    width={20}
                    className={style.correct}
                  />
                )}
              </div>
              <label htmlFor="number">Mobile Number</label>
              <div className={style.inputHolder}>
                <input
                  type="tel"
                  placeholder="Enter your mobile number"
                  required
                  id="number"
                  value={number}
                  onChange={numberHandler}
                  onBlur={numberBlurHandler}
                  className={`${style.input} ${
                    number.length === 10 && style.right
                  }  ${
                    wrongNumber.length < 9 &&
                    wrongNumber.length > 0 &&
                    style.wrong
                  }`}
                />
                {number.length === 10 && (
                  <Image
                    src="/icons/green-check-icon.svg"
                    alt="green check icon"
                    height={20}
                    width={20}
                    className={style.correct}
                  />
                )}
                {wrongNumber.length < 9 && wrongNumber.length > 0 && (
                  <>
                    <Image
                      src="/icons/red-close-icon.svg"
                      alt="red-close-icon"
                      height={20}
                      width={20}
                      className={style.wrongIcon}
                      onClick={cleanupNumber}
                    />
                    <p className={style.warningMessage}>
                      *Incorrect number detected
                    </p>
                  </>
                )}
              </div>
              <p className={style.termsText}>
                By creating your account you agree to our{" "}
                <Link href="/">Terms & Conditions</Link>
              </p>
              <button className={style.submitBtn}>Next</button>
            </form>
          </div>
        </Modal>
      )}
    </>
  );
};

export default PaymentDetails;
