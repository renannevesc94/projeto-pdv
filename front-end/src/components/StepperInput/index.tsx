import { useEffect, useState } from "react";
import styles from "./styles.module.css";
import { useSale } from "../../providers/CurrentSaleProvider";

type StepperInputProps = {
  onChangeProduct: (newQuantity: number) => void;
  initialValue?: number;
  productId: string;
};

export const StepperInput = ({ onChangeProduct, productId }: StepperInputProps) => {
  const { itemQuantityMap } = useSale();
  const [quantity, setQuantity] = useState(0);

  useEffect(() => {
    setQuantity(itemQuantityMap.get(productId) || 0);
  }, [itemQuantityMap, productId]);

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
