//libraries
import Image from "next/image";
//style
import style from "@/components/ProductDetailsPage/Product.module.css";
//components
import ImgSlider from "./ImgSlider";
import Details from "./Details";
import ProductDetailsCard from "./ProductDetailsCard";
import ProductController from "./ProductController";

const Product: React.FC = () => {
  const images = ["/pr1.webp", "/pr2.webp", "/pr3.webp"];
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
            <button className={style.chatBtn}>
              <Image
                src="/icons/whatsapp-icon.svg"
                alt="whatsapp icon"
                height={25}
                width={25}
              />
              Whatsapp
            </button>
            <button className={style.buyNowBtn}>
              <Image
                src="/icons/white-cart-icon.svg"
                alt="cart icon"
                height={25}
                width={25}
              />
              Book Now
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;
