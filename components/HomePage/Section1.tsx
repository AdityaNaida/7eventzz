//styles
import style from "@/components/HomePage/Section1.module.css";

//components
import CategoryImage from "./CategoryImage";

const Section1: React.FC = () => {
  return (
    <>
      <div className={style.containerWrapper}>
        <h2>Best Sellers</h2>
        <p>Our best sellers decoration</p>
        <div className={style.container}>
          <CategoryImage path="/" image="/c1.webp" />
          <CategoryImage path="/" image="/c2.webp" />
          <CategoryImage path="/" image="/c3.webp" />
        </div>
      </div>
    </>
  );
};

export default Section1;
