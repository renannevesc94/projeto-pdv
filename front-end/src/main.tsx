import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import "./styles/reset.css";
import "./styles/global.module.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Routes } from "./routes";

const queryClient = new QueryClient();

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={Routes} />
    </QueryClientProvider>
  </StrictMode>
);
