//style
import style from "@/components/CategoryPage/SortBtn.module.css";
//props
interface Props {
  value: string;
  isActive: boolean;
}
const SortBtn: React.FC<Props> = ({ value, isActive }) => {
  return (
    <>
      {isActive ? (
        <button className={style.active}>{value}</button>
      ) : (
        <button className={style.btn}>{value}</button>
      )}
    </>
  );
};

export default SortBtn;
