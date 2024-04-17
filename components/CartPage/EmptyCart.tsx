//libraries
import Image from "next/image";
import Link from "next/link";

//styles
import styles from "@/components/CartPage/EmptyCart.module.css";

//components
import Category from "../Home/Category";

const EmptyCart: React.FC = () => {
  return (
    <>
      <div className={styles.container}>
        <Image
          src="/no-cart.webp"
          alt="No Cart"
          height={50}
          width={50}
          unoptimized
          priority
        />

        <h1>No Gifts in Cart</h1>
        <p>
          Add a few items to your cart and come back here for an express
          checkout process!
        </p>
        <Link href="/category">Browse Category</Link>
        <Category />
      </div>
    </>
  );
};

export default EmptyCart;
