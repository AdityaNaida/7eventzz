//styles

import styles from "@/components/CartPage/AddOnHeading.module.css";

const AddOnHeading: React.FC = () => {
  return (
    <>
      <div className={styles.heading}>
        <p>Add On Item</p>
        <button>+ Add Item</button>
      </div>
    </>
  );
};

export default AddOnHeading;
