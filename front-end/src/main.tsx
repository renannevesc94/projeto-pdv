import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Home } from "./modules/home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./styles/reset.css";
import "./styles/global.module.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Login } from "./modules/auth";
import { AuthContextProvider } from "./providers/AuthProvider";
import { ProtectedRouter } from "./components/ProtectedRouter";
const queryClient = new QueryClient();

export const Teste = () => {
  return <div>AQUI NÂO PODE</div>;
};
const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <AuthContextProvider>
        <Login />
      </AuthContextProvider>
    ),
  },
  {
    element: (
      <AuthContextProvider>
        <ProtectedRouter />
      </AuthContextProvider>
    ),
    children: [
      {
        path: "/home",
        element: <Home />,
      },
    ],
  },

  {
    element: <ProtectedRouter role="ADMINISTRADOR" />,
    children: [{ path: "/sales", element: <Teste /> }],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </StrictMode>
);
