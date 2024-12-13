import styles from "./styles.module.css";

type NavBarItemProps = {
  label: string;
  selected: string;
  setSelected: (label: string) => void;
};

export const NavBarItem = ({ label, selected, setSelected }: NavBarItemProps) => {
  return (
    <div
      className={selected === label ? styles.navbarItemSelected : styles.navbarItem}
      onClick={() => setSelected(label)}
    >
      {label}
    </div>
  );
};
