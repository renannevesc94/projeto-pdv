import { useState } from "react";
import styles from "./styles.module.css";
import { usePaymentCalculator } from "../../hooks/usePaymentCalculator";

type PaymentItemProps = {
  description: string;
  value: string;
  quantity: number;
};

export const CheckoutProduct = ({ description, value, quantity }: PaymentItemProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const { formData } = usePaymentCalculator();

  return (
    <li className={styles.paymentItem}>
      <div className={styles.paymentItemContainer} onClick={() => setIsOpen(!isOpen)}>
        <div className={styles.paymentItemInfo}>
          <span>{quantity}</span>
          <div className={styles.paymentItemDescription}>
            <span>{description}</span>
          </div>
          <p>{value}</p>
        </div>
      </div>
    </li>
  );
};
