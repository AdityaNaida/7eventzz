"use client";
//libraries
import { useRef, useState } from "react";
import Image from "next/image";
//style
import style from "@/components/CategoryPage/CategoryList.module.css";
//components
import CategoryCont1 from "./CategoryCont1";
const CategoryList: React.FC = () => {
  const categoryListArray = [
    {
      image: "/cs1.webp",
      text: "Birthday",
      path: "/",
    },
    {
      image: "/cs2.webp",
      text: "Anniversary",
      path: "/",
    },
    {
      image: "/cs3.webp",
      text: "Proposal",
      path: "/",
    },
    {
      image: "/cs4.webp",
      text: "Wedding",
      path: "/",
    },
    {
      image: "/cs5.webp",
      text: "Housewarming",
      path: "/",
    },
    {
      image: "/cs6.webp",
      text: "Baby Shower",
      path: "/",
    },
    {
      image: "/cs7.webp",
      text: "Farewell",
      path: "/",
    },
    {
      image: "/cs8.webp",
      text: "Graduation",
      path: "/",
    },
  ];
  const [chevronActive, setChevronActive] = useState<boolean>(true);
  const slider = useRef<HTMLDivElement>(null);
  const rightClickHandler = () => {
    if (slider.current) {
      slider.current.scrollLeft += slider.current.offsetWidth;
    }
    setChevronActive(false);
  };
  const leftClickHandler = () => {
    if (slider.current) {
      slider.current.scrollLeft -= slider.current.offsetWidth;
    }
    setChevronActive(true);
  };
  return (
    <>
      <div className={style.containerWrapper}>
        {chevronActive ? (
          <button className={style.arrowRight} onClick={rightClickHandler}>
            <Image
              src="/icons/arrow_forward.svg"
              alt="Arrow forward image"
              height={25}
              width={25}
            />
          </button>
        ) : (
          <button className={style.arrowLeft} onClick={leftClickHandler}>
            <Image
              src="/icons/arrow_back.svg"
              alt="Arrow Back image"
              height={25}
              width={25}
            />
          </button>
        )}
        <div className={style.container} ref={slider}>
          {categoryListArray.map((elem) => (
            <CategoryCont1
              text={elem.text}
              image={elem.image}
              path={elem.path}
              key={Math.random()}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default CategoryList;
