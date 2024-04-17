//styles
import styles from "@/components/CartPage/CartPage.module.css";

//componensts
import Steps from "./Steps";
import MainProduct from "./MainProduct";
import AddOnHeading from "./AddOnHeading";
import AddedProduct from "./AddedProduct";
import SimilarWrapper from "./SimilarWrapper";
import DiscountBox from "./DiscountBox";
import PaymentDetails from "./PaymentDetails";
// import Assurance from "../CheckOutPage/Assurance";

const CartPage: React.FC = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.product}>
          <Steps isActive={false} isfill={false} number={true} />
          <MainProduct />
          <AddOnHeading />
          <AddedProduct />
          <SimilarWrapper />
        </div>
        <div className={styles.payment}>
          <DiscountBox />
          <PaymentDetails />
        </div>
      </div>
    </>
  );
};

export default CartPage;
