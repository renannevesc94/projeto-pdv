// carregar os dados do carrinho de compras
// atualizar os dados do carrinho de compras
// remover os dados do carrinho de compras

import useLocalStorage from "@rehooks/local-storage";
import { createContext, useCallback, useContext } from "react";

type CartProviderType = {
  updateCart: (data: SaleProductsType) => void;

  saleProducts: SaleProductsType | null;
};

type SaleProductsType = {
  value: string;
  title: string;
  quatity: string;
};

export const CartContext = createContext<CartProviderType>({
  updateCart() {},
  saleProducts: null,
});

export const CartProviderBase = () => {
  const [saleProducts, setSaleProducts] = useLocalStorage<SaleProductsType | null>(
    "saleProducts",
    null
  );

  const updateCart = useCallback(
    (data: SaleProductsType) => {
      setSaleProducts(data);
    },
    [setSaleProducts]
  );

  return {
    updateCart,
    saleProducts,
  };
};

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const value = CartProviderBase();
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

// eslint-disable-next-line react-refresh/only-export-components
export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useAuth must be used within an CartProvider");
  }

  return context;
};
