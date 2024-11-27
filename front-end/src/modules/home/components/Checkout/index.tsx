import { CheckoutProduct } from "../CheckoutProduct";
import styles from "./styles.module.css";

export const Checkout = () => {
  const items = [
    {
      description: "Coca-Cola 2L",
      quantity: "1",
      valueUnit: 10,
    },
    {
      description: "Descrição de um produto qualquer ",
      quantity: "1",
      valueUnit: 10,
    },
    {
      description: "Outro produto teste",
      quantity: "1",
      valueUnit: 10,
    },
  ];
  return (
    <aside className={styles.paymentSection}>
      <div className={styles.paymentHeader}>
        <button>+ Cliente</button>
        <h3>Venda: 0003</h3>
      </div>

      <div className={styles.paymentTableHeader}>
        <h5>QTD</h5>
        <h5>DESCRIÇÃO</h5>
        <h5>VALOR</h5>
      </div>

      <ul className={styles.paymentList}>
        {items.map((item) => (
          <CheckoutProduct key={item.description} {...item} />
        ))}
      </ul>
    </aside>
  );
};
