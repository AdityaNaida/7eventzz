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
import style from "@/components/HomePage/Hero.module.css";

const Hero: React.FC = () => {
  const bannerImages = [
    {
      imageURL: "/banner1.webp",
      path: "/",
      id: Math.random(),
    },
    {
      imageURL: "/banner2.webp",
      path: "/",
      id: Math.random(),
    },
    {
      imageURL: "/banner3.webp",
      path: "/",
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
              <Link href={elem.path}>
                <Image
                  src={elem.imageURL}
                  alt={elem.imageURL}
                  height={50}
                  width={50}
                  priority
                  unoptimized
                  //   placeholder="blur"
                  //   blurDataURL=""
                />
              </Link>
            </>
          ))}
        </Slider>
      </div>
    </>
  );
};

export default Hero;
