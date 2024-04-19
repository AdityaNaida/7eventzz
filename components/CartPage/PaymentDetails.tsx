"use client";
import { useRef } from "react";
import Link from "next/link";

import styles from "@/components/CartPage/PaymentDetails.module.css";

const PaymentDetails: React.FC = () => {
  const bill = useRef<HTMLDivElement>(null);

  const billTrackerHandler = () => {
    window.scrollTo({
      top: bill.current?.offsetTop || 0,
      behavior: "smooth",
    });
  };
  return (
    <>
      <div className={styles.priceDetailsContainer} ref={bill}>
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
          <span>
            Delivery
            <samp className={styles.deliveryTag}>Evening</samp>
          </span>
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
        <div className={styles.priceBillHolder}>
          <p className={styles.txt}>
            You Saved <span> ₹ 1000</span>
          </p>
          <p className={styles.totalPrice}>₹ 2400</p>
          <button className={styles.viewBillBtn} onClick={billTrackerHandler}>
            View Bill*
          </button>
        </div>
        <Link href="/checkout">Proceed To Buy </Link>
      </div>
    </>
  );
};

export default PaymentDetails;
