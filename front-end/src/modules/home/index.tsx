import { HomeHeader } from "./components/HomeHeader";
import { Checkout } from "./components/Checkout";
import styles from "./styles.module.css";
import { ProductCard } from "../../components/ProductCard";
import { useGetProducts } from "./hooks/use-getProducts";
import { useCurrentSale } from "../../providers/CurrentSaleProvider";

export const Home = () => {
  const { currentSaleItems } = useCurrentSale();
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

      {currentSaleItems.length !== 0 && (
        <div className={styles.checkoutContainer}>
          <Checkout />
        </div>
      )}
    </div>
  );
};
