"use client";

//libraries
import { useState } from "react";
import Image from "next/image";

//styles
import styles from "@/components/FAQ/Faq.module.css";

interface FaqContent {
  faq1: string;
  faq1a: string;
}
const Faq: React.FC<FaqContent> = ({ faq1, faq1a }) => {
  const [answer, setAnswer] = useState(false);
  const answerHandler = () => {
    setAnswer(!answer);
  };
  return (
    <>
      <p className={styles.questions} onClick={answerHandler}>
        Q:{""} {faq1}{" "}
        <Image
          src={answer ? "/icons/minus.svg" : "/icons/plus.svg"}
          alt="plus image"
          height={20}
          width={20}
          unoptimized
        />
      </p>
      {answer && <p className={styles.answers}>{faq1a}</p>}
    </>
  );
};

export default Faq;
