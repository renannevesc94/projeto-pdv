import { Outlet } from "react-router-dom";
import { SideBar } from "../Sidebar";
import styles from "./styles.module.css";

export const Layout = () => {
  return (
    <div className={styles.container}>
      <div className={styles.sideBarContainer}>
        <SideBar />
      </div>
      <div className={styles.contentContainer}>
        <Outlet />
      </div>
    </div>
  );
};
