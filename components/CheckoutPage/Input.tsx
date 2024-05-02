"use client";

//libraries
import { useState } from "react";
import Image from "next/image";

//styles
import styles from "@/components/CheckoutPage/Input.module.css";
//define props
interface InputProps {
  labelText: string;
  inputType: string;
  PlaceHolder: string;
  important: boolean;
  Textarea: boolean;
  isMobileNumber: boolean;
  isPincode: boolean;
}

const Input: React.FC<InputProps> = ({
  labelText,
  inputType,
  PlaceHolder,
  important,
  Textarea,
  isMobileNumber,
  isPincode,
}) => {
  const [redText, setRedText] = useState<boolean>(false);
  const [correct, setCorrect] = useState<boolean>(false);
  const [email, setEmail] = useState<string>("");
  const [emailValidation, setEmailValidation] = useState<boolean | null>(null);

  const NameChecker = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.value.length > 0 && event.target.value.length <= 2) {
      setRedText(true);
      setCorrect(false);
    } else if (event.target.value.length > 2) {
      setRedText(false);
      setCorrect(true);
    } else {
      setRedText(false);
      setCorrect(false);
    }
  };

  const NumberChecker = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.value.length >= 11) {
      setRedText(true);
      setCorrect(false);
    } else if (event.target.value.length === 10) {
      setRedText(false);
      setCorrect(true);
    } else {
      setRedText(false);
      setCorrect(false);
    }
  };

  const blurNumberChecker = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.value.length >= 1 && event.target.value.length <= 9) {
      setRedText(true);
      setCorrect(false);
    }
  };

  const PincodeChecker = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.value.length >= 7) {
      setRedText(true);
      setCorrect(false);
    } else if (event.target.value.length === 6) {
      setRedText(false);
      setCorrect(true);
    } else {
      setRedText(false);
      setCorrect(false);
    }
  };

  const blurPincodeChecker = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.value.length >= 1 && event.target.value.length <= 5) {
      setRedText(true);
      setCorrect(false);
    }
  };

  const emailChecker = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setEmailValidation(emailRegex.test(email));
    if (emailValidation) {
      setRedText(false);
      setCorrect(true);
    } else if (email.length === 0) {
      setRedText(false);
      setCorrect(false);
    }
  };

  const blurEmailChecker = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (emailValidation) {
      setRedText(false);
      setCorrect(true);
    } else if (!emailValidation) {
      setRedText(true);
      setCorrect(false);
    }
    if (event.target.value.length === 0) {
      setRedText(false);
      setCorrect(false);
    }
  };

  const TextareaChecker = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    if (event.target.value.length > 2) {
      setRedText(false);
      setCorrect(true);
    } else if (
      event.target.value.length < 2 &&
      event.target.value.length >= 1
    ) {
      setRedText(true);
      setCorrect(false);
    } else if (event.target.value.length === 0) {
      setRedText(false);
      setCorrect(false);
    }
  };
  const allInputChecker = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.value.length > 2) {
      setRedText(false);
      setCorrect(true);
    } else if (
      event.target.value.length < 2 &&
      event.target.value.length >= 1
    ) {
      setRedText(true);
      setCorrect(false);
    } else if (event.target.value.length === 0) {
      setRedText(false);
      setCorrect(false);
    }
  };

  const renderBorder = () => {
    if (redText) {
      return styles.redBorder;
    } else if (correct) {
      return styles.greenBorder;
    } else {
      return styles.inputFields;
    }
  };

  const rederFields = () => {
    if (inputType === "text" && labelText === "Name" && important) {
      return (
        <>
          <div className={styles.wrapper}>
            <label htmlFor="" className={styles.label}>
              {labelText} <span className={styles.redStar}>*</span>
            </label>
            <input
              type={inputType}
              required
              placeholder={PlaceHolder}
              className={renderBorder()}
              name={labelText}
              onChange={NameChecker}
            />
            {correct && (
              <Image
                src="/icons/correct.svg"
                alt="correct image"
                height={20}
                width={20}
                unoptimized
                className={styles.correctImage}
              />
            )}

            {redText && <span className={styles.redTxt}>Invalid Name</span>}
          </div>
        </>
      );
    } else if (inputType === "email" && labelText === "Email" && important) {
      return (
        <>
          <div className={styles.wrapper}>
            <label htmlFor="" className={styles.label}>
              {labelText} <span className={styles.redStar}>*</span>
            </label>
            <input
              type={inputType}
              required
              placeholder={PlaceHolder}
              className={renderBorder()}
              name={labelText}
              onChange={emailChecker}
              onBlur={blurEmailChecker}
            />
            {correct && (
              <Image
                src="/icons/correct.svg"
                alt="correct image"
                height={20}
                width={20}
                unoptimized
                className={styles.correctImage}
              />
            )}

            {redText && <span className={styles.redTxt}>Invalid Email</span>}
          </div>
        </>
      );
    } else if (isMobileNumber && important) {
      return (
        <>
          <div className={styles.wrapper}>
            <label htmlFor="" className={styles.label}>
              {labelText} <span className={styles.redStar}>*</span>
            </label>
            <input
              type={inputType}
              required
              placeholder={PlaceHolder}
              className={renderBorder()}
              name={labelText}
              onChange={NumberChecker}
              onBlur={blurNumberChecker}
            />
            {correct && (
              <Image
                src="/icons/correct.svg"
                alt="correct image"
                height={20}
                width={20}
                unoptimized
                className={styles.correctImage}
              />
            )}

            {redText && <span className={styles.redTxt}>Invalid Number</span>}
          </div>
        </>
      );
    } else if (isMobileNumber) {
      return (
        <>
          <div className={styles.wrapper}>
            <label htmlFor="" className={styles.label}>
              {labelText}
            </label>
            <input
              type={inputType}
              required
              placeholder={PlaceHolder}
              className={renderBorder()}
              name={labelText}
              onChange={NumberChecker}
              onBlur={blurNumberChecker}
            />
            {correct && (
              <Image
                src="/icons/correct.svg"
                alt="correct image"
                height={20}
                width={20}
                unoptimized
                className={styles.correctImage}
              />
            )}

            {redText && <span className={styles.redTxt}>Invalid Number</span>}
          </div>
        </>
      );
    } else if (isPincode) {
      return (
        <>
          <div className={styles.wrapper}>
            <label htmlFor="" className={styles.label}>
              {labelText}
              <span className={styles.redStar}>*</span>
            </label>
            <input
              type={inputType}
              required
              placeholder={PlaceHolder}
              className={renderBorder()}
              name={labelText}
              onChange={PincodeChecker}
              onBlur={blurPincodeChecker}
            />
            {correct && (
              <Image
                src="/icons/correct.svg"
                alt="correct image"
                height={20}
                width={20}
                unoptimized
                className={styles.correctImage}
              />
            )}

            {redText && <span className={styles.redTxt}>Invalid Pincode</span>}
          </div>
        </>
      );
    } else if (Textarea && important) {
      return (
        <>
          <div className={styles.wrapper}>
            <label htmlFor="" className={styles.label}>
              {labelText} <span className={styles.redStar}>*</span>
            </label>
            <textarea
              name={labelText}
              id=""
              cols={30}
              rows={4}
              placeholder={PlaceHolder}
              className={renderBorder()}
              required
              onChange={TextareaChecker}
            ></textarea>
            {correct && (
              <Image
                src="/icons/correct.svg"
                alt="correct image"
                height={20}
                width={20}
                unoptimized
                className={styles.correctImage}
              />
            )}
          </div>
          {redText && <span className={styles.redTxt}>Invalid Address</span>}
        </>
      );
    } else if (Textarea && important === false) {
      return (
        <>
          <div className={styles.wrapper}>
            <label htmlFor="" className={styles.label}>
              {labelText}
            </label>
            <textarea
              name={labelText}
              id=""
              cols={30}
              rows={4}
              placeholder={PlaceHolder}
              className={renderBorder()}
              onChange={TextareaChecker}
            ></textarea>
            {correct && (
              <Image
                src="/icons/correct.svg"
                alt="correct image"
                height={20}
                width={20}
                unoptimized
                className={styles.correctImage}
              />
            )}
          </div>
          {redText && <span className={styles.redTxt}>Invalid Data</span>}
        </>
      );
    } else if (Textarea === false && important) {
      return (
        <>
          <div className={styles.wrapper}>
            <label htmlFor="" className={styles.label}>
              {labelText} <span className={styles.redStar}>*</span>
            </label>
            <input
              type={inputType}
              placeholder={PlaceHolder}
              className={renderBorder()}
              required
              name={labelText}
              onChange={allInputChecker}
            />
            {correct && (
              <Image
                src="/icons/correct.svg"
                alt="correct image"
                height={20}
                width={20}
                unoptimized
                className={styles.correctImage}
              />
            )}
          </div>
          {redText && <span className={styles.redTxt}>Invalid Data</span>}
        </>
      );
    } else {
      return (
        <>
          <div className={styles.wrapper}>
            <label htmlFor="" className={styles.label}>
              {labelText}
            </label>
            <input
              type={inputType}
              placeholder={PlaceHolder}
              className={renderBorder()}
              name={labelText}
              onChange={allInputChecker}
            />
            {correct && (
              <Image
                src="/icons/correct.svg"
                alt="correct image"
                height={20}
                width={20}
                unoptimized
                className={styles.correctImage}
              />
            )}
          </div>
          {redText && <span className={styles.redTxt}>Invalid Data</span>}
        </>
      );
    }
  };
  return <>{rederFields()}</>;
};

export default Input;
