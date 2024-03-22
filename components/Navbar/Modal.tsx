//libraries
import { ReactNode } from "react";

//styles
import style from "@/components/Navbar/Modal.module.css";

//props
interface Props {
  children: ReactNode;
  offModal: () => void;
}

const Modal: React.FC<Props> = ({ children, offModal }) => {
  return (
    <>
      <div className={style.container}>
        <div className={style.backdrop} onClick={offModal} />
        {children}
      </div>
    </>
  );
};

export default Modal;
