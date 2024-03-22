//libraries
import Link from "next/link";

//styles
import style from "@/components/Navbar/DynamicLink.module.css";

//props
interface Props {
  path: string;
  text: string;
}

const DynamicLink: React.FC<Props> = ({ path, text }) => {
  return (
    <Link href={path} className={style.link}>
      {text}
    </Link>
  );
};

export default DynamicLink;
