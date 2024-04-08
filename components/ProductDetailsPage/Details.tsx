"use client";
//libraries
import { useState } from "react";
//styles
import style from "@/components/ProductDetailsPage/Details.module.css";
//components
import ProductHeading from "./ProductHeading";
import ProductPrice from "./ProductPrice";
import SelectCity from "./SelectOptions";
import Modal from "../Navbar/Modal";
import Location from "../Navbar/Location";
import ExtraSpecial from "./ExtraSpecial";

const Details: React.FC = () => {
  const [city, setCity] = useState<boolean>(false);
  const reviewFnc = () => {
    console.log(`Hello world`);
  };
  const cityHandler = () => {
    setCity(!city);
  };
  return (
    <>
      <div className={style.container}>
        <ProductHeading heading="Chocolate Truffle Cake" />
        <ProductPrice price="₹770" previousPrice="₹1000" discount="33% OFF" />

        <p className={style.text}>Pick an Upgrade</p>
        <div className={style.nestedContainer}>
          <ExtraSpecial
            productName="Basic"
            productPrice={770}
            img="/extra.webp"
            path="/category"
            isActive={true}
          />

          <ExtraSpecial
            productName="With Flowers"
            productPrice={1250}
            img="/extra.webp"
            path="/category"
            isActive={false}
          />
        </div>
      </div>
    </>
  );
};

export default Details;
