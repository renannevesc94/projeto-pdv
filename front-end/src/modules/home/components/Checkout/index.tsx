import { useState } from "react";
import { Button } from "../../../../components/Button";
import { useSale } from "../../../../providers/CurrentSaleProvider";
import { CheckoutProduct } from "../CheckoutProduct";
import styles from "./styles.module.css";
import { motion, AnimatePresence } from "framer-motion";
import { RiDiscountPercentLine } from "react-icons/ri";
import { TbReceiptTax } from "react-icons/tb";
import { IoMdPersonAdd } from "react-icons/io";

export const Checkout = () => {
  const { itemsWithTotal, sale, cancelSale, setAdjustmentToSale } = useSale();
  const [adjustmentType, setAdjustmentType] = useState<null | "discount" | "increase">(null);
  const [adjustmentFormat, setAdjustmentFormat] = useState<string | "fixed" | "percent">("fixed");
  const [adjustmentValue, setadjustmentValue] = useState<number>(0);

  return (
    <aside className={styles.paymentSection}>
      <div className={styles.paymentHeader}>
        <Button variant="outlined">
          <IoMdPersonAdd /> Cliente
        </Button>
        <h3>Venda: 0003</h3>
      </div>

      <div className={styles.paymentTableHeader}>
        <h5>QTD</h5>
        <h5>DESCRIÇÃO</h5>
        <h5>VALOR</h5>
      </div>

      <ul className={styles.paymentList}>
        <AnimatePresence>
          {itemsWithTotal.map((item) => (
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
                quantity={item.quantity}
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
            <span className={styles.paymentSubTitle}>R$ {sale.subTotal.toFixed(2)}</span>
            <span className={styles.paymentSubTitle}> R$ {sale.discountValue?.toFixed(2)}</span>
            <span className={styles.paymentSubTitle}>R$ 0</span>
            <span className={styles.paymentSubTitleTotal}>R$ {sale.total.toFixed(2)}</span>
          </div>
        </div>

        {adjustmentType === null ? (
          <div className={styles.containerActions}>
            <div onClick={() => setAdjustmentType("discount")}>
              <RiDiscountPercentLine className={styles.actionsIcons} />
              Desconto
            </div>
            <div onClick={() => setAdjustmentType("increase")}>
              <TbReceiptTax className={styles.actionsIcons} />
              Acréscimo
            </div>
          </div>
        ) : (
          <div className={styles.discountWrapper}>
            <div className={styles.discountOptions}>
              <span>Tipo:</span>
              <div>
                <label htmlFor="isValue">
                  <input
                    type="radio"
                    name="discountType"
                    id="isValue"
                    value="value"
                    checked={adjustmentFormat === "fixed"}
                    onChange={() => {
                      setAdjustmentFormat("fixed");
                    }}
                  />
                  R$
                </label>
                <label htmlFor="isPercent">
                  <input
                    type="radio"
                    name="discountType"
                    id="isPercent"
                    value="percent"
                    checked={adjustmentFormat === "percent"}
                    onChange={() => {
                      setAdjustmentFormat("percent");
                    }}
                  />
                  %
                </label>
              </div>
            </div>

            <div className={styles.discountInputWrapper}>
              <input
                type="number"
                name=""
                id=""
                value={Math.max(adjustmentValue, 0)}
                onChange={(e) => {
                  const value = Number(e.target.value);
                  setadjustmentValue(value);
                }}
              />
              <Button
                variant="outlined"
                onClick={() => {
                  setAdjustmentToSale(adjustmentType, adjustmentFormat, adjustmentValue);
                }}
              >
                OK
              </Button>
            </div>
          </div>
        )}
        <div className={styles.paymentButtons}>
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
    </aside>
  );
};
