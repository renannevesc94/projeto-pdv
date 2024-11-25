import { HomeHeader } from "./components/HomeHeader";
import { PaymentSection } from "./components/PaymentSection";
import { SideBar } from "../../components/Sidebar";
import styles from "./styles.module.css";

export const Home = () => {
  return (
    <div className={styles.homeContainer}>
      <nav className={styles.sidebar}>
        <SideBar />
      </nav>
      <HomeHeader />
      <PaymentSection />
    </div>
  );
};
