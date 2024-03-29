//style
import style from "@/components/HomePage/Section3.module.css";
//components
import ContainerWrapper from "./ContainerWrapper";
import CategoryHeading from "./CategoryHeading";
import CategoryBackdrop from "./CategoryBackdrop";
const Section3: React.FC = () => {
  return (
    <>
      <ContainerWrapper>
        <CategoryHeading
          heading="Top Rated"
          text="Top rated decoration"
          isBorder={true}
        />
        <div className={style.container}>
          <div>
            <CategoryBackdrop image="/b1.webp" path="/" />
          </div>
          <div>
            <CategoryBackdrop image="/b2.webp" path="/" />

            <CategoryBackdrop image="/b3.webp" path="/" />
          </div>
        </div>
      </ContainerWrapper>
    </>
  );
};

export default Section3;
