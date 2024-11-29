import { useState } from "react";
import styles from "./styles.module.css";

export const StepperInput = () => {
  const [count, setCount] = useState(0);

  function handleIncrementDecrement(option: boolean) {
    setCount((prevCount) => {
      return option ? prevCount + 1 : Math.max(prevCount - 1, 0);
    });
  }

  return (
    <>
      <div className={styles.container}>
        <button
          className={`${styles.buttonBase} ${styles.buttonDecrement}`}
          onClick={() => handleIncrementDecrement(false)}
        >
          -
        </button>
        <span className={styles.label}>{count}</span>
        <button
          className={`${styles.buttonBase} ${styles.buttonIncrement}`}
          onClick={() => handleIncrementDecrement(true)}
        >
          +
        </button>
      </div>
    </>
  );
};
