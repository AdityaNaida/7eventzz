//libraries
import Image from "next/image";
import Link from "next/link";

//styles
import styles from "@/components/CartPage/EmptyCart.module.css";

const EmptyCart: React.FC = () => {
  return (
    <>
      <div className={styles.container}>
        <Image
          src="/icons/empty-cart.webp"
          alt="No Cart"
          height={50}
          width={50}
          unoptimized
          priority
        />

        <h1>No Items in Cart</h1>
        <p>
          Add a few items to your cart and come back here for an express
          checkout process!
        </p>
        <Link href="/category">Browse Category</Link>
      </div>
    </>
  );
};

export default EmptyCart;
