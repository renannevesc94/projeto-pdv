import Layout from "@/components/layout/Layout";
import LoginPage from "@/modules/auth/LoginPage";
import ClientsPage from "@/modules/clients/ClientsPage";
import ProductsPage from "@/modules/products/ProductsPage";
import { ProductContextProvider } from "@/modules/products/providers/CurrentProductProvider";

import { createBrowserRouter } from "react-router-dom";

export const RoutesApp = createBrowserRouter(
  [
    {
      path: "/",
      element: <LoginPage />,
    },
    {
      element: <Layout />,
      children: [
        {
          path: "/produtos",
          element: (
            <ProductContextProvider>
              <ProductsPage />
            </ProductContextProvider>
          ),
        },
        {
          path: "/clientes",
          element: <ClientsPage />,
        },
      ],
    },
  ],
  {
    future: {
      v7_relativeSplatPath: true,
    },
  }
);
