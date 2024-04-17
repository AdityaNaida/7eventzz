//libraries
import Link from "next/link";
import Image from "next/image";

//styles
import styles from "@/components/CartPage/PaymentDetails.module.css";

const PaymentDetails: React.FC = () => {
  return (
    <>
      <div className={styles.priceDetailsContainer}>
        <h4>Price Details </h4>
        <p>
          <span>Base Total</span>
          <span>
            <b>₹ 1800</b>
          </span>
        </p>
        <p>
          <span>Add On Total</span>
          <span>
            <b>₹ 600</b>
          </span>
        </p>
        <p>
          <span>Total Amount</span>
          <span>
            <b>₹ 2400</b>
          </span>
        </p>
        <p>
          <span>Coupen Discount</span>
          <span>-</span>
        </p>
        <p>
          <span>
            <b>Amount To Pay</b>
          </span>
          <span>
            <b>₹ 2400</b>
          </span>
        </p>
      </div>
      <div className={styles.proceedToBuyContainer}>
        <Link href="/checkout">Proceed To Buy </Link>
      </div>
    </>
  );
};

export default PaymentDetails;
