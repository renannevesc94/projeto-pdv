import { useState } from "react";
import styles from "./styles.module.css";

type StepperInputProps = {
  onChangeProduct: (newQuantity: number) => void;
  initialValue: number;
};
export const StepperInput = ({ onChangeProduct, initialValue }: StepperInputProps) => {
  const [quantity, setQuantity] = useState(initialValue);

  const handleIncrementDecrement = (option: boolean) => {
    setQuantity((prevQuantity) => {
      const newQuantity = option ? prevQuantity + 1 : Math.max(prevQuantity - 1, 0);
      onChangeProduct(newQuantity);
      return newQuantity;
    });
  };

  return (
    <>
      <div className={styles.container}>
        <button
          onClick={() => {
            handleIncrementDecrement(false);
          }}
          className={`${styles.buttonBase} ${styles.buttonDecrement}`}
        >
          -
        </button>
        <span className={styles.label}>{quantity}</span>
        <button
          onClick={() => {
            handleIncrementDecrement(true);
          }}
          className={`${styles.buttonBase} ${styles.buttonIncrement}`}
        >
          +
        </button>
      </div>
    </>
  );
};
