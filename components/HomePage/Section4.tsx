"use client";
//libraries
import { useState } from "react";
//styles
import style from "@/components/HomePage/Section4.module.css";

//components
import ContainerWrapper from "./ContainerWrapper";
import CategoryHeading from "./CategoryHeading";
import ProductCarousel from "./ProductCarousel";

const Section4: React.FC = () => {
  const [activeDecorations, setActiveDecorations] = useState<boolean>(true);
  const API = [
    {
      img: "/p1.webp",
      name: "Sumptuous Chocolate Truffle Cake",
      price: "600",
      beforeprice: "800",
      discount: "(25% off)",
      reviews: 11,
      rating: "4.8",
      path: "/",
    },
    {
      img: "/p2.webp",
      name: "Love You Chocolate Truffle Cake",
      price: "600",
      beforeprice: "800",
      discount: "(25% off)",
      reviews: 111,
      rating: "4.6",
      path: "/",
    },
    {
      img: "/p3.webp",
      name: "Choco Truffle Heart Cake ",
      price: "800",
      beforeprice: "1000",
      discount: "(20% off)",
      reviews: 51,
      rating: "4.9",
      path: "/",
    },
    {
      img: "/p4.webp",
      name: "Dense Chocolate Delight Cake",
      price: "750",
      beforeprice: "1000",
      discount: "(25% off)",
      reviews: 32,
      rating: "4.7",
      path: "/",
    },
    {
      img: "/f1.webp",
      name: "10 Red Roses Bouquet",
      price: "600",
      beforeprice: "800",
      discount: "(25% off)",
      reviews: 11,
      rating: "4.8",
      path: "/",
    },
    {
      img: "/f2.webp",
      name: "Paradise Mixed Roses Bouquet",
      price: "600",
      beforeprice: "800",
      discount: "(25% off)",
      reviews: 111,
      rating: "4.6",
      path: "/",
    },
    {
      img: "/f3.webp",
      name: "Eternity White Roses Bouquet",
      price: "800",
      beforeprice: "1000",
      discount: "(20% off)",
      reviews: 51,
      rating: "4.9",
      path: "/",
    },
    {
      img: "/f4.webp",
      name: "Crimson Floral Embrace",
      price: "750",
      beforeprice: "1000",
      discount: "(25% off)",
      reviews: 32,
      rating: "4.7",
      path: "/",
    },
  ];
  const activate = () => {
    setActiveDecorations(true);
  };
  const deactivate = () => {
    setActiveDecorations(false);
  };
  return (
    <>
      <ContainerWrapper>
        <CategoryHeading
          isBorder={false}
          heading="Best Seller Decorations"
          text=""
        />
        <div className={style.controller}>
          <button
            className={activeDecorations ? style.active : style.nothing}
            onClick={activate}
          >
            Cakes
          </button>
          <button
            className={activeDecorations ? style.nothing : style.active}
            onClick={deactivate}
          >
            Flowers
          </button>
        </div>
        <div className={style.container}>
          {activeDecorations ? (
            <>
              {API.slice(0, 4).map((elem) => (
                <ProductCarousel
                  name={elem.name}
                  image={elem.img}
                  discount={elem.discount}
                  beforePrice={elem.beforeprice}
                  price={elem.price}
                  path={elem.path}
                  rating={elem.rating}
                  reviews={elem.reviews}
                  key={Math.random()}
                />
              ))}
            </>
          ) : (
            <>
              {API.slice(4, 8).map((elem) => (
                <ProductCarousel
                  name={elem.name}
                  image={elem.img}
                  discount={elem.discount}
                  beforePrice={elem.beforeprice}
                  price={elem.price}
                  path={elem.path}
                  rating={elem.rating}
                  reviews={elem.reviews}
                  key={Math.random()}
                />
              ))}
            </>
          )}
        </div>
      </ContainerWrapper>
    </>
  );
};

export default Section4;
