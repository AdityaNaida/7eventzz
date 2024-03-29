//libraries
import Link from "next/link";
//style
import style from "@/components/HomePage/HeadingWithLink.module.css";
//props
interface Props {
  heading: string;
  viewAllPath: string;
}
const HeadingWithLink: React.FC<Props> = ({ heading, viewAllPath }) => {
  return (
    <>
      <div className={style.container}>
        <h2>{heading}</h2>
        <Link href={viewAllPath}>View All</Link>
      </div>
    </>
  );
};

export default HeadingWithLink;
