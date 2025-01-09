import { HomeHeader } from "./components/HomeHeader";
import { Checkout } from "./components/Checkout";
import styles from "./styles.module.css";
import { ProductCard } from "../../components/ProductCard";

export const Home = () => {
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

      {isOpen && (
        <div className={styles.checkoutContainer}>
          <Checkout />
        </div>
      )}
    </div>
  );
};
