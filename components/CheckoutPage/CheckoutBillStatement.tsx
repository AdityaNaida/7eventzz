import style from "@/components/CheckoutPage/CheckoutBillStatement.module.css";

export default function CheckoutBillStatement() {
  return (
    <>
      <div className={style.container}>
        <h2>Price Details</h2>
        <p>
          <span>Base Total</span> <b>₹ 1800</b>
        </p>
        <p>
          <span>Add On Total</span> <b>₹ 600</b>
        </p>
        <p>
          <span>
            Delivery <samp className={style.deliveryTime}>Evening</samp>
          </span>{" "}
          <b>₹ 600</b>
        </p>
        <p>
          <span>Total Amount</span> <b>₹ 3000</b>
        </p>
        <p>
          <span>Coupen Discount</span> <b>-</b>
        </p>
        <p>
          <b>Amount To Pay</b> <b>₹ 3000</b>
        </p>
      </div>
    </>
  );
}
