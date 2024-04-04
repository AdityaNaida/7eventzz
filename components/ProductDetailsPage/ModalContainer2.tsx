//libraries
import { ReactNode } from "react";
import Image from "next/image";
//styles
import style from "@/components/ProductDetailsPage/ModalContainer2.module.css";
//components
import Modal from "../Navbar/Modal";
//Props
interface Props {
  children: ReactNode;
  closeFunction: () => void;
  heading: string;
  subText: string;
  headingIcon: string;
}
const ModalContainer2: React.FC<Props> = ({
  children,
  closeFunction,
  heading,
  subText,
  headingIcon,
}) => {
  return (
    <>
      <Modal offModal={closeFunction}>
        <div className={style.occasionmodal}>
          <div className={style.occasionHead}>
            <button onClick={closeFunction}> &#x2715;</button>
          </div>
          <div className={style.occasionContent}>
            <div className={style.occasionHeading}>
              <p>
                {heading}
                {headingIcon === "" ? null : (
                  <Image
                    src={headingIcon}
                    alt={headingIcon + "Icon"}
                    height={25}
                    width={25}
                  />
                )}
              </p>
              <span>{subText}</span>
            </div>
            <div className={style.occasionType}>{children}</div>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default ModalContainer2;
