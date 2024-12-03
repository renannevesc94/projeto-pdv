import { InputWithIcon } from "../../../../components/InputWithIcon";
import { NavBar } from "../NavBar";
import styles from "./styles.module.css";

export const HomeHeader = () => {
  return (
    <header className={styles.header}>
      <div className={styles.titleArea}>
        <h2>Meu PDV 1.0</h2>
        <p>22 de Out de 2024</p>
      </div>
      <div className={styles.inputSearch}>
        <InputWithIcon />
      </div>
      <div className={styles.navBar}>
        <NavBar />
      </div>
    </header>
  );
};
