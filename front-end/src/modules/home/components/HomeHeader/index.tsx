import { FaSearch } from "react-icons/fa";
import { NavBar } from "../NavBar";
import styles from "./styles.module.css";
import { LabeledInput } from "../../../../components/LabeledInput";
import { useSearchParams } from "react-router-dom";

export const HomeHeader = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [searchParams, setSearchParams] = useSearchParams("");
  const description = searchParams.get("description") || "";

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
          value={description}
          onChange={(event) => {
            const textParam = event.target.value;
            setSearchParams({ description: textParam });
          }}
        />
      </div>
      <div className={styles.navBar}>
        <NavBar />
      </div>
    </header>
  );
};
