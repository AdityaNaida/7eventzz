import { ReactNode } from "react";

import style from "@/app/checkout/layout.module.css";

import React from "react";

import CustomHeader from "@/components/CartPage/Header/CustomHeader";

export default function layout({ children }: { children: ReactNode }) {
  return (
    <div className={style.root}>
      <CustomHeader pageName="Address" pageNumber={2} prevPath="/cart" />
      <main className={style.main}>{children}</main>
    </div>
  );
}
