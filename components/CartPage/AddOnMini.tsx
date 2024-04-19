"use client";

//libraries
import { useState } from "react";
import Image from "next/image";

//styles
import styles from "@/components/CartPage/AddOnMini.module.css";

//define props
interface AddonProps {
  img: string;
  name: string;
  price: string;
}

const AddOnMini: React.FC<AddonProps> = ({ img, name, price }) => {
  const [add, setAdd] = useState(false);
  const addHandler = () => {
    setAdd(!add);
  };
  return (
    <>
      <div className={styles.container}>
        <Image
          alt="add on image"
          height={50}
          width={50}
          unoptimized
          priority
          src={img}
        />
        <p>{name}</p>

        <div className={styles.priceHolder}>
          <span className={styles.price}>{price}</span>
          {add ? (
            <button className={styles.added} onClick={addHandler}>
              ✓
            </button>
          ) : (
            <Image
              src="/icons/add_plus.webp"
              alt="plus icon"
              height={25}
              width={25}
              unoptimized
              className={styles.plusImage}
              onClick={addHandler}
            />
          )}
        </div>
      </div>
    </>
  );
};

export default AddOnMini;
