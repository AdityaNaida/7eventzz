"use client";
//libraries
import { useState } from "react";
import Slider, { Settings } from "react-slick";
import Image from "next/image";
//style
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import style from "@/components/ProductDetailsPage/ReviewImages.module.css";
//components
import Modal from "../Navbar/Modal";
//props
interface Image {
  url: string;
  alt: string;
}
interface ImageListProps {
  images: Image[];
  applyFunction: boolean;
}
const ReviewImages: React.FC<ImageListProps> = ({ images, applyFunction }) => {
  const [currentImage, setCurrentImage] = useState<number>(0);
  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);
  const handleImageClick = (image: number) => {
    if (applyFunction) {
      setCurrentImage(image);
      setModalIsOpen(true);
    } else {
      null;
    }
  };
  const closePopup = () => {
    setModalIsOpen(!modalIsOpen);
  };
  const settings: Settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    afterChange: (index: number) => {
      setCurrentImage(index);
    },
  };
  return (
    <>
      <ul className={style.container}>
        {images.slice(0, 4).map((image, index) => (
          <li key={index} className={style.image}>
            <Image
              src={image.url}
              alt={image.alt || `Image ${index + 1}`}
              onClick={() => {
                handleImageClick(index);
              }}
              width={100}
              height={100}
              unoptimized
              priority
            />
          </li>
        ))}
        <button className={style.viewmoreBtn} onClick={closePopup}>
          +View More
        </button>
      </ul>

      {modalIsOpen && (
        <Modal offModal={closePopup}>
          <div className={style.nestedImages}>
            <div className={style.nestedImageHeading}>
              <p className={style.count}>
                {currentImage + 1} / {images.length}
              </p>

              <button className={style.closeModal} onClick={closePopup}>
                &#x2715;
              </button>
            </div>

            <Slider {...settings}>
              {images.map((elem) => (
                <Image
                  src={elem.url}
                  alt={elem.alt}
                  height={50}
                  width={50}
                  unoptimized
                  key={Math.random()}
                />
              ))}
            </Slider>
          </div>
        </Modal>
      )}
    </>
  );
};

export default ReviewImages;
