import styles from "./styles.module.css";

type PaymentItemProps = {
  description: string;
  value?: number;
  quantity: number;
  totalPrice: number;
};

export const CheckoutProduct = ({ description, quantity, totalPrice }: PaymentItemProps) => {
  return (
    <li className={styles.paymentItem}>
      <div className={styles.paymentItemContainer}>
        <div className={styles.paymentItemInfo}>
          <span>{quantity}</span>
          <div className={styles.paymentItemDescription}>
            <span>{description}</span>
          </div>
          <p>{totalPrice}</p>
        </div>
      </div>
    </li>
  );
};
