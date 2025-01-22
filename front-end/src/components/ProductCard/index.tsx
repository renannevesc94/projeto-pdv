import { useSale } from "../../providers/CurrentSaleProvider";
import { StepperInput } from "../StepperInput";
import styles from "./styles.module.css";

type ProductCardProps = {
  id: string;
  description: string;
  price: number;
  stock: number;
};

export const ProductCard = (product: ProductCardProps) => {
  const { addOrUpdateSaleItem } = useSale();

  const handleChangeProduct = (newQuantity: number) => {
    addOrUpdateSaleItem({
      id: product.id,
      title: product.description,
      quantity: newQuantity,
      value: product.price,
    });
  };

  return (
    <>
      <div className={styles.productCardContainer}>
        <div className={styles.productImageContainer}>
          <img src="/02.png" alt="" />
        </div>
        <div>
          <span className={styles.productCardTitle}>{product.description}</span>
          <div className={styles.productCardStock}>
            Saldo: <span>{product.stock}</span>
          </div>
        </div>

        <div className={styles.productCardPrice}>
          <div>
            <span className={styles.currencySymbol}>R$</span> {product.price}
          </div>
          <div className={styles.productCardQuantity}>
            <StepperInput onChangeProduct={handleChangeProduct} productId={product.id} />
          </div>
        </div>
      </div>
    </>
  );
};
