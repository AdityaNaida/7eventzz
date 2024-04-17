"use client";
//libraries
import { useRef } from "react";
import Image from "next/image";

//styles
import styles from "@/components/CartPage/SimilarWrapper.module.css";

//components
import FilterButton from "./FilterButton";
import AddOnMini from "./AddOnMini";

const SimilarWrapper: React.FC = () => {
  const slider = useRef<HTMLDivElement>(null);

  const rightClick = () => {
    if (slider.current) {
      slider.current.scrollLeft += slider.current.offsetWidth;
    }
  };
  const leftClick = () => {
    if (slider.current) {
      slider.current.scrollLeft -= slider.current.offsetWidth;
    }
  };
  return (
    <>
      <div className={styles.container}>
        <p>Frequently Added Together</p>
        <div className={styles.filters}>
          <FilterButton value="All" />
          <FilterButton value="Flowers" />
          <FilterButton value="Cakes" />
          <FilterButton value="Balloons" />
        </div>
        <div className={styles.sliderWrapper}>
          <Image
            src="/icons/chevron-left.svg"
            alt="chevron left"
            height={20}
            width={20}
            unoptimized
            onClick={leftClick}
          />
          <div className={styles.slider} ref={slider}>
            <AddOnMini
              img="/cake1.webp"
              name="Chocolate Truffle Indulgence Cake"
              price="₹1000"
            />
            <AddOnMini
              img="/cake2.webp"
              name="Chocolate Truffle Indulgence Cake"
              price="₹1000"
            />
            <AddOnMini
              img="/cake3.webp"
              name="Chocolate Truffle Indulgence Cake"
              price="₹1000"
            />
            <AddOnMini
              img="/cake4.webp"
              name="Chocolate Truffle Indulgence Cake"
              price="₹1000"
            />
            <AddOnMini
              img="/cake5.webp"
              name="Chocolate Truffle Indulgence Cake"
              price="₹1000"
            />
            <AddOnMini
              img="/cake6.webp"
              name="Chocolate Truffle Indulgence Cake"
              price="₹1000"
            />
            <AddOnMini
              img="/cake1.webp"
              name="Chocolate Truffle Indulgence Cake"
              price="₹1000"
            />
            <AddOnMini
              img="/cake2.webp"
              name="Chocolate Truffle Indulgence Cake"
              price="₹1000"
            />
            <AddOnMini
              img="/cake3.webp"
              name="Chocolate Truffle Indulgence Cake"
              price="₹1000"
            />
            <AddOnMini
              img="/cake4.webp"
              name="Chocolate Truffle Indulgence Cake"
              price="₹1000"
            />
            <AddOnMini
              img="/cake5.webp"
              name="Chocolate Truffle Indulgence Cake"
              price="₹1000"
            />
            <AddOnMini
              img="/cake6.webp"
              name="Chocolate Truffle Indulgence Cake"
              price="₹1000"
            />
          </div>
          <Image
            src="/icons/chevron-right.svg"
            alt="chevron right"
            height={20}
            width={20}
            unoptimized
            onClick={rightClick}
          />
        </div>
      </div>
    </>
  );
};

export default SimilarWrapper;
