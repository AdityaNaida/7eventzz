//libraries
import { ReactNode } from "react";

//styles
import styles from "@/components/CartPage/Modal.module.css";

interface ModalProp {
  children: ReactNode;
  closeModal: () => void;
}

const Modal: React.FC<ModalProp> = ({ children, closeModal }) => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.backdrop} onClick={closeModal} />
        <dialog open className={styles.dialouge}>
          {children}
        </dialog>
      </div>
    </>
  );
};

export default Modal;
