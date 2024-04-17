//libraries
import Image from "next/image";

//styles
import styles from "@/components/CartPage/Instructions.module.css";
import { ChangeEvent, ChangeEventHandler } from "react";

//define props
interface InstrcutionProps {
  offModal: () => void;
  getValue: (event: ChangeEvent<HTMLTextAreaElement>) => void;
  save: () => void;
  cancle: () => void;
  currentState: string;
}

const Instructions: React.FC<InstrcutionProps> = ({
  offModal,
  getValue,
  save,
  currentState,
  cancle,
}) => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.headings}>
          <div className={styles.nestedHeading}>
            <span className={styles.imageHolder}>
              <Image
                src="/icons/grey-info.svg"
                alt="info icon"
                height={25}
                width={25}
                unoptimized
              />
            </span>
            <div>
              <p>Instructions</p>
              <span>Write all the instructions down below</span>
            </div>
          </div>
          <Image
            src="/icons/close.svg"
            alt="close svg"
            height={25}
            width={25}
            unoptimized
            onClick={offModal}
          />
        </div>
        <form action="" method="post">
          <textarea
            name=""
            id=""
            cols={30}
            rows={5}
            onChange={getValue}
            placeholder="
                      Type Instructions..."
          >
            {currentState}
          </textarea>
        </form>
        <div className={styles.controllers}>
          <button onClick={cancle}>Cancle</button>
          <button onClick={save}>Save</button>
        </div>
      </div>
    </>
  );
};

export default Instructions;
