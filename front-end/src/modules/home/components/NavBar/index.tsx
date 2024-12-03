import { useState } from "react";
import { NavBarItem } from "../../../../components/NavBarItem";
import styles from "./styles.module.css";
import { useGetCategories } from "./hooks/use-getCategories";
import { Carousel } from "../../../../components/Carousel";

export const NavBar = () => {
  const { data: categories } = useGetCategories();
  const [selected, setSelected] = useState("Todos");

  return (
    <nav className={styles.navbar}>
      {categories ? (
        <Carousel>
          {categories.map((category) => (
            <NavBarItem
              key={category.id}
              label={category.description}
              selected={selected}
              setSelected={setSelected}
            />
          ))}
        </Carousel>
      ) : (
        <div>Carregando...</div>
      )}
    </nav>
  );
};
