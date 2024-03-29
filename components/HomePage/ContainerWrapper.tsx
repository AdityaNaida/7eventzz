//libraries
import { ReactNode } from "react";

//style
import style from "@/components/HomePage/ContainerWrapper.module.css";

//props
interface Props {
  children: ReactNode;
}

const ContainerWrapper: React.FC<Props> = ({ children }) => {
  return <div className={style.container}>{children}</div>;
};

export default ContainerWrapper;
