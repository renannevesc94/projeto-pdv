import styles from "./styles.module.css";

type ISideBarItemProps = {
  label: string;
  IconComponent: React.ComponentType<{ selected: string }>;
  selected: string;
  setSelected: (label: string) => void;
};
export const SideBarItem = ({ label, IconComponent, selected, setSelected }: ISideBarItemProps) => {
  return (
    <div
      className={`${styles.iconSideBar} ${selected === label && styles.iconseSideBarSelected}`}
      onClick={() => setSelected(label)}
    >
      <IconComponent selected={selected} />
      {label}
    </div>
  );
};
