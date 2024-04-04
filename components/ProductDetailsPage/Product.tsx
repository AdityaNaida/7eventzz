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
        </div>
      </div>
    </>
  );
};

export default Product;
