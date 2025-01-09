import { FaSearch } from "react-icons/fa";
import { NavBar } from "../NavBar";
import styles from "./styles.module.css";
import { LabeledInput } from "../../../../components/LabeledInput";

export const HomeHeader = () => {
  return (
    <header className={styles.header}>
      <div className={styles.titleArea}>
        <h2>Meu PDV 1.0</h2>
        <p>22 de Out de 2024</p>
      </div>
      <div className={styles.inputSearch}>
        <LabeledInput
          icon={<FaSearch />}
          inputWithLine={true}
          placeholder="Pesquisar produtos"
          hasError={false}
        />
      </div>
      <div className={styles.navBar}>
        <NavBar />
      </div>
    </header>
  );
};
