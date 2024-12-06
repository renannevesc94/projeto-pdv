import { Button } from "../../../../components/Button";
import { CheckoutProduct } from "../CheckoutProduct";
import styles from "./styles.module.css";

export const Checkout = () => {
  const items = [
    {
      quantity: 1,
      description: "Coca Cola 350ML",
      value: 10,
    },
    {
      quantity: 1,
      description: "Coca Cola 350ML",
      value: 10,
    },
    {
      quantity: 1,
      description: "Coca Cola 350ML",
      value: 10,
    },
    {
      quantity: 1,
      description: "Coca Cola 350ML",
      value: 10,
    },
    {
      quantity: 1,
      description: "Coca Cola 350ML",
      value: 10,
    },
    {
      quantity: 1,
      description: "Coca Cola 350ML",
      value: 10,
    },
    {
      quantity: 1,
      description: "Coca Cola 350ML",
      value: 10,
    },
    {
      quantity: 1,
      description: "Coca Cola 350ML",
      value: 10,
    },
    {
      quantity: 1,
      description: "Coca Cola 350ML",
      value: 10,
    },
    {
      quantity: 1,
      description: "Coca Cola 350ML",
      value: 10,
    },
    {
      quantity: 1,
      description: "Coca Cola 350ML",
      value: 10,
    },
  ];
  return (
    <aside className={styles.paymentSection}>
      <div className={styles.paymentHeader}>
        <Button variant="outlined">+ Cliente</Button>
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

      <div className={styles.paymentFooter}>
        <div className={styles.paymentTotal}></div>
        <div className={styles.containerButtons}>
          <Button variant="primary">Desconto</Button>
          <Button variant="outlined">Acréscimo</Button>
          <div className={styles.paymentButton}>
            <Button variant="secondary">Finalizar</Button>
          </div>
        </div>
      </div>
    </aside>
  );
};
