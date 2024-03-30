//libraries
import Link from "next/link";
//style
import style from "@/components/Footer/SubFooterLink.module.css";
//props
interface Props {
  path: string;
  value: string;
}
const SubFooterLink: React.FC<Props> = ({ path, value }) => {
  return (
    <>
      <Link href={path} className={style.link}>
        {value}
      </Link>
    </>
  );
};

export default SubFooterLink;
