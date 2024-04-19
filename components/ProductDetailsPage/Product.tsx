"use client";
//libraries
import { useState, useRef } from "react";
import Image from "next/image";
//style
import style from "@/components/ProductDetailsPage/Product.module.css";
//components
import ImgSlider from "./ImgSlider";
import Details from "./Details";
import ProductDetailsCard from "./ProductDetailsCard";
import ProductController from "./ProductController";
import ProductOffers from "./ProductOffers";
import Modal from "../Navbar/Modal";
import AddOnContainer from "./AddOnContainer";
import InclusionDetails from "./InclusionDetails";
import BulletPoints from "./BulletPoints";
import Faq from "../FAQ/Faq";
import ReviewSection from "./ReviewSection";
import SimilarContainer from "./SimilarContainer";
import ProductCarousel from "../HomePage/ProductCarousel";

const Product: React.FC = () => {
  const images = ["/pr1.webp", "/pr2.webp", "/pr3.webp"];
  const [addOns, setAddOns] = useState<boolean>(false);
  const [inclusion, setInclusion] = useState<boolean>(true);
  const [fcd, setFcd] = useState<number | null>(1);

  const inclusionArea = useRef<HTMLDivElement>(null);

  const addOnHandler = () => {
    setAddOns(!addOns);
  };
  const inclucionHandler = () => {
    setInclusion(true);
  };
  const exclusionHandler = () => {
    setInclusion(false);
  };

  const fcdHandler = (num: number) => {
    setFcd(num === fcd ? num : num);
  };

  const inclusionFollower = () => {
    window.scrollTo({
      top: inclusionArea.current?.offsetTop || 0,
      behavior: "smooth",
    });
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
      <div className={style.container}>
        <div className={style.productImages}>
          <ImgSlider images={images} />
        </div>
        <div className={style.details}>
          <ProductDetailsCard>
            <Details />
          </ProductDetailsCard>
          <ProductDetailsCard>
            <ProductController />
          </ProductDetailsCard>
          <div className={style.actionsContainer}>
            <div className={style.extraText}>
              <p className={style.price}>
                <span className={style.beforePrice}>₹2499</span> ₹1999
              </p>
              <span className={style.inclusionTxt} onClick={inclusionFollower}>
                View Package Inclusion<span>*</span>
              </span>
            </div>
            <button className={style.chatBtn}>
              <Image
                src="/icons/whatsapp-icon.svg"
                alt="whatsapp icon"
                height={25}
                width={25}
              />
              <span> Whatsapp</span>
            </button>

            <button className={style.buyNowBtn} onClick={addOnHandler}>
              <Image
                src="/icons/white-cart-icon.svg"
                alt="cart icon"
                height={25}
                width={25}
              />
              Book Now
            </button>
          </div>
          <ProductDetailsCard>
            <ProductOffers
              heading="Get it for ₹700"
              subText="10% off on first time booking"
              codeText="eventzz"
              offersText="+ 2 More Offers"
            />
          </ProductDetailsCard>
          <ProductDetailsCard>
            <div className={style.inclusionExclusion} ref={inclusionArea}>
              <button
                className={`${style.btn} ${inclusion ? style.active : ""}`}
                onClick={inclucionHandler}
              >
                Inclusion
                <Image
                  src="/icons/included.webp"
                  alt="included icon"
                  height={20}
                  width={20}
                  unoptimized
                  className={style.imageIcon}
                />
              </button>
              <button
                className={`${style.btn} ${inclusion ? "" : style.active}`}
                onClick={exclusionHandler}
              >
                Exclusion
                <Image
                  src="/icons/excluded.webp"
                  alt="excluded icon"
                  height={20}
                  width={20}
                  unoptimized
                  className={style.imageIcon}
                />
              </button>
            </div>
            {inclusion ? (
              <InclusionDetails icon="" heading="">
                <BulletPoints>
                  Round stand with happy birthday neon light
                </BulletPoints>
                <BulletPoints>
                  Round stand decorated with 200 balloons{" "}
                </BulletPoints>
                <BulletPoints>5 mini star foil balloon</BulletPoints>
                <BulletPoints>
                  2 star foil on balloon pillar contain 20 balloons each
                </BulletPoints>
                <BulletPoints>20 balloons on floor</BulletPoints>
                <BulletPoints>
                  name foil letter balloon (upto 7 letters)
                </BulletPoints>
              </InclusionDetails>
            ) : (
              <InclusionDetails icon="" heading="">
                <BulletPoints>Ring Light</BulletPoints>
                <BulletPoints>Table</BulletPoints>
                <BulletPoints>Chair</BulletPoints>
              </InclusionDetails>
            )}
          </ProductDetailsCard>
          <ProductDetailsCard>
            <div className={style.controls}>
              <button
                className={`${style.btn} ${fcd === 1 && style.active}`}
                onClick={() => fcdHandler(1)}
              >
                faq
              </button>
              <button
                className={`${style.btn} ${fcd === 2 && style.active}`}
                onClick={() => fcdHandler(2)}
              >
                calcellation policy
              </button>
              <button
                className={`${style.btn} ${fcd === 3 && style.active}`}
                onClick={() => fcdHandler(3)}
              >
                delivery info
              </button>
            </div>

            {fcd === 1 && (
              <>
                <Faq
                  faq1="Are you an online Event Planning company?"
                  faq1a="Yes, 7Eventzz is an online Budget Event Planning Platform available in 200+ cities across India. Providing Professional Balloon Decoration, Party Planning, Candle light Dinner, Surprise Planning, Gifts and other events at a reasonable price. More than 5000+ Families Trust us every month."
                />
                <Faq
                  faq1="What type of Balloons do you guys use?"
                  faq1a="We use best quality of Balloons i.e. Metallic, Pastel and Chrome Balloons. This doesn’t harm and damaged walls as we use it with paper tapes. And we don’t use or provide Helium Balloons."
                />
                <Faq
                  faq1="How can I place orders?"
                  faq1a="You can place order from our website or you can connect with us on our Whatsapp number 7450960060 if you have any query or you want to customize your decoration."
                />
              </>
            )}
            {fcd === 2 && (
              <InclusionDetails icon="" heading="">
                <BulletPoints>
                  If cancellations are made 1 day or more days before the start
                  date of the booking, you will not be charged and the booking
                  payment will be refunded within 2 days.
                </BulletPoints>
                <BulletPoints>
                  If cancellations are made on same day of the start date of the
                  booking, 100% of the advance payment will be charged as
                  cancellation fees.
                </BulletPoints>
                <BulletPoints>
                  In case of unforeseen weather conditions or government
                  restrictions, certain activities may be cancelled and in such
                  case we will refund the advance money.
                </BulletPoints>
              </InclusionDetails>
            )}
            {fcd === 3 && (
              <InclusionDetails icon="" heading="">
                <BulletPoints>
                  The image displayed is indicative in nature.
                </BulletPoints>
                <BulletPoints>
                  Actual product may vary in shape, colour or design as per the
                  availability.
                </BulletPoints>
                <BulletPoints>
                  Our balloon expert will come to your home at your chosen slot,
                  and set up the balloons as shown in the images.
                </BulletPoints>
                <BulletPoints>
                  You&apos;ll need to provide a stool to reach the ceiling.
                </BulletPoints>
                <BulletPoints>
                  We can decorate a hotel room if you gain permission from the
                  hotel.
                </BulletPoints>
                <BulletPoints>
                  All the items used in the decoration are on rental basis and
                  will be taken back on the next day of the event.
                </BulletPoints>
                <BulletPoints>
                  If case of a complaint, notice must be given within 2 hours of
                  the delivery time of the experience No rescheduling or
                  cancellation is possible after the decoration has been
                  attempted.
                </BulletPoints>
              </InclusionDetails>
            )}
          </ProductDetailsCard>
          <ProductDetailsCard>
            <ReviewSection />
          </ProductDetailsCard>
        </div>
      </div>
      <SimilarContainer heading="Similar Products" headingIcon="">
        {API.map((elem) => (
          <ProductCarousel
            name={elem.name}
            price={elem.price}
            beforePrice={elem.beforeprice}
            discount={elem.beforeprice}
            image={elem.img}
            rating={elem.rating}
            reviews={elem.reviews}
            path={elem.path}
            key={Math.random()}
          />
        ))}
      </SimilarContainer>
      <SimilarContainer heading="You May Also Like" headingIcon="">
        {API.reverse().map((elem) => (
          <ProductCarousel
            name={elem.name}
            price={elem.price}
            beforePrice={elem.beforeprice}
            discount={elem.beforeprice}
            image={elem.img}
            rating={elem.rating}
            reviews={elem.reviews}
            path={elem.path}
            key={Math.random()}
          />
        ))}
      </SimilarContainer>
      {addOns && (
        <Modal offModal={addOnHandler}>
          <AddOnContainer closeFnc={addOnHandler} isDetails={true} />
        </Modal>
      )}
    </>
  );
};

export default Product;
