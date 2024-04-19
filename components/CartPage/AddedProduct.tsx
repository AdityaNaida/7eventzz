import Image from "next/image";

import styles from "@/components/CartPage/AddedProduct.module.css";

const AddedProduct: React.FC = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.product}>
          <Image
            src="/addon5.webp"
            alt="addon Image"
            height={50}
            width={50}
            unoptimized
            priority
          />
          <div className={styles.details}>
            <p>Two Hersheys Milk Chocolates Each 33 gm</p>

            <div className={styles.controller}>
              <div className={styles.price}>₹600 X 1 = ₹600</div>
              <select name="quantity" id="  quantity">
                <option value="1" selected>
                  1
                </option>
                <option value="2" selected>
                  2
                </option>
                <option value="3" selected>
                  3
                </option>
                <option value="4" selected>
                  4
                </option>
                <option value="5" selected>
                  5
                </option>
                <option value="6" selected>
                  6
                </option>
                <option value="7" selected>
                  7
                </option>
                <option value="8" selected>
                  8
                </option>
                <option value="9" selected>
                  9
                </option>
                <option value="10" selected>
                  10
                </option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddedProduct;
