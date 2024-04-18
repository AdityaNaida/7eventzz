import styles from "@/components/CartPage/Steps.module.css";

interface StepProps {
  isActive: boolean;
  isfill: boolean;
  number: boolean;
}
const Steps: React.FC<StepProps> = ({ isActive, isfill, number }) => {
  return (
    <>
      <div className={styles.stepsContainer}>
        <p>Steps:</p>
        <div className={styles.stepsCount}>
          <div className={styles.stepsRuler}>
            {isfill && <div className={styles.filler}></div>}
          </div>
          <div className={styles.stepBox}>
            <span className={styles.activeStep}></span>
            <p>Cart</p>
          </div>
          <div className={styles.stepBox}>
            <span className={isActive ? styles.activeStep2 : styles.nothing}>
              {number ? 2 : "✓"}
            </span>
            <p>Address</p>
          </div>
          <div className={styles.stepBox}>
            <span></span>
            <p>Payment</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Steps;
