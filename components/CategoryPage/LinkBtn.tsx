//libraries
import Link from "next/link";
//style
import style from "@/components/CategoryPage/LinkBtn.module.css";
//props
interface Props {
  path: string;
  value: string;
}

const LinkBtn: React.FC<Props> = ({ path, value }) => {
  return (
    <>
      <Link href={path} className={style.link}>
        {value}
      </Link>
    </>
  );
};

export default LinkBtn;
