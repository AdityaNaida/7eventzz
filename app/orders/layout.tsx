import { ReactNode } from "react";

import style from "@/app/orders/layout.module.css";

import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";

export default function layout({ children }: { children: ReactNode }) {
  return (
    <div className={style.root}>
      <Navbar />
      <main className={style.main}>{children}</main>
      <Footer />
    </div>
  );
}
