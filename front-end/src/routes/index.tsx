import { createBrowserRouter } from "react-router-dom";
import { ProtectedRouter } from "./protected/ProtectedRouter";
import { Home } from "../modules/home";
import { Login } from "../modules/auth";
import { Layout } from "../components/Layout";

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
            element: <Home />,
          },
          {
            path: "/produtos",
            element: <div>Produtos</div>,
          },
        ],
      },
    ],
  },
  {
    element: <ProtectedRouter role="ADM" />,
    children: [
      {
        element: <Layout />,
        children: [
          {
            path: "/Vendas",
            element: <div>Vendas</div>,
          },
        ],
      },
    ],
  },
]);
