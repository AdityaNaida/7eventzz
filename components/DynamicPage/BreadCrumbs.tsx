//libraries
import Link from "next/link";
//style
import style from "@/components/DynamicPage/BreadCrumbs.module.css";
//props
interface Props {
  main: string;
  subText: string;
}

const BreadCrumbs: React.FC<Props> = ({ main, subText }) => {
  return (
    <>
      <div className={style.container}>
        <Link href="/">Home</Link>
        <p>{main}</p>
        {subText && <p>{subText}</p>}
      </div>
    </>
  );
};

export default BreadCrumbs;
