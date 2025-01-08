import { useNavigate } from "react-router-dom";
import styles from "./styles.module.css";

type ISideBarItemProps = {
  label: string;
  IconComponent: React.ComponentType<{ selected: boolean }>;
  selected: boolean;
};
export const SideBarItem = ({ label, IconComponent, selected }: ISideBarItemProps) => {
  const navigate = useNavigate();
  function onClick() {
    const labelLowerCase = label.toLowerCase();
    navigate(`/${labelLowerCase}`);
  }

  return (
    <div
      className={`${styles.iconSideBar} ${selected && styles.iconseSideBarSelected}`}
      onClick={onClick}
    >
      <IconComponent selected={selected} />
      {label}
    </div>
  );
};
