"use client";

//styles
import styles from "@/components/CartPage/DiscountBox.module.css";

//libraries
import { useState } from "react";
import Image from "next/image";

const DiscountBox: React.FC = () => {
  const [coupen, setCoupen] = useState<Boolean>(false);
  const [coupenCode, setCoupenCode] = useState<Boolean>(false);
  const showCoupenHandler = () => {
    setCoupen(!coupen);
  };
  const showCoupencodeHandler = () => {
    setCoupenCode(!coupenCode);
  };
  return (
    <>
      <div className={styles.discountDialouge}>
        <div className={styles.discountQuestion} onClick={showCoupenHandler}>
          <p>
            <Image
              src="/icons/coupon.svg"
              alt="coupon icon "
              height={30}
              width={30}
              unoptimized
            />{" "}
            Do You have a Coupon?
          </p>
          <Image
            src={coupen ? "/icons/minus.svg" : "/icons/plus.svg"}
            alt="plus icon"
            className={styles.discountPopUpImg}
            height={20}
            width={20}
            unoptimized
          />
        </div>
        {coupen && (
          <div className={styles.discountBoxWrapper}>
            <form action="" method="post">
              <div className={styles.login_input}>
                <input type="text" required placeholder="Enter Coupen code" />
              </div>
              <input type="submit" value="Submit Coupen Code" />
              <div
                className={styles.availabelCoupenCodeHeading}
                onClick={showCoupencodeHandler}
              >
                <p>
                  Availabel Coupon Code{" "}
                  <Image
                    src="/icons/green-price-tag.svg"
                    alt="green-price-tag icon"
                    height={30}
                    width={30}
                    unoptimized
                  />
                </p>
                <Image
                  src={
                    coupenCode
                      ? "/icons/chevron-up.svg"
                      : "/icons/chevron-down.svg"
                  }
                  alt="chevron-up"
                  height={20}
                  width={20}
                  unoptimized
                />
              </div>
              {coupenCode && (
                <div className={styles.availableCoupenCode}>
                  <p>
                    <span>
                      1. Use <b>NEWUSER</b> Get ₹ 100 off
                    </span>{" "}
                    <button>Appply</button>
                  </p>
                  <p>
                    <span>
                      2. Use <b>Decor24</b> Get 2% off{" "}
                    </span>
                    <button>Appply</button>
                  </p>
                </div>
              )}
            </form>
          </div>
        )}
      </div>
    </>
  );
};

export default DiscountBox;
