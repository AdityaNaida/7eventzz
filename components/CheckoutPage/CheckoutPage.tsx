import Steps from "../CartPage/Steps";
import CheckoutData from "./CheckoutData";
import CheckoutBill from "./CheckoutBill";
import CheckoutBillStatement from "./CheckoutBillStatement";

import style from "@/components/CheckoutPage/CheckoutPage.module.css";

export default function CheckoutPage() {
  return (
    <>
      <div className={style.container}>
        <div className={style.form}>
          <Steps isActive={true} />
          <CheckoutData />
        </div>
        <div className={style.bill}>
          <CheckoutBill />
          <CheckoutBillStatement />
        </div>
      </div>
    </>
  );
}
