import { useNavigate } from "react-router-dom";
import styles from "./styles.module.css";

type ISideBarItemProps = {
  label: string;
  IconComponent: React.ComponentType<{ selected: string }>;
  selected: string;
  setSelected: (label: string) => void;
};
export const SideBarItem = ({ label, IconComponent, selected, setSelected }: ISideBarItemProps) => {
  const navigate = useNavigate();
  function onClick() {
    setSelected(label);
    const labelLowerCase = label.toLowerCase();
    navigate(`/${labelLowerCase}`);
  }

  return (
    <div
      className={`${styles.iconSideBar} ${selected === label && styles.iconseSideBarSelected}`}
      onClick={onClick}
    >
      <IconComponent selected={selected} />
      {label}
    </div>
  );
};
