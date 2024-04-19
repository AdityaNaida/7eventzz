import Image from "next/image";

import style from "@/components/CartPage/AddOnHeading.module.css";

export default function AddOnHeading() {
  return (
    <>
      <div className={style.container}>
        <p className={style.txt}>
          Add-Ons <span className={style.count}>0</span>
        </p>
        <button className={style.btn}>
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
    </>
  );
}
