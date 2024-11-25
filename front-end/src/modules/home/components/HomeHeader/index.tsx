import { useState } from "react";
import { InputWithIcon } from "../../../../components/InputWithIcon";
import styles from "./styles.module.css";
import { NavBarItem } from "../../../../components/NavBarItem";

export const HomeHeader = () => {
  const categories = ["Bebidas", "Carnes", "Doces", "Salgados", "Padaria"];
  const [selected, setSelected] = useState(categories[0]);
  return (
    <header className={styles.header}>
      <div className={styles.topHeader}>
        <div className={styles.titleArea}>
          <h2>Meu PDV 1.0</h2>
          <p>22 de Out de 2024</p>
        </div>
        <InputWithIcon />
      </div>
      <nav className={styles.navbar}>
        {categories.map((category) => (
          <NavBarItem
            key={category}
            label={category}
            selected={selected}
            setSelected={setSelected}
          />
        ))}
      </nav>
    </header>
  );
};
