import { createBrowserRouter } from "react-router-dom";
import { ProtectedRouter } from "./protected/ProtectedRouter.tsx";
import { Home } from "../modules/home";

import { Login } from "../modules/auth";

export const Teste = () => {
  return <div>AQUI NÂO PODE</div>;
};

export const Routes = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    element: <ProtectedRouter />,
    children: [
      {
        path: "/home",
        element: <Home />,
      },
    ],
  },

  {
    element: <ProtectedRouter role="ADMINISTRADOR" />,
    children: [
      {
        path: "/sales",
        element: <Teste />,
      },
    ],
  },
]);
