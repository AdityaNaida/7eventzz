"use client";

//libraries
import { useState } from "react";
import Image from "next/image";

//styles
import styles from "@/components/CartPage/AddedProduct.module.css";

const AddedProduct: React.FC = () => {
  const [ammount, setAmmount] = useState<number>(1);
  const [addPrice, setAddPrice] = useState<number>(600);

  return (
    <>
      <div className={styles.container}>
        <div className={styles.product}>
          <Image
            src="/addon5.webp"
            alt="addon Image"
            height={50}
            width={50}
            unoptimized
            priority
          />
          <div className={styles.details}>
            <p>
              <span>Add On:</span>Two Hersheys Milk Chocolates Each 33 gm
            </p>
            <div className={styles.ammount}>
              <div>
                <button
                  onClick={() => {
                    ammount === 0 ? setAmmount(0) : setAmmount(ammount - 1);
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
              <div className={styles.price}>₹600 X 1 = {addPrice}</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddedProduct;
