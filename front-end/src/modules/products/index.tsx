import { FaSearch } from "react-icons/fa";
import { Button } from "../../components/Button";
import { LabeledInput } from "../../components/LabeledInput";
import styles from "./styles.module.css";
import { MdAddBox, MdBookmarkAdd, MdAddBusiness } from "react-icons/md";
import { useState } from "react";

export const ProductsModule = () => {
  const [filter, setFilter] = useState("produtos");
  return (
    <>
      <header className={styles.header}>
        <div className={styles.headerTitle}>
          <div>
            <h2>Gestão de produtos</h2>
          </div>

          <LabeledInput
            icon={<FaSearch />}
            inputWithLine={true}
            placeholder={`Buscar ${filter}`}
            hasError={false}
            onChange={() => {}}
          />
        </div>

        <div className={styles.acoes}>
          <h3>Exibir </h3>
          <div className={styles.filterOptions}>
            <label htmlFor="produtos">
              <input
                type="radio"
                name="filterOptions"
                id="produtos"
                checked={filter === "produtos"}
                onClick={() => setFilter("produtos")}
              />
              Produtos
            </label>

            <label htmlFor="categorias">
              <input
                type="radio"
                name="filterOptions"
                id="categorias"
                checked={filter === "categorias"}
                onClick={() => setFilter("categorias")}
              />
              Categorias
            </label>

            <label htmlFor="fornecedores">
              <input
                type="radio"
                name="filterOptions"
                id="fornecedores"
                checked={filter === "fornecedores"}
                onClick={() => setFilter("fornecedores")}
              />
              Fornecedores
            </label>
          </div>
        </div>
        <div className={styles.addButton}>
          <Button
            variant={
              filter === "produtos" ? "secondary" : filter === "categorias" ? "primary" : "outlined"
            }
          >
            {filter === "produtos" ? (
              <MdAddBox />
            ) : filter === "categorias" ? (
              <MdBookmarkAdd />
            ) : (
              <MdAddBusiness />
            )}
            {`Adicionar ${filter}`}
          </Button>
        </div>
      </header>
    </>
  );
};
