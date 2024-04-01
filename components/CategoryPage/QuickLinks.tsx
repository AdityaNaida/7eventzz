//style
import style from "@/components/CategoryPage/QuickLinks.module.css";
//components
import LinkBtn from "./LinkBtn";
const QuickLinks: React.FC = () => {
  return (
    <>
      <div className={style.slider}>
        <LinkBtn path="/" value="Birthday" />
        <LinkBtn path="/" value="Anniversary" />
        <LinkBtn path="/" value="Welcome Baby" />
        <LinkBtn path="/" value="Haldi" />
        <LinkBtn path="/" value="Cabana" />
      </div>
    </>
  );
};

export default QuickLinks;
