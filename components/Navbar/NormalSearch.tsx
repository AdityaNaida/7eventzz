//style
import style from "@/components/Navbar/NormalSearch.module.css";

const NormalSearch: React.FC = () => {
  return (
    <>
      <input type="text" placeholder="Search..." className={style.search} />
    </>
  );
};

export default NormalSearch;
