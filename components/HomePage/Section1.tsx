//styles
import style from "@/components/HomePage/Section1.module.css";

//components
import CategoryImage from "./CategoryImage";
import CategoryHeading from "./CategoryHeading";

const Section1: React.FC = () => {
  return (
    <>
      <div className={style.containerWrapper}>
        <CategoryHeading
          heading="Best Sellers"
          text="Our best sellers decoration"
          isBorder={false}
        />
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
