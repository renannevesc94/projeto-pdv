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
import { useState } from "react";

export const SideBar = () => {
  const [selected, setSelected] = useState("Home");

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
            selected={selected}
            setSelected={setSelected}
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
