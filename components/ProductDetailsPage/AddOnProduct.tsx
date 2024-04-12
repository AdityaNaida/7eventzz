"use client";
//libraries
import { useState } from "react";
import Image from "next/image";
//style
import style from "@/components/ProductDetailsPage/AddOnProduct.module.css";

export default function AddOnProduct({
  img,
  productName,
  price,
}: {
  img: string;
  productName: string;
  price: number;
}) {
  const [itemCount, setItemCount] = useState<number>(0);
  const increment = () => {
    setItemCount(itemCount + 1);
  };
  const decrement = () => {
    if (itemCount === 0) {
      setItemCount(0);
    } else {
      setItemCount(itemCount - 1);
    }
  };

  const Adding = () => {
    setItemCount(1);
  };
  return (
    <>
      <div className={style.container}>
        <div className={style.imageContainer}>
          <Image
            src={img}
            alt={`${img} Image`}
            height={50}
            width={50}
            unoptimized
          />
        </div>
        <p className={style.name}>{productName}</p>
        <p className={style.price}>₹{price}</p>

        <div className={style.controller}>
          <div className={style.btns}>
            <button onClick={decrement} className={style.controllerBtn}>
              &#8722;
            </button>
            <span className={style.count}>{itemCount}</span>
            <button onClick={increment} className={style.controllerBtn}>
              &#43;
            </button>
          </div>
          <button
            className={`${style.addBtn} ${itemCount !== 0 ? style.added : ""}`}
            onClick={Adding}
          >
            {itemCount === 0 ? "ADD" : "✓ ADDED"}
          </button>
        </div>
      </div>
    </>
  );
}
