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
            <div className={styles.price}>₹600 X 1 = ₹600</div>
            <div className={styles.controller}>
              <p>Qty</p>
              <select name="quantity" id="  quantity">
                <option defaultValue="1" aria-selected>
                  1
                </option>
                <option defaultValue="2">2</option>
                <option defaultValue="3">3</option>
                <option defaultValue="4">4</option>
                <option defaultValue="5">5</option>
                <option defaultValue="6">6</option>
                <option defaultValue="7">7</option>
                <option defaultValue="8">8</option>
                <option defaultValue="9">9</option>
                <option defaultValue="10">10</option>
                <option defaultValue="11">11</option>
                <option defaultValue="12">12</option>
                <option defaultValue="13">13</option>
                <option defaultValue="14">14</option>
                <option defaultValue="15">15</option>
                <option defaultValue="16">16</option>
                <option defaultValue="17">17</option>
                <option defaultValue="18">18</option>
                <option defaultValue="19">19</option>
                <option defaultValue="20">20</option>
                <option defaultValue="21">21</option>
                <option defaultValue="22">22</option>
                <option defaultValue="23">23</option>
                <option defaultValue="24">24</option>
                <option defaultValue="25">25</option>
                <option defaultValue="26">26</option>
                <option defaultValue="27">27</option>
                <option defaultValue="28">28</option>
                <option defaultValue="29">29</option>
                <option defaultValue="30">30</option>
              </select>
            </div>
            <button className={styles.deleteBtn}>
              <Image
                src="/icons/trash.svg"
                alt="trash icon"
                height={20}
                width={20}
              />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddedProduct;
