import React, { ReactNode } from "react";
import styles from "@/components/FAQ/FaqWrapper.module.css";
import Image from "next/image";

interface ChildrenProps {
  children: ReactNode;
}

const FaqWrapper: React.FC<ChildrenProps> = ({ children }) => {
  return (
    <>
      <div className={styles.faqContainer}>
        <h4>
          Frequently asked questions{" "}
          <Image
            src="/icons/faq-home.svg"
            alt="faq icon"
            height={20}
            width={20}
            unoptimized
          />
        </h4>
        <div className={styles.faq}>{children}</div>
      </div>
    </>
  );
};

export default FaqWrapper;
