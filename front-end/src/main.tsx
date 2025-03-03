import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./global.css";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { RouterProvider } from "react-router-dom";
import { RoutesApp } from "./routes";

const queryClient = new QueryClient();

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={RoutesApp} />
    </QueryClientProvider>
  </StrictMode>
);
