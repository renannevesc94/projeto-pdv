import SearchIcon from "../icons/search.svg";
import styles from "./styles.module.css";
export const InputWithIcon = () => {
  return (
    <>
      <div className={styles.inputWithImage}>
        <input type="text" name="" id="" placeholder="Pesquisar produto" />
        <img src={SearchIcon} alt="" />
      </div>
    </>
  );
};
