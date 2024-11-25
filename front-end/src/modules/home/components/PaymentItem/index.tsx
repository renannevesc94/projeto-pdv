import { useState } from "react";
import styles from "./styles.module.css";
import { AiFillCaretRight, AiFillCaretDown } from "react-icons/ai";
import { InputWitLabel } from "../../../../components/InputWitLabel";
import { Select } from "../../../../components/Select";
import { usePaymentCalculator } from "../../hooks/usePaymentCalculator";

type PaymentItemProps = {
  description: string;
  valueUnit: number;
};

export const PaymentItem = ({ description, valueUnit }: PaymentItemProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const { formData, setFormData, handleDiscountChange } = usePaymentCalculator();

  return (
    <li className={styles.paymentItem}>
      <div className={styles.paymentItemContainer} onClick={() => setIsOpen(!isOpen)}>
        <span className={styles.arrow} onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <AiFillCaretDown /> : <AiFillCaretRight />}
        </span>
        <div className={styles.paymentItemInfo}>
          <p>{formData.quantity}</p>
          <div className={styles.paymentItemDescription}>
            <span>{description}</span>
          </div>
          <p>{formData.totalValue}</p>
        </div>
      </div>
      {isOpen && (
        <div className={styles.paymentItemDetails}>
          <div className={styles.paymentItemDetailsInput}>
            <InputWitLabel
              label="Quantidade"
              type="number"
              min={1}
              value={formData.quantity ? formData.quantity : 1}
              onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
            />
            <InputWitLabel
              label="Valor UN"
              type="number"
              disabled={true}
              value={valueUnit}
              id={styles.paymentItemValue}
            />
            <Select
              label="Tipo"
              options={["R$", "%"]}
              onChange={(e) => setFormData({ ...formData, discountType: e.target.value })}
            />
            <InputWitLabel
              label="Desconto"
              onChange={(e) => handleDiscountChange(e.target.value)}
              value={formData.discountValue ? formData.discountValue : ""}
            />
          </div>
        </div>
      )}
    </li>
  );
};
