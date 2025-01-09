import { HomeHeader } from "./components/HomeHeader";
import { Checkout } from "./components/Checkout";
import styles from "./styles.module.css";
import { ProductCard } from "../../components/ProductCard";
import { useCart } from "../../providers/CartProvider";

export const Home = () => {
  const { saleProducts } = useCart();
  console.log(saleProducts);
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.headerContainer}>
          <HomeHeader />
        </div>

        <div className={styles.productsCardContainer}>
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </div>

      {saleProducts && (
        <div className={styles.checkoutContainer}>
          <Checkout />
        </div>
      )}
    </div>
  );
};
