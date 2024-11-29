import { StepperInput } from "../StepperInput";
import styles from "./styles.module.css";

export const ProductCard = () => {
  return (
    <>
      <div className={styles.productCardContainer}>
        <div className={styles.productImageContainer}>
          <img src="/02.png" alt="" />
        </div>
        <div>
          <span className={styles.productCardTitle}>Coca Cola 350ML</span>
          <div className={styles.productCardStock}>
            Saldo: <span>10</span>
          </div>
        </div>

        <div className={styles.productCardPrice}>
          <div>
            <span className={styles.currencySymbol}>R$</span> 10,00
          </div>
          <div className={styles.productCardQuantity}>
            <StepperInput />
          </div>
        </div>
      </div>
    </>
  );
};
