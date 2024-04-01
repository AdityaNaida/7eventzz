"use client";
//libraries
import Link from "next/link";
import Image from "next/image";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
//styles
import "./Pagination.css";
import style from "@/components/HomePage/HeroMobile.module.css";

const HeroMobile: React.FC = () => {
  const bannerImages = [
    {
      imageURL: "/bannerM1.webp",
      path: "/category",
      id: Math.random(),
    },
    {
      imageURL: "/bannerM2.webp",
      path: "/category",
      id: Math.random(),
    },
    {
      imageURL: "/bannerM3.webp",
      path: "/category",
      id: Math.random(),
    },
  ];
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <>
      <div className={style.container}>
        <Slider {...settings}>
          {bannerImages.map((elem) => (
            <>
              <Link href={elem.path} key={Math.random()}>
                <Image
                  src={elem.imageURL}
                  alt={elem.imageURL}
                  height={50}
                  width={50}
                  unoptimized
                />
              </Link>
            </>
          ))}
        </Slider>
      </div>
    </>
  );
};

export default HeroMobile;
