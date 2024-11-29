import { HomeHeader } from "./components/HomeHeader";
import { Checkout } from "./components/Checkout";
import { SideBar } from "../../components/Sidebar";
import styles from "./styles.module.css";
import { ProductCard } from "../../components/ProductCard";

export const Home = () => {
  return (
    <div className={styles.homeContainer}>
      <div className={styles.sideBarContainer}>
        <SideBar />
      </div>

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
        <ProductCard />
      </div>

      <div className={styles.checkoutContainer}>
        <Checkout />
      </div>
    </div>
  );
};
