"use client";

//libraries
import { ChangeEvent, useState } from "react";
import Image from "next/image";

//styles
import styles from "@/components/CartPage/MainProduct.module.css";

//components
import Modal from "./Modal";
import Instructions from "./Instructions";

const MainProduct: React.FC = () => {
  const [instruction, setInstruction] = useState<boolean>(false);
  const [innerText, setInnerText] = useState<string>("");
  const [modal, setModal] = useState<boolean>(false);
  const [ammount, setAmmount] = useState<number>(1);
  const modalHandler = () => {
    setModal(!modal);
  };

  const saveInputedValue = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setInnerText(event.target.value);
  };
  const clickSave = () => {
    setInstruction(true);
    setModal(!modal);
  };
  const clickCancle = () => {
    setInstruction(false);
    setModal(!modal);
    setInnerText("");
  };
  return (
    <>
      {modal && (
        <Modal closeModal={modalHandler}>
          <Instructions
            offModal={modalHandler}
            getValue={saveInputedValue}
            save={clickSave}
            cancle={clickCancle}
            currentState={innerText}
          />
        </Modal>
      )}

      <div className={styles.container}>
        <div className={styles.heading}>
          <p>Your Cart (1 Item)</p>
          <Image
            src="/icons/trash.svg"
            height={20}
            width={20}
            unoptimized
            alt="Trash Icons"
          />
        </div>
        <div className={styles.productContainer}>
          <Image
            src="/pr1.webp"
            alt="product Image"
            height={50}
            width={50}
            unoptimized
            priority
          />
          <div className={styles.ProductDetails}>
            <div className={styles.pHeading}>
              <h1>Surprise Room Decoration</h1>
            </div>
            <div className={styles.detailsHolder}>
              <div>
                <div className={styles.dateContainer}>
                  <p className={styles.date}>
                    Event Date: <span>25 September 2024</span>
                  </p>
                  <p className={styles.date}>
                    Time: <span>06:00 PM - 08:00 PM</span>
                  </p>
                  <p className={styles.Additions}>₹2400</p>
                </div>
                <div className={styles.ammount}>
                  <button
                    onClick={() => {
                      ammount === 1 ? setAmmount(1) : setAmmount(ammount - 1);
                    }}
                  >
                    -
                  </button>
                  <span>{ammount}</span>
                  <button
                    onClick={() => {
                      setAmmount(ammount + 1);
                    }}
                  >
                    +
                  </button>
                </div>
              </div>
            </div>

            <div className={styles.instructionsBox}>
              <button onClick={modalHandler}>
                Your Instructions{" "}
                <Image
                  src="/icons/edit-line.svg"
                  alt="edit icon"
                  height={25}
                  width={25}
                  unoptimized
                />
              </button>
              <div>
                {instruction && (
                  <>
                    <span>{innerText}</span>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainProduct;
