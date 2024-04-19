"use client";
import { useState } from "react";
import Image from "next/image";

import style from "@/components/CartPage/AddOnHeading.module.css";

import AddOnContainer from "../ProductDetailsPage/AddOnContainer";
import Modal from "../Navbar/Modal";

export default function AddOnHeading() {
  const [addOns, setAddOns] = useState<boolean>(false);

  const addOnsHadler = () => {
    setAddOns(!addOns);
  };
  return (
    <>
      <div className={style.container}>
        <p className={style.txt}>
          Add-Ons <span className={style.count}>1</span>
        </p>
        <button className={style.btn} onClick={addOnsHadler}>
          Add more item{" "}
          <span className={style.btnIcon}>
            {" "}
            <Image
              src="/icons/grey-plus.svg"
              alt="calendar icon"
              height={20}
              width={20}
            />
          </span>
        </button>
      </div>

      {addOns && (
        <Modal offModal={addOnsHadler}>
          <AddOnContainer closeFnc={addOnsHadler} isDetails={false} />
        </Modal>
      )}
    </>
  );
}
