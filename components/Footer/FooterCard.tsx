//libraries
import { ReactNode } from "react";
//style
import style from "@/components/Footer/FooterCard.module.css";
//props
interface Props {
  children: ReactNode;
  heading: string;
  isLogo: boolean;
}
const FooterCard: React.FC<Props> = ({ children, heading, isLogo }) => {
  return (
    <>
      <div className={style.container}>
        {isLogo ? <h3>{heading}</h3> : <p>{heading}</p>}
        {children}
      </div>
    </>
  );
};

export default FooterCard;
