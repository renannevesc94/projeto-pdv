import { createBrowserRouter } from "react-router-dom";
import { ProtectedRouter } from "./protected/ProtectedRouter";
import { Home } from "../modules/home";
import { Login } from "../modules/auth";
import { Layout } from "../components/Layout";
import { CartProvider } from "../providers/CartProvider";

export const Routes = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    element: <ProtectedRouter />,
    children: [
      {
        element: <Layout />,
        children: [
          {
            path: "/home",
            element: (
              <CartProvider>
                <Home />
              </CartProvider>
            ),
          },
          {
            path: "/produtos",
            element: <div>Produtos</div>,
          },
          {
            path: "/clientes",
            element: <div>Clientes</div>,
          },
        ],
      },
    ],
  },
  {
    element: <ProtectedRouter role="ADMINISTRADOR" />,
    children: [
      {
        element: <Layout />,
        children: [
          {
            path: "/vendas",
            element: <div>Vendas</div>,
          },
          {
            path: "/dashboard",
            element: <div>Dashboard</div>,
          },
        ],
      },
    ],
  },
]);
