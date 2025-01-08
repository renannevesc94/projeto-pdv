import { useLocation } from "react-router-dom";
import {
  ClientesIcon,
  DashboardIcon,
  LogoutIcon,
  PdvIcon,
  ProdutosIcon,
  VendasIcon,
} from "../icons";
import { SideBarItem } from "../SideBarItem";
import styles from "./styles.module.css";

export const SideBar = () => {
  const local = useLocation();
  const pathname = local.pathname.split("/").pop() || "";
  const label = pathname[0].toUpperCase() + pathname.substring(1);

  const menuItems = [
    { label: "Home", IconComponent: PdvIcon },
    { label: "Produtos", IconComponent: ProdutosIcon },
    { label: "Clientes", IconComponent: ClientesIcon },
    { label: "Vendas", IconComponent: VendasIcon },
    { label: "Dashboard", IconComponent: DashboardIcon },
  ];
  return (
    <div className={styles.container}>
      <div className={styles.iconsContainer}>
        {menuItems.map((item) => (
          <SideBarItem
            key={item.label}
            label={item.label}
            IconComponent={item.IconComponent}
            selected={label === item.label}
          />
        ))}
      </div>

      <div className={styles.logoutIcon}>
        <LogoutIcon />
        Logout
      </div>
    </div>
  );
};
