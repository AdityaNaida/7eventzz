"use client";
//libraries
import React, { useState } from "react";
import Image from "next/image";
import Slider, { Settings } from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
//styles
import styles from "@/components/ProductDetailsPage/ImgSlider.module.css";
import "./ProductPagination.css";
//components
import Modal from "../Navbar/Modal";
import ProductCarousel from "../HomePage/ProductCarousel";
//predefine props
interface SliderImgProps {
  images: string[];
}
const ImgSlider: React.FC<SliderImgProps> = ({ images }) => {
  const [similarPackages, setSimilarPackages] = useState<boolean>(true);
  const settings: Settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };
  const similarPackagesHandler = () => {
    setSimilarPackages(!similarPackages);
  };

  const API = [
    {
      img: "/p1.webp",
      name: "Sumptuous Chocolate Truffle Cake",
      price: "600",
      beforeprice: "800",
      discount: "(25% off)",
      reviews: 11,
      rating: "4.8",
      path: "/productdetails",
    },
    {
      img: "/p2.webp",
      name: "Love You Chocolate Truffle Cake",
      price: "600",
      beforeprice: "800",
      discount: "(25% off)",
      reviews: 111,
      rating: "4.6",
      path: "/productdetails",
    },
    {
      img: "/p3.webp",
      name: "Choco Truffle Heart Cake ",
      price: "800",
      beforeprice: "1000",
      discount: "(20% off)",
      reviews: 51,
      rating: "4.9",
      path: "/productdetails",
    },
    {
      img: "/p4.webp",
      name: "Dense Chocolate Delight Cake",
      price: "750",
      beforeprice: "1000",
      discount: "(25% off)",
      reviews: 32,
      rating: "4.7",
      path: "/productdetails",
    },
    {
      img: "/f1.webp",
      name: "10 Red Roses Bouquet",
      price: "600",
      beforeprice: "800",
      discount: "(25% off)",
      reviews: 11,
      rating: "4.8",
      path: "/productdetails",
    },
    {
      img: "/f2.webp",
      name: "Paradise Mixed Roses Bouquet",
      price: "600",
      beforeprice: "800",
      discount: "(25% off)",
      reviews: 111,
      rating: "4.6",
      path: "/productdetails",
    },
    {
      img: "/f3.webp",
      name: "Eternity White Roses Bouquet",
      price: "800",
      beforeprice: "1000",
      discount: "(20% off)",
      reviews: 51,
      rating: "4.9",
      path: "/productdetails",
    },
    {
      img: "/f4.webp",
      name: "Crimson Floral Embrace",
      price: "750",
      beforeprice: "1000",
      discount: "(25% off)",
      reviews: 32,
      rating: "4.7",
      path: "/productdetails",
    },
    {
      img: "/g1.webp",
      name: "Sumptuous Chocolate Truffle Cake",
      price: "600",
      beforeprice: "800",
      discount: "(25% off)",
      reviews: 11,
      rating: "4.8",
      path: "/productdetails",
    },
    {
      img: "/g2.webp",
      name: "Love You Chocolate Truffle Cake",
      price: "600",
      beforeprice: "800",
      discount: "(25% off)",
      reviews: 111,
      rating: "4.6",
      path: "/productdetails",
    },
    {
      img: "/g3.webp",
      name: "Choco Truffle Heart Cake ",
      price: "800",
      beforeprice: "1000",
      discount: "(20% off)",
      reviews: 51,
      rating: "4.9",
      path: "/productdetails",
    },
    {
      img: "/g4.webp",
      name: "Dense Chocolate Delight Cake",
      price: "750",
      beforeprice: "1000",
      discount: "(25% off)",
      reviews: 32,
      rating: "4.7",
      path: "/productdetails",
    },
    {
      img: "/f1.webp",
      name: "10 Red Roses Bouquet",
      price: "600",
      beforeprice: "800",
      discount: "(25% off)",
      reviews: 11,
      rating: "4.8",
      path: "/productdetails",
    },
    {
      img: "/f2.webp",
      name: "Paradise Mixed Roses Bouquet",
      price: "600",
      beforeprice: "800",
      discount: "(25% off)",
      reviews: 111,
      rating: "4.6",
      path: "/productdetails",
    },
    {
      img: "/f3.webp",
      name: "Eternity White Roses Bouquet",
      price: "800",
      beforeprice: "1000",
      discount: "(20% off)",
      reviews: 51,
      rating: "4.9",
      path: "/productdetails",
    },
    {
      img: "/f4.webp",
      name: "Crimson Floral Embrace",
      price: "750",
      beforeprice: "1000",
      discount: "(25% off)",
      reviews: 32,
      rating: "4.7",
      path: "/productdetails",
    },
  ];
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
          <button
            className={styles.viewsimilarBtn}
            onClick={similarPackagesHandler}
          >
            View Similar{" "}
            <Image
              src="/icons/ai_suggest.svg"
              alt="ai image"
              height={15}
              width={15}
            />
          </button>
        </div>
      </div>
      {similarPackages && (
        <Modal offModal={similarPackagesHandler}>
          <div className={styles.sidebar}>
            <span className={styles.closeBtn} onClick={similarPackagesHandler}>
              &#x2715;
            </span>
            <div className={styles.sidebarHeading}>
              <h2 className={styles.similarHeading}>
                <Image
                  src="/icons/ai_suggest.svg"
                  alt="ai image"
                  height={20}
                  width={20}
                />
                Similar To
              </h2>
              <p className={styles.similarTxt}>
                Similar to your selected Products
              </p>
            </div>
            <div className={styles.similarProducts}>
              {API.map((elem) => (
                <ProductCarousel
                  name={elem.name}
                  price={elem.price}
                  beforePrice={elem.beforeprice}
                  discount={elem.discount}
                  reviews={elem.reviews}
                  rating={elem.rating}
                  path={elem.path}
                  key={Math.random()}
                  image={elem.img}
                />
              ))}
            </div>
          </div>
        </Modal>
      )}
    </>
  );
};

export default ImgSlider;
