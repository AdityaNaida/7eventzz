import { ReactNode } from "react";

import style from "@/components/CheckoutPage/SelectInput.module.css";

export default function SelectInput({
  children,
  name,
  id,
  label,
  labelFor,
}: {
  children: ReactNode;
  name: string;
  id: any;
  label: string;
  labelFor: string;
}) {
  return (
    <div className={style.container}>
      <label htmlFor={labelFor}>
        {label} <span>*</span>
      </label>
      <select name={name} id={id} className={style.inputFields}>
        {children}
      </select>
    </div>
  );
}
