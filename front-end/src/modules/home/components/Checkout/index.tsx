import { Button } from "../../../../components/Button";
import { useSale } from "../../../../providers/CurrentSaleProvider";
import { CheckoutProduct } from "../CheckoutProduct";
import styles from "./styles.module.css";
import { motion, AnimatePresence } from "framer-motion";

export const Checkout = () => {
  const { itemsWithTotalPrice, TotalSale, cancelSale } = useSale();

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
        <AnimatePresence>
          {itemsWithTotalPrice.map((item) => (
            <motion.li
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <CheckoutProduct
                description={item.title}
                value={item.value}
                quantity={item.quatity}
                totalPrice={item.totalPrice}
              />
            </motion.li>
          ))}
        </AnimatePresence>
      </ul>

      <div className={styles.paymentFooter}>
        <div className={styles.paymentSummaryContainer}>
          <div className={styles.paymentSummary}>
            <span>Subtotal:</span>
            <span>Desconto:</span>
            <span>Acrésimo:</span>
            <span className={styles.paymentSubTitleTotal}>Total:</span>
          </div>

          <div className={styles.paymentSummary}>
            <span className={styles.paymentSubTitle}>R$ {TotalSale.toFixed(2)}</span>
            <span className={styles.paymentSubTitle}> R$ {TotalSale.toFixed(2)}</span>
            <span className={styles.paymentSubTitle}>R$ {TotalSale.toFixed(2)}</span>
            <span className={styles.paymentSubTitleTotal}>R$ {TotalSale.toFixed(2)}</span>
          </div>
        </div>

        <div className={styles.containerButtons}>
          <Button variant="primary">Desconto</Button>
          <Button variant="outlined">Acréscimo</Button>
          <div className={styles.paymentButton}>
            <Button
              onClick={() => {
                cancelSale();
              }}
              variant="alert"
            >
              Cancelar
            </Button>
            <Button variant="secondary">Finalizar</Button>
          </div>
        </div>
      </div>
    </aside>
  );
};
