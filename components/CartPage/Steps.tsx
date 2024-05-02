import styles from "@/components/CartPage/Steps.module.css";

interface StepProps {
  isActive: boolean;
}
const Steps: React.FC<StepProps> = ({ isActive }) => {
  return (
    <>
      <div className={styles.stepsContainer}>
        <p>Steps:</p>
        <div className={styles.stepsCount}>
          <div className={styles.stepsRuler}></div>
          <div className={styles.stepBox}>
            <span className={styles.activeStep}></span>
            <p>Cart</p>
          </div>
          <div className={styles.stepBox}>
            <span
              className={isActive ? styles.activeStep2 : styles.nothing}
            ></span>
            <p>Address</p>
          </div>
          <div className={styles.stepBox}>
            <span></span>
            <p>Confirm</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Steps;
