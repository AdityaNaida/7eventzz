//style
import style from "@/components/CategoryPage/Sort.module.css";
//components
import SortBtn from "./SortBtn";
const Sort: React.FC = () => {
  return (
    <>
      <div className={style.container}>
        <span>Sort By:</span>

        <div className={style.slider}>
          <SortBtn isActive={true} value="Recommended" />
          <SortBtn isActive={false} value="New" />
          <SortBtn isActive={false} value="Price: High to Low" />
          <SortBtn isActive={false} value="Price: Low to High" />
        </div>
      </div>
    </>
  );
};

export default Sort;
