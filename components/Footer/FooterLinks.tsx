//libraries
import Link from "next/link";
//style
import style from "@/components/Footer/FooterLinks.module.css";
//props
interface Props {
  value: string;
  path: string;
}

const FooterLinks: React.FC<Props> = ({ value, path }) => {
  return (
    <>
      <div className={style.link}>
        <Link href={path}>{value}</Link>
      </div>
    </>
  );
};

export default FooterLinks;
