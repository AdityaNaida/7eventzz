//libraries
import { ReactNode } from "react";
//styles
import style from "@/components/ProductDetailsPage/BulletPoints.module.css";

export default function BulletPoints({ children }: { children: ReactNode }) {
  return (
    <>
      <li className={style.listText}>{children}</li>
    </>
  );
}
