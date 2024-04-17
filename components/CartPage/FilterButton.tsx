//styles
import styles from "@/components/CartPage/FilterButton.module.css";

//define props
interface FilterProps {
  value: string;
}

const FilterButton: React.FC<FilterProps> = ({ value }) => {
  return (
    <>
      <p className={styles.button}>{value}</p>
    </>
  );
};

export default FilterButton;
