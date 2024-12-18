import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Home } from "./modules/home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./styles/reset.css";
import "./styles/global.module.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Login } from "./modules/auth";

const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/",
    element: <Login />,
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </StrictMode>
);
