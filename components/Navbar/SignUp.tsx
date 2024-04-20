"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import style from "@/components/Navbar/SignUp.module.css";

import Modal from "./Modal";

export default function SignUp({ controller }: { controller: () => void }) {
  const [userName, setUserName] = useState<string>("");
  const [number, setNumber] = useState<string>("");
  const [wrongNumber, setWrongNumber] = useState<string>("");
  const [signUpSlide, setSignUpSlide] = useState<boolean>(true);
  const [password, setPassword] = useState<string>("");
  const [wrongPassword, setWrongPassword] = useState<string>("");
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const onSubmitHandler: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    if (userName.length >= 3 && number.length === 10) {
      setSignUpSlide(false);
    }
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

  const showPasswordHandler = () => {
    setShowPassword(!showPassword);
  };

  const onPasswordSubmitHandler: React.FormEventHandler<HTMLFormElement> = (
    e
  ) => {
    e.preventDefault();
    console.log("Password Submitted");
  };
  const passwordHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    let currentValue = e.target.value;
    setPassword(currentValue);
    if (currentValue.length >= 6) {
      setWrongPassword("");
    }
    if (currentValue.length === 0) {
      setWrongPassword("");
    }
  };

  const onBlurPasswordHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setWrongPassword(e.target.value);
  };

  const passWordCleanUp = () => {
    setPassword("");
    setWrongPassword("");
  };
  return (
    <>
      <Modal offModal={controller}>
        <div className={style.signUpContaier}>
          <h2 className={style.signUpHeading}>Sign up / Sign in</h2>
          <p className={style.signUpText}>
            Enjoy the convenience of a single account across all participating
            brands
          </p>
          <button className={style.backBtn} onClick={controller}>
            <Image
              src="/icons/back-icon.svg"
              alt="back icon"
              height={20}
              width={20}
            />
            Back
          </button>
          <button className={style.closeBtn} onClick={controller}>
            <Image
              src="/icons/close.svg"
              alt="close image"
              height={25}
              width={25}
            />
          </button>
          <div className={style.formHolder}>
            <form
              onSubmit={onSubmitHandler}
              className={`${style.form} ${signUpSlide ? "" : style.goLeft}`}
            >
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

            <form className={style.form} onSubmit={onPasswordSubmitHandler}>
              <label htmlFor="password">Create Password</label>
              <div className={style.inputHolder}>
                <input
                  type={showPassword ? "text" : "password"}
                  required
                  placeholder="Enter your password"
                  id="password"
                  value={password}
                  onChange={passwordHandler}
                  onBlur={onBlurPasswordHandler}
                  className={`${style.input} ${
                    password.length >= 6 && style.right
                  }   ${
                    wrongPassword.length <= 5 &&
                    wrongPassword.length > 0 &&
                    style.wrong
                  }`}
                />
                <Image
                  src={`/icons/${showPassword ? `eye` : `eye-slash`}.svg`}
                  alt="eye icon"
                  height={20}
                  width={20}
                  className={style.eyeIcon}
                  onClick={showPasswordHandler}
                />

                {password.length > 5 && (
                  <Image
                    src="/icons/green-check-icon.svg"
                    alt="green check icon"
                    height={20}
                    width={20}
                    className={style.correct}
                  />
                )}

                {wrongPassword.length <= 5 && wrongPassword.length > 0 && (
                  <Image
                    src="/icons/red-close-icon.svg"
                    alt="red-close-icon"
                    height={20}
                    width={20}
                    className={style.wrongIcon}
                    onClick={passWordCleanUp}
                  />
                )}

                <p className={style.normalTxt}>
                  *Minimum 6 characters required
                </p>
              </div>
              {password.length >= 6 ? (
                <Link href="/" className={style.submitBtn}>
                  Next
                </Link>
              ) : (
                <button className={style.submitBtn}>Next</button>
              )}
            </form>
          </div>
        </div>
      </Modal>
    </>
  );
}
