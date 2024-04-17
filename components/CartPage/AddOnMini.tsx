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

        <button
          className={add ? styles.added : styles.add}
          onClick={addHandler}
        >
          {add ? "✓" : "+"}{" "}
        </button>

        <span>{price}</span>
      </div>
    </>
  );
};

export default AddOnMini;
