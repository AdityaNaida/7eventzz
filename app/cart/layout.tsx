import { ReactNode } from "react";

//style
import style from "@/app/cart/layout.module.css";

//components
import CustomHeader from "@/components/CartPage/Header/CustomHeader";

export default function layout({ children }: { children: ReactNode }) {
  return (
    <div className={style.root}>
      <CustomHeader
        pageName="Checkout"
        pageNumber={1}
        prevPath="/productdetails"
      />
      <main className={style.main}>{children}</main>
    </div>
  );
}
