import { useState } from "react";
import styles from "./styles.module.css";
import { usePaymentCalculator } from "../../hooks/usePaymentCalculator";

type PaymentItemProps = {
  description: string;
  value: number;
};

export const CheckoutProduct = ({ description }: PaymentItemProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const { formData } = usePaymentCalculator();

  return (
    <li className={styles.paymentItem}>
      <div className={styles.paymentItemContainer} onClick={() => setIsOpen(!isOpen)}>
        <div className={styles.paymentItemInfo}>
          <span>{formData.quantity}</span>
          <div className={styles.paymentItemDescription}>
            <span>{description}</span>
          </div>
          <p>{formData.totalValue}</p>
        </div>
      </div>
    </li>
  );
};
