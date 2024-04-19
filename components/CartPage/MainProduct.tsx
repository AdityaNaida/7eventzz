"use client";

//libraries
import { ChangeEvent, useState } from "react";
import Image from "next/image";

//styles
import styles from "@/components/CartPage/MainProduct.module.css";

//components
import Modal from "../Navbar/Modal";
import Instructions from "./Instructions";

const MainProduct: React.FC = () => {
  const [instruction, setInstruction] = useState<boolean>(false);
  const [innerText, setInnerText] = useState<string>("");
  const [modal, setModal] = useState<boolean>(false);
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
      <div className={styles.container}>
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
                <p className={styles.date}>
                  <Image
                    src="/icons/calendar-icon.svg"
                    alt="calendar icon"
                    height={20}
                    width={20}
                  />{" "}
                  <span>25 September 2024</span>
                </p>
                <p className={styles.date}>
                  <Image
                    src="/icons/clock-icon.svg"
                    alt="clock icon"
                    height={20}
                    width={20}
                  />{" "}
                  <span>06:00 PM - 08:00 PM</span>
                </p>
                <div className={styles.instructionsBox}>
                  <button onClick={modalHandler}>
                    <span className={styles.iconHolder}>
                      <Image
                        src={`${
                          modal
                            ? "/icons/grey-minus.svg"
                            : "/icons/grey-plus.svg"
                        }`}
                        alt="grey-plus icon"
                        height={25}
                        width={25}
                        unoptimized
                      />
                    </span>
                    Add Instructions{" "}
                    <Image
                      src="/icons/pencil-icon.svg"
                      alt="pencil icon"
                      height={20}
                      width={20}
                    />
                  </button>
                  {modal && (
                    <Modal offModal={modalHandler}>
                      <Instructions
                        offModal={modalHandler}
                        getValue={saveInputedValue}
                        save={clickSave}
                        cancle={clickCancle}
                        currentState={innerText}
                      />
                    </Modal>
                  )}
                  <div>
                    {instruction && (
                      <>
                        <div className={styles.textOutput}>{innerText}</div>
                      </>
                    )}
                  </div>
                </div>
                <div className={styles.priceHolder}>
                  <div>
                    <p className={styles.Additions}>₹1999</p>
                    <p className={styles.beforePrice}>₹2499</p>
                    <p className={styles.discount}>(20% OFF)</p>
                  </div>

                  <div className={styles.ammount}>
                    <p>Qty</p>
                    <select name="quantity" id="  quantity">
                      <option value="1" selected>
                        1
                      </option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="5">5</option>
                      <option value="6">6</option>
                      <option value="7">7</option>
                      <option value="8">8</option>
                      <option value="9">9</option>
                      <option value="10">10</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainProduct;
