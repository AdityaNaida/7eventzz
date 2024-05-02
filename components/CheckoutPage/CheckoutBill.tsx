import Image from "next/image";
import Link from "next/link";

import style from "@/components/CheckoutPage/CheckoutBill.module.css";

export default function CheckoutBill() {
  return (
    <>
      <div className={style.container}>
        <h2>
          Order Details{" "}
          <Image
            src="/icons/price-details.webp"
            alt="price details"
            height={30}
            width={30}
            unoptimized
            priority
            className={style.pricedetails_image}
          />
        </h2>
        <p>Order Summary</p>
        <div className={style.nested}>
          <div className={style.checkout_image_holder}>
            <Image
              src="/extra.webp"
              alt="checkout image"
              height={50}
              width={50}
              unoptimized
              priority
            />
          </div>
          <div className={style.checkout_details}>
            <h2>Surprise Room Decoration</h2>
            <p>
              {" "}
              <Image
                src="/icons/calendar-icon.svg"
                alt="calendar icon"
                height={20}
                width={20}
              />{" "}
              25 September 2024
            </p>
            <p>
              {" "}
              <Image
                src="/icons/clock-icon.svg"
                alt="clock icon"
                height={20}
                width={20}
              />{" "}
              06:00 PM - 08:00 PM
            </p>
            <p>
              {" "}
              <Image
                src="/icons/credit-card.svg"
                alt="credit-card"
                height={20}
                width={20}
              />{" "}
              Amonut to Pay: ₹18000
            </p>
          </div>
        </div>

        <div className={style.payments_container}>
          <div className={style.payment_options}>
            <div>
              <input type="radio" id="half" name="payment_option" value="50%" />
              <label htmlFor="half">50%</label>
            </div>
            <div>
              <input
                type="radio"
                id="full"
                name="payment_option"
                value="100%"
              />
              <label htmlFor="full">100%</label>
            </div>
          </div>
          <Link href="/">Proceed to Pay</Link>
        </div>
      </div>
    </>
  );
}
