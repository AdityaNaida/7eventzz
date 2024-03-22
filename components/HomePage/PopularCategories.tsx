"use client";

//libraries
import { useState, useEffect } from "react";

//styles
import style from "@/components/HomePage/PopularCategories.module.css";

//components
import PcCard from "./PcCard";

const PopularCategories: React.FC = () => {
  const [category1, setCategory1] = useState<boolean>(true);
  const [category2, setCategory2] = useState<boolean>(true);
  const categoryAPI = [
    {
      image: "/pc1.webp",
      url: "/",
      text: "Welcome",
    },
    {
      image: "/pc2.webp",
      url: "/",
      text: "Room",
    },
    {
      image: "/pc3.webp",
      url: "/",
      text: "Birthday",
    },
    {
      image: "/pc4.webp",
      url: "/",
      text: "Kids",
    },
    {
      image: "/pc5.webp",
      url: "/",
      text: "Dinner",
    },
    {
      image: "/pc6.webp",
      url: "/",
      text: "Festival",
    },
    {
      image: "/pc7.webp",
      url: "/",
      text: "Wedding",
    },
    {
      image: "/pc8.webp",
      url: "/",
      text: "Balloons",
    },
    {
      image: "/pc9.webp",
      url: "/",
      text: "Canopy",
    },
    {
      image: "/pc10.webp",
      url: "/",
      text: "Anniversary",
    },
    {
      image: "/pc11.webp",
      url: "/",
      text: "Haldi",
    },
    {
      image: "/pc12.webp",
      url: "/",
      text: "Car",
    },
  ];

  useEffect(() => {
    const isMobile = () => {
      return window.innerWidth <= 768;
    };
    setCategory2(!isMobile());
    const handleResize = () => {
      setCategory2(!isMobile());
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  const leftCategory = () => {
    setCategory1(true);
    setCategory2(false);
  };
  const rightCategory = () => {
    setCategory1(false);
    setCategory2(true);
  };
  return (
    <>
      <div className={style.container}>
        <h2>Popular Categories</h2>
        <p>Stunning Range For Your Decoration</p>
        <div className={style.controller}>
          <button
            onClick={leftCategory}
            className={category1 ? style.active : style.nothing}
          >
            Top Category
          </button>
          <button
            onClick={rightCategory}
            className={category2 ? style.active : style.nothing}
          >
            Other Category
          </button>
        </div>

        <div className={style.slider}>
          {category1 &&
            categoryAPI
              .slice(0, 6)
              .map((elem) => (
                <PcCard
                  path={elem.url}
                  text={elem.text}
                  image={elem.image}
                  key={Math.random()}
                />
              ))}
          {category2 &&
            categoryAPI
              .slice(6, 12)
              .map((elem) => (
                <PcCard
                  path={elem.url}
                  text={elem.text}
                  image={elem.image}
                  key={Math.random()}
                />
              ))}
        </div>
      </div>
    </>
  );
};

export default PopularCategories;
