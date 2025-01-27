import styles from "./styles.module.css";

type NavBarItemProps = {
  label: string;
  selected: string;
} & React.HTMLAttributes<HTMLDivElement>;

export const NavBarItem = ({ label, selected, ...props }: NavBarItemProps) => {
  return (
    <div className={selected === label ? styles.navbarItemSelected : styles.navbarItem} {...props}>
      {label}
    </div>
  );
};
