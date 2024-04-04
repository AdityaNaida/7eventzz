"use client";
//libraries
import React from "react";
import Image from "next/image";
import Slider, { Settings } from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
//styles
import styles from "@/components/ProductDetailsPage/ImgSlider.module.css";
import "./ProductPagination.css";
//predefine props
interface SliderImgProps {
  images: string[];
}
const ImgSlider: React.FC<SliderImgProps> = ({ images }) => {
  const settings: Settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };
  return (
    <>
      <div className={styles.container_wrapper}>
        <div className={styles.container}>
          <div className={styles.mainImage}>
            <Slider {...settings}>
              {images.map((image, index) => (
                <div key={index}>
                  <Image
                    src={image}
                    alt={`Slide ${index + 1}`}
                    unoptimized
                    priority
                    height={50}
                    width={50}
                    key={`Slide ${index + 1}`}
                  />
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </>
  );
};

export default ImgSlider;
