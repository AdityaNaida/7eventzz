import { ReactNode } from "react";

//style
import style from "@/app/cart/layout.module.css";

//components
import CustomHeader from "@/components/CartPage/Header/CustomHeader";
import Footer from "@/components/Footer/Footer";

export default function layout({ children }: { children: ReactNode }) {
  return (
    <div className={style.root}>
      <CustomHeader />
      <main className={style.main}>{children}</main>
      <Footer />
    </div>
  );
}
