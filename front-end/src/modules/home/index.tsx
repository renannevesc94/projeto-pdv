import { HomeHeader } from "./components/HomeHeader";
import { Checkout } from "./components/Checkout";
import styles from "./styles.module.css";
import { ProductCard } from "../../components/ProductCard";
import { useGetProducts } from "./hooks/use-getProducts";
import { useSale } from "../../providers/CurrentSaleProvider";
import { AnimatePresence } from "motion/react";
import * as motion from "motion/react-client";

export const Home = () => {
  const { sale } = useSale();
  const { data } = useGetProducts();

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.headerContainer}>
          <HomeHeader />
        </div>

        <div className={styles.productsCardContainer}>
          {data?.map((el) => {
            return (
              <ProductCard
                id={el.id}
                description={el.description}
                price={el.price}
                stock={el.stock}
                key={el.id}
              />
            );
          })}
        </div>
      </div>

      <AnimatePresence>
        {sale.items.length !== 0 && (
          <motion.div
            className={styles.checkoutContainer}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            transition={{ duration: 0.2 }}
          >
            <Checkout />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
