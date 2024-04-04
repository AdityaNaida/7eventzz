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
        <ProductHeading
          heading="Chocolate Truffle Cake"
          rating="4.8"
          reviews={535}
        />
        <ProductPrice price="₹770" previousPrice="₹1000" discount="(33% OFF)" />
      </div>
    </>
  );
};

export default Details;
