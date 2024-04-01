//style
import style from "@/components/CategoryPage/CategoryPage.module.css";
//components
import CategoryHeading from "../HomePage/CategoryHeading";
import CategoryList from "./CategoryList";
import Sort from "./Sort";
import QuickLinks from "./QuickLinks";
import CategoryProducts from "./CategoryProducts";
const CategoryPage: React.FC = () => {
  return (
    <>
      <div className={style.container}>
        <CategoryHeading
          heading="Everyday Occasions"
          text="Adding love & beauty to every occasion"
          isBorder={true}
        />
        <CategoryList />
        <Sort />
        <QuickLinks />
        <CategoryProducts />
      </div>
    </>
  );
};

export default CategoryPage;
